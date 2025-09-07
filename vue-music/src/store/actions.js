import { PLAY_MODE } from '@/assets/js/constant'
import { shuffle } from '@/assets/js/util'
import { currentSong } from './getters'

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
/**
 * 切换播放模式
 * @param {*} param0
 * @param {*} mode
 */
export function changeMode({ commit, state, getters }, mode) {
  // 当前播放歌曲
  const currentId = getters.currentSong.id
  if (mode === PLAY_MODE.random) {
    commit('setPlaylist', shuffle(state.sequenceList))
  } else {
    commit('setPlaylist', state.sequenceList)
  }
  // 在变化后的歌曲列表中找 当前播放歌曲index
  const currentSongIndex = state.playlist.findIndex((song) => {
    return song.id === currentId
  })
  // 不改变当前播放的歌曲
  commit('setCurrentIndex', currentSongIndex)
  commit('setPlayMode', mode)
}
