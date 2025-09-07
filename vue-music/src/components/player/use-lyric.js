import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'
import { getLyric } from '@/service/song'
import Lyric from 'lyric-parser'

export default function useLyric({ songReady, currentTime }) {
  const lyricScrollRef = ref(null)
  const lyricListRef = ref(null)
  // 歌词
  const currentLyric = ref(null)
  const pureMusicLyric = ref('')
  const playingLyric = ref('')
  // 当前行号
  const currentLineNum = ref(0)

  const store = useStore()
  const currentSong = computed(() => store.getters.currentSong)
  watch(currentSong, async (newSong) => {
    if (!newSong.url || !newSong.id) {
      return
    }
    // 清理Lyric，防止切换歌曲时有残留值
    stopLyric()
    currentLyric.value = null
    currentLineNum.value = null
    pureMusicLyric.value = ''
    playingLyric.value = ''
    // if (!newSong.lyric) {
    //   return
    // }
    const lyric = await getLyric(newSong)
    store.commit('addSongLyric', {
      song: newSong,
      lyric
    })

    // 在lyric获取后歌曲切换，取消
    if (currentSong.value.lyric !== lyric) {
      return
    }
    // 解析歌词
    currentLyric.value = new Lyric(lyric, handleLyric)

    const hasLyric = currentLyric.value.lines.length

    // 异步代码都执行完成后(获取歌词之和且songReady了)
    if (hasLyric) {
      console.log(`songReady: ${songReady}`)
      if (songReady.value) {
        playLyric()
      }
    } else {
      playingLyric.value = pureMusicLyric.value = lyric.replace(
        /\[(\d{2}:\d{2}:\d{2}\])/g,
        ''
      )
    }
  })
  // TODO 行号处理内部实现原理理解
  function handleLyric({ lineNum, txt }) {
    currentLineNum.value = lineNum
    playingLyric.value = txt

    const scrollComp = lyricScrollRef.value
    const listEl = lyricListRef.value
    // lyricListRef不存在
    if (!listEl) {
      return
    }
    if (lineNum > 5) {
      const lineEl = listEl.children[lineNum - 5]
      scrollComp.scroll.scrollToElement(lineEl, 1000)
    } else {
      // 前6行滚动到顶部
      scrollComp.scroll.scrollTo(0, 0, 1000)
    }
  }
  function stopLyric() {
    const currentLyricVal = currentLyric.value
    if (currentLyricVal) {
      currentLyricVal.stop()
    }
  }

  function playLyric() {
    const currentLyricVal = currentLyric.value
    if (currentLyricVal) {
      currentLyricVal.seek(currentTime.value * 1000)
    }
  }
  return {
    currentLyric,
    currentLineNum,
    playLyric,
    lyricScrollRef,
    lyricListRef,
    stopLyric,
    pureMusicLyric,
    playingLyric
  }
}
