import { PLAY_MODE } from '@/assets/js/constant'
import { shuffle } from '@/assets/js/util'

/**
 * 选择播放
 * @param {*} param0
 * @param {*} param1
 */
export function selectPlay({ commit }, { list, index }) {
  commit('setPlayMode', PLAY_MODE.seqeuence)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlaylist', list)
  commit('setCurrentIndex', index)
}

/**
 * 随机播放
 * @param {*} param0
 * @param {*} param1
 */
export function randomPlay({ commit }, list) {
  commit('setPlayMode', PLAY_MODE.random)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlaylist', shuffle(list))
  commit('setCurrentIndex', 0)
}
