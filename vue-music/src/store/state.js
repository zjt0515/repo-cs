import { FAVORITE_KEY, PLAY_MODE } from '@/assets/js/constant'
import { load } from '@/assets/js/array-storage'
const state = {
  // 歌曲顺序列表
  sequenceList: [],
  // 正在播放的播放列表
  playlist: [],
  playing: false,
  playMode: PLAY_MODE.seqeuence,
  currentIndex: 0,
  fullScreen: false,
  favoriteList: load(FAVORITE_KEY) || []
}

export default state
