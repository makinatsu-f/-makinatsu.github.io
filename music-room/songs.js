export const categories = [
  { id: 'all', label: 'すべて', symbol: '♫' },
  { id: 'sea', label: '海のいきもの', symbol: '≈' },
  { id: 'insect', label: 'むし', symbol: '✳' },
  { id: 'land', label: '陸のいきもの', symbol: '♧' },
  { id: 'makinatsu', label: 'マキナツのうた', symbol: '♪' },
];

// 曲を増やすときは、この一覧に1件追加します。音声はリポジトリ直下、画像は music-room/images/ へ。
// order は追加順。既存 music.html の曲名・対応ファイルをそのまま保持。
export const songs = [
  { id: 'song-12', order: 12, title: 'これ、ぼくのだいすき！', category: 'makinatsu', keywords: 'これ ぼくの だいすき 大好き', audio: 'song_12.mp3', image: 'thumb_12.jpeg', duration: 53 },
  { id: 'song-11', order: 11, title: 'つくっちゃった！アノマロカリス', category: 'sea', keywords: 'あのまろかりす 古代 カンブリア', audio: 'アノマロカリス.mp3', image: 'thumb_11.jpg', duration: 99 },
  { id: 'song-10', order: 10, title: 'アカシュモクザメ', category: 'sea', keywords: 'あかしゅもくざめ さめ サメ 鮫', audio: 'song_10.mp3', image: 'thumb_10.jpg', duration: 44 },
  { id: 'song-09', order: 9, title: 'ヘラクレス！ヘラクレス！', category: 'insect', keywords: 'へらくれす おおかぶと カブトムシ かぶとむし 昆虫 むし', audio: 'song_09.mp3', image: 'thumb_09.jpg', duration: 37 },
  { id: 'song-08', order: 8, title: 'メガロドンの歌', category: 'sea', keywords: 'めがろどん さめ サメ 鮫 古代', audio: 'song_08.mp3', image: 'thumb_08.jpg', duration: 25 },
  { id: 'song-07', order: 7, title: 'いきものアンブレマーカー', category: 'makinatsu', keywords: 'あんぶれまーかー かさ 傘', audio: 'song_07.mp3', image: 'thumb_07.jpg', duration: 27 },
  { id: 'song-06', order: 6, title: '四角いワニのウロコ', category: 'land', keywords: 'しかくい わに うろこ 鰐', audio: 'song_06.mp3', image: 'thumb_06.jpg', duration: 24 },
  { id: 'song-05', order: 5, title: '愛しのロブスター', category: 'sea', keywords: 'いとしの ろぶすたー えび エビ 海老', audio: 'song_05.mp3', image: 'thumb_05.jpg', duration: 34 },
  { id: 'song-04', order: 4, title: '愛しのネコザメ2', category: 'sea', keywords: 'いとしの ねこざめ さめ サメ 鮫', audio: 'song_04.mp3', image: 'thumb_04.jpg', duration: 37 },
  { id: 'song-03', order: 3, title: 'ホホジロの白', category: 'sea', keywords: 'ほほじろ しろ ホホジロザメ さめ サメ 鮫', audio: 'song_03.mp3', image: 'thumb_03.jpg', duration: 31 },
  { id: 'song-02', order: 2, title: 'どこだっけ♪', category: 'makinatsu', keywords: 'どこだっけ おさいほう 裁縫', audio: 'song_02.mp3', image: 'thumb_02.jpg', duration: 56 },
  { id: 'song-01', order: 1, title: 'いっしょにおでかけ！ジンベエザメ', category: 'sea', keywords: 'じんべえざめ さめ サメ 鮫 おでかけ', audio: 'song_01.mp3', image: 'thumb_01.jpg', duration: 34 },
];

export function normalize(text) {
  return text.normalize('NFKC').toLowerCase().replace(/[ァ-ヶ]/g, char => String.fromCharCode(char.charCodeAt(0) - 0x60)).replace(/[\s！!♪、。・]/g, '');
}

export function filterSongs(query = '', category = 'all', sort = 'new') {
  const terms = query.trim().split(/\s+/).filter(Boolean).map(normalize);
  return songs.filter(song => (category === 'all' || song.category === category) && terms.every(term => normalize(song.title + song.keywords).includes(term)))
    .sort(sort === 'name' ? (a, b) => a.title.localeCompare(b.title, 'ja') : (a, b) => b.order - a.order);
}

export function formatTime(seconds) {
  const safe = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, '0')}`;
}
