import { songs, categories, filterSongs, formatTime } from './songs.js';

const $ = id => document.getElementById(id);
const audio = $('audio');
const playIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 4 13 8-13 8z"/></svg>';
const pauseIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>';
let category = 'all';
let current = songs[0];
let queue = [...songs];
let repeated = new Set();
let playRequest = 0;
let loading = false;
let seeking = false;

function visibleSongs() { return filterSongs($('search').value, category, $('sort').value); }
function showMessage(text = '') { $('player-message').textContent = text; $('player-message').hidden = !text; }

function renderCategories() {
  for (const cat of categories) {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'category-button'; button.dataset.category = cat.id;
    button.setAttribute('aria-pressed', String(cat.id === category));
    const count = cat.id === 'all' ? songs.length : songs.filter(song => song.category === cat.id).length;
    const symbol = document.createElement('span'); symbol.className = 'category-symbol'; symbol.setAttribute('aria-hidden', 'true'); symbol.textContent = cat.symbol;
    const label = document.createElement('span'); label.textContent = cat.label;
    const counter = document.createElement('span'); counter.className = 'category-count'; counter.textContent = count;
    button.append(symbol, label, counter);
    button.addEventListener('click', () => {
      category = cat.id;
      for (const other of $('categories').children) other.setAttribute('aria-pressed', String(other === button));
      renderList();
    });
    $('categories').append(button);
  }
}

function renderList() {
  const filtered = visibleSongs();
  const fragment = document.createDocumentFragment();
  for (const song of filtered) {
    const card = document.createElement('article'); card.className = 'song-card'; card.dataset.id = song.id; card.setAttribute('role', 'listitem');
    const image = document.createElement('img'); image.src = `music-room/images/${song.image}`; image.alt = ''; image.className = 'song-cover'; image.width = 96; image.height = 96; image.loading = 'lazy';
    const copy = document.createElement('div'); copy.className = 'song-copy';
    const meta = document.createElement('div'); meta.className = 'song-meta';
    const cat = document.createElement('span'); cat.className = 'song-category'; cat.textContent = categories.find(item => item.id === song.category).label;
    const duration = document.createElement('span'); duration.textContent = formatTime(song.duration); duration.setAttribute('aria-label', `${Math.floor(song.duration / 60)}分${song.duration % 60}秒`);
    meta.append(cat, duration);
    const title = document.createElement('h3'); title.textContent = song.title;
    const status = document.createElement('span'); status.className = 'song-status'; status.hidden = true;
    copy.append(meta, title, status);
    const play = document.createElement('button'); play.className = 'card-play'; play.type = 'button'; play.setAttribute('aria-label', `${song.title}を再生`); play.innerHTML = playIcon;
    play.addEventListener('click', () => {
      if (song.id === current.id) { if (audio.paused) queue = visibleSongs(); togglePlayback(); }
      else { queue = visibleSongs(); selectSong(song); }
    });
    card.append(image, copy, play);
    if (song.order === Math.max(...songs.map(item => item.order))) { const badge = document.createElement('span'); badge.className = 'new-badge'; badge.textContent = 'いちばん新しい歌'; card.append(badge); }
    fragment.append(card);
  }
  $('song-list').replaceChildren(fragment);
  $('result-count').textContent = `${filtered.length}曲 / 全${songs.length}曲`;
  $('empty-state').hidden = filtered.length > 0;
  $('clear-search').hidden = !$('search').value;
  syncPlayer();
}

function syncPlayer() {
  const playing = !audio.paused && !audio.ended;
  $('toggle-play').innerHTML = playing ? pauseIcon : playIcon;
  $('toggle-play').setAttribute('aria-label', playing ? '一時停止' : '再生');
  $('toggle-loop').setAttribute('aria-pressed', String(audio.loop));
  $('loop-state').textContent = audio.loop ? 'オン' : 'オフ';
  $('playback-status').textContent = loading ? '読み込み中…' : playing ? (audio.loop ? '♪ 1曲リピート中' : '♪ いま聴いているうた') : '一時停止中・▶ で再生';
  $('queue-note').textContent = audio.loop ? 'この曲をくり返し再生' : `${queue.length}曲を順に再生 · ${queue.findIndex(song => song.id === current.id) + 1} / ${queue.length}`;
  $('player').classList.toggle('loading', loading);
  $('previous').disabled = queue.length < 2;
  $('next').disabled = queue.length < 2;
  for (const card of $('song-list').children) {
    const selected = card.dataset.id === current.id;
    const song = songs.find(item => item.id === card.dataset.id);
    card.classList.toggle('is-current', selected);
    const button = card.querySelector('button');
    button.innerHTML = selected && playing ? pauseIcon : playIcon;
    button.setAttribute('aria-label', `${song.title}を${selected && playing ? '一時停止' : '再生'}`);
    const status = card.querySelector('.song-status'); status.hidden = !selected;
    status.textContent = loading && selected ? '読み込み中…' : playing ? '♪ 再生中' : 'えらんでいるうた';
  }
}

function syncProgress() {
  const duration = Number.isFinite(audio.duration) ? audio.duration : current.duration;
  const time = seeking ? Number($('seek').value) : audio.currentTime;
  $('seek').max = String(duration);
  if (!seeking) $('seek').value = String(time);
  $('seek').style.setProperty('--progress', `${duration ? Math.min(100, time / duration * 100) : 0}%`);
  $('seek').setAttribute('aria-valuetext', `${Math.floor(time / 60)}分${Math.floor(time % 60)}秒 / ${Math.floor(duration / 60)}分${Math.floor(duration % 60)}秒`);
  $('current-time').textContent = formatTime(time);
  $('duration').textContent = formatTime(duration);
}

async function startPlayback() {
  const request = ++playRequest;
  showMessage(); loading = true; syncPlayer();
  try { await audio.play(); if (request === playRequest) { loading = false; syncPlayer(); } }
  catch (error) {
    if (request !== playRequest) return;
    loading = false;
    if (error.name !== 'AbortError') showMessage(error.name === 'NotAllowedError' ? '▶ を押すと再生できます。' : '音声を読み込めませんでした。通信を確認して、もう一度 ▶ を押してください。');
    syncPlayer();
  }
}

function togglePlayback() {
  if (audio.paused) { if (audio.error) audio.load(); startPlayback(); }
  else { ++playRequest; loading = false; audio.pause(); syncPlayer(); }
}

function selectSong(song) {
  ++playRequest; audio.pause(); current = song; seeking = false;
  audio.src = `${song.audio}`;
  audio.loop = repeated.has(song.id);
  $('player-image').src = `music-room/images/${song.image}`;
  $('player-title').textContent = song.title;
  if ('mediaSession' in navigator && 'MediaMetadata' in window) {
    navigator.mediaSession.metadata = new MediaMetadata({ title: song.title, artist: 'マキナツ いきもの音楽室', artwork: [{ src: new URL(`music-room/images/${song.image}`, location.href).href }] });
  }
  syncProgress(); syncPlayer(); startPlayback();
}

function stepSong(direction) {
  const index = queue.findIndex(song => song.id === current.id);
  selectSong(queue[(index + direction + queue.length) % queue.length]);
}

$('search').addEventListener('input', renderList);
$('sort').addEventListener('change', renderList);
$('clear-search').addEventListener('click', () => { $('search').value = ''; renderList(); $('search').focus(); });
$('reset-search').addEventListener('click', () => {
  $('search').value = ''; category = 'all';
  for (const button of $('categories').children) button.setAttribute('aria-pressed', String(button.dataset.category === 'all'));
  renderList(); $('search').focus();
});
$('toggle-play').addEventListener('click', togglePlayback);
$('previous').addEventListener('click', () => stepSong(-1));
$('next').addEventListener('click', () => stepSong(1));
$('toggle-loop').addEventListener('click', () => {
  audio.loop = !audio.loop;
  if (audio.loop) repeated.add(current.id); else repeated.delete(current.id);
  syncPlayer();
});
$('seek').addEventListener('input', () => { seeking = true; syncProgress(); });
$('seek').addEventListener('change', () => { const time = Number($('seek').value); if (audio.readyState > 0) audio.currentTime = time; seeking = false; syncProgress(); });
audio.addEventListener('loadedmetadata', syncProgress);
audio.addEventListener('timeupdate', () => { if (!seeking) syncProgress(); });
audio.addEventListener('play', () => { loading = false; syncPlayer(); });
audio.addEventListener('pause', syncPlayer);
audio.addEventListener('waiting', () => { if (!audio.paused) { loading = true; syncPlayer(); } });
audio.addEventListener('playing', () => { loading = false; showMessage(); syncPlayer(); });
audio.addEventListener('error', () => { loading = false; showMessage('音声を読み込めませんでした。通信を確認して、もう一度 ▶ を押してください。'); syncPlayer(); });
audio.addEventListener('ended', () => {
  if (audio.loop) return;
  if (queue.length > 1) stepSong(1);
  else { loading = false; syncPlayer(); showMessage('おしまい！もう一度聴くときは ▶ を押してね。'); }
});
if ('mediaSession' in navigator) {
  for (const [action, handler] of Object.entries({play: startPlayback, pause: () => audio.pause(), previoustrack: () => stepSong(-1), nexttrack: () => stepSong(1)})) {
    try { navigator.mediaSession.setActionHandler(action, handler); } catch { /* ブラウザ未対応の操作は画面のボタンを使用 */ }
  }
}
// 可変のプレーヤー高さとスマホのセーフエリア分を確保し、最後の曲まで隠さない。
new ResizeObserver(() => document.documentElement.style.setProperty('--player-height', `${$('player').offsetHeight}px`)).observe($('player'));
$('total-count').textContent = `全${songs.length}曲`;
renderCategories(); renderList(); syncProgress();
$('playback-status').textContent = 'えらんで、聴いてみよう';
