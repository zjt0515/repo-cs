import { PLAY_MODE } from '@/assets/js/constant'

const state = {
  sequenceList: [],
  // 正在播放的播放列表
  playlist: [],
  playing: false,
  playMode: PLAY_MODE.seqeuence,
  currentIndex: 0,
  fullScreen: false
}

export default state
