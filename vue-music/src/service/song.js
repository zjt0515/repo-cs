import { get } from './base'

export function processSongs(songs) {
  if (!songs.length) {
    return Promise.resolve(songs)
  }

  return get('/api/getSongsUrl', {
    mid: songs.map((song) => {
      return song.mid
    })
  }).then((result) => {
    const map = result.map
    return songs
      .map((song) => {
        song.url = map[song.mid]
        return song
      })
      .filter((song) => {
        return song.url && song.url.indexOf('vkey') > -1
      })
  })
}
const lyricMap = {}
// 获取歌词
export function getLyric(song) {
  // lyric已经被缓存在了song中
  if (song.lyric) {
    return Promise.resolve(song.lyric)
  }
  const mid = song.mid
  // lyric 通过mid缓存在map中
  const lyric = lyricMap[mid]
  if (lyric) {
    return Promise.resolve(lyric)
  }

  return get('/api/getLyric', {
    mid
  }).then((res) => {
    const lyric = res ? res.lyric : '[00:00:00]该歌曲暂时无法获取'
    return lyric
  })
}
