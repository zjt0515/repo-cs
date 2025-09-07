<template>
  <div
    class="player"
    v-show="playlist.length"
  >
    <transition name="normal">
      <!-- 全屏下的player -->
      <div
        class="normal-player"
        v-show="fullScreen"
      >
        <!-- 背景图片 -->
        <div class="background">
          <img
            :src="currentSong.pic"
            alt=""
          />
        </div>

        <!-- 顶栏 -->
        <div class="top">
          <div
            @click="back"
            class="back"
          >
            <i class="icon-back"></i>
          </div>
          <h1 class="title">{{ currentSong.name }}</h1>
          <h2 class="subtitle">{{ currentSong.singer }}</h2>
        </div>

        <!-- midele: CD和Lyric -->
        <div
          class="middle"
          @touchstart.prevent="onMiddleTouchStart"
          @touchmove.prevent="onMiddleTouchMove"
          @touchend.prevent="onMiddleTouchEnd"
        >
          <!-- middle-l: CD层 -->
          <div
            class="middle-l"
            :style="middleLStyle"
          >
            <div class="cd-wrapper">
              <div
                class="cd"
                ref="cdRef"
              >
                <img
                  ref="cdImageRef"
                  class="image"
                  :class="cdPlayingCls"
                  :src="currentSong.pic"
                />
              </div>
            </div>
            <div class="playing-lyric-wrapper">
              <div class="playing-lyric">{{ playingLyric }}</div>
            </div>
          </div>

          <!-- 歌词层 -->
          <Scroll
            ref="lyricScrollRef"
            class="middle-r"
            :style="middleRStyle"
          >
            <div class="lyric-wrapper">
              <div
                v-if="currentLyric"
                ref="lyricListRef"
              >
                <p
                  class="text"
                  :class="{ current: currentLineNum === index }"
                  v-for="(line, index) in currentLyric.lines"
                  :key="line.num"
                >
                  {{ line.txt }}
                </p>
              </div>
              <!-- 纯净音乐歌词 -->
              <div
                class="pure-music"
                v-show="pureMusicLyric"
              >
                <p>{{ pureMusicLyric }}</p>
              </div>
            </div>
          </Scroll>
        </div>

        <!-- 底栏 -->
        <div class="bottom">
          <!-- dot 模板层切换指示 -->
          <div class="dot-wrapper">
            <span
              class="dot"
              :class="{ active: currentShow === 'cd' }"
            ></span>
            <span
              class="dot"
              :class="{ active: currentShow === 'lyric' }"
            ></span>
          </div>
          <!-- progress 进度条 -->
          <div class="progress-wrapper">
            <span class="time time-l">{{ formatTime(currentTime) }}</span>
            <div class="progress-bar-wrapper">
              <progress-bar
                ref="progressBarRef"
                :progress="progress"
                @progress-changing="onProgressChanging"
                @progress-changed="onProgressChanged"
              ></progress-bar>
            </div>
            <span class="time time-r">{{
              formatTime(currentSong.duration)
            }}</span>
          </div>
          <!-- 按钮栏 -->
          <div class="operators">
            <!-- 播放模式 -->
            <div class="icon i-left">
              <i
                :class="modeIcon"
                @click="changeMode"
              ></i>
            </div>
            <div
              class="icon i-left"
              :class="disableCls"
            >
              <i
                class="icon-prev"
                @click="prev"
              ></i>
            </div>
            <div
              class="icon i-center"
              :class="disableCls"
            >
              <i
                :class="playIcon"
                @click="togglePlay"
              ></i>
            </div>
            <div
              class="icon i-right"
              :class="disableCls"
            >
              <i
                class="icon-next"
                @click="next"
              ></i>
            </div>
            <div class="icon i-right">
              <i
                :class="favoriteIcon(currentSong)"
                @click="toggleFavorite(currentSong)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 非全屏下的player -->
    <mini-player
      :progress="progress"
      :toggle-play="togglePlay"
    ></mini-player>
    <!-- audio -->
    <audio
      @pause="pause"
      ref="audioRef"
      @canplay="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="end"
    ></audio>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, watch, ref, nextTick } from 'vue'
import progressBar from './progress-bar.vue'
import Scroll from '../base/scroll/scroll.vue'
import miniPlayer from './mini-player.vue'

import useMode from './use-mode'
import useFavorite from './use-favorite'
import useCD from './use-cd'
import useLyric from './use-lyric'
import useMiddleInteractive from './use-middle-interactive'

import { formatTime } from '@/assets/js/util'
import { PLAY_MODE } from '@/assets/js/constant'

// data
const audioRef = ref(null)
const progressBarRef = ref(null)
const songReady = ref(false)
const currentTime = ref(0)
const progressChanging = ref(false)

// vuex
const store = useStore()
const fullScreen = computed(() => store.state.fullScreen)
const currentSong = computed(() => store.getters.currentSong)
const currentIndex = computed(() => store.state.currentIndex)
const playing = computed(() => store.state.playing)
const playlist = computed(() => store.state.playlist)
const playMode = computed(() => store.state.playMode)

// hooks
const { modeIcon, changeMode } = useMode()

const { favoriteIcon, toggleFavorite } = useFavorite()

const { cdPlayingCls, cdRef, cdImageRef } = useCD()

const {
  currentLyric,
  currentLineNum,
  playLyric,
  lyricScrollRef,
  lyricListRef,
  stopLyric,
  pureMusicLyric,
  playingLyric
} = useLyric({ songReady, currentTime })

const {
  currentShow,
  middleLStyle,
  middleRStyle,
  onMiddleTouchStart,
  onMiddleTouchMove,
  onMiddleTouchEnd
} = useMiddleInteractive()

// computed
const progress = computed(() => currentTime.value / currentSong.value.duration)
const playIcon = computed(() => {
  return playing.value ? 'icon-pause' : 'icon-play'
})
const disableCls = computed(() => {
  return songReady.value ? '' : 'disableCls'
})

// watch ref
watch(currentSong, (newSong) => {
  if (!newSong.id || !newSong.url) return

  currentTime.value = 0
  songReady.value = false
  if (audioRef.value) {
    const audioEl = audioRef.value
    audioEl.src = newSong.url
    audioEl.play()
  }
})

// watch vuex
watch(playing, (newPlaying) => {
  if (!songReady.value) {
    return
  }
  if (audioRef.value) {
    const audioEl = audioRef.value
    if (newPlaying) {
      audioEl.play()
      playLyric()
    } else {
      audioEl.pause()
      stopLyric()
    }
  }
})

// watch vuex
watch(fullScreen, async (newFullScreen) => {
  if (newFullScreen) {
    await nextTick()
    progressBarRef.value.setOffset(progress.value)
  }
})

// method
function back() {
  // store.commit('setPlayingState', false)
  store.commit('setFullScreen', false)
}

function togglePlay() {
  if (!songReady.value) {
    return
  }
  store.commit('setPlayingState', !playing.value)
}

// 处理audio被动暂停的特殊情况
function pause() {
  store.commit('setPlayingState', false)
}

// 上一首
function prev() {
  const list = playlist.value
  if (!songReady.value || !list.length) {
    return
  }
  let index = currentIndex.value - 1
  if (currentIndex.value <= 0) {
    index = list.length - 1
  }
  store.commit('setCurrentIndex', index)

  if (!playing.value) {
    store.commit('setPlayingState', true)
  }
}

// 下一首
function next() {
  const list = playlist.value
  if (!songReady.value || !list.length) {
    return
  }

  let index = currentIndex.value + 1
  if (index >= list.length) {
    index = 0
  }
  store.commit('setCurrentIndex', index)

  if (!playing.value) {
    store.commit('setPlayingState', true)
  }
}

// 循环当前
function loop() {
  audioRef.value.currentTime = 0
  audioRef.value.play()
  // 播放结束后audio会自动pause
  store.commit('setPlayingState', true)
}

function ready() {
  if (songReady.value) {
    return
  }
  songReady.value = true

  playLyric()
}
function error() {
  songReady.value = true
}

function updateTime(e) {
  if (!progressChanging.value) {
    currentTime.value = e.target.currentTime
  }
}

function end(e) {
  currentTime.value = 0
  if (playMode.value === PLAY_MODE.loop) {
    loop()
  } else {
    next()
  }
}

function onProgressChanging(progress) {
  progressChanging.value = true
  // 修改 currentTime
  currentTime.value = currentSong.value.duration * progress
  // 同步歌词time，但不播放歌词（停止歌词play），即play一下之后立即停止
  playLyric()
  stopLyric()
  // 如果先stop再play，就没有stop的效果了，拖着进度条不放他也在play
}

function onProgressChanged(progress) {
  progressChanging.value = false

  // 修改currentTime
  currentTime.value = currentSong.value.duration * progress
  // 同步歌词time
  playLyric()
  // 修改audio播放时间
  audioRef.value.currentTime = currentTime.value
  if (!playing.value) {
    store.commit('setPlayingState', true)
  }
}
</script>

<style lang="scss" scoped>
.player {
  .normal-player {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: $color-background;

    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(20px);

      img {
        width: 100%;
        height: 100%;
      }
    }

    .top {
      position: relative;
      margin-bottom: 25px;

      .back {
        position: absolute;
        top: 0;
        left: 6px;
        z-index: 50;
      }

      .icon-back {
        display: block;
        padding: 9px;
        font-size: $font-size-large-x;
        color: $color-theme;
        transform: rotate(-90deg);
      }

      .title {
        width: 70%;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
        @include no-wrap();
        font-size: $font-size-large;
        color: $color-text;
      }

      .subtitle {
        line-height: 20px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-text;
      }
    }
    // 唱片层
    .middle {
      position: fixed;
      width: 100%;
      top: 80px;
      bottom: 170px;
      white-space: nowrap;
      font-size: 0;

      .middle-l {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 80%;

        .cd-wrapper {
          position: absolute;
          left: 10%;
          top: 0;
          width: 80%;
          box-sizing: border-box;
          height: 100%;

          .cd {
            width: 100%;
            height: 100%;
            border-radius: 50%;

            img {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              border-radius: 50%;
              border: 10px solid rgba(255, 255, 255, 0.1);
            }

            .playing {
              animation: rotate 20s linear infinite;
            }
          }
        }

        .playing-lyric-wrapper {
          width: 80%;
          margin: 30px auto 0 auto;
          overflow: hidden;
          text-align: center;

          .playing-lyric {
            height: 20px;
            line-height: 20px;
            font-size: $font-size-medium;
            color: $color-text-l;
          }
        }
      }

      .middle-r {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .lyric-wrapper {
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-align: center;

          .text {
            line-height: 32px;
            color: $color-text-l;
            font-size: $font-size-medium;

            &.current {
              color: $color-text;
            }
          }

          .pure-music {
            padding-top: 50%;
            line-height: 32px;
            color: $color-text-l;
            font-size: $font-size-medium;
          }
        }
      }
    }

    .bottom {
      position: absolute;
      bottom: 50px;
      width: 100%;

      .dot-wrapper {
        text-align: center;
        font-size: 0;

        .dot {
          display: inline-block;
          vertical-align: middle;
          margin: 0 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: $color-text-l;

          &.active {
            width: 20px;
            border-radius: 5px;
            background: $color-text-ll;
          }
        }
      }

      .progress-wrapper {
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0px auto;
        padding: 10px 0;

        .time {
          color: $color-text;
          font-size: $font-size-small;
          flex: 0 0 40px;
          line-height: 30px;
          width: 40px;

          &.time-l {
            text-align: left;
          }

          &.time-r {
            text-align: right;
          }
        }

        .progress-bar-wrapper {
          flex: 1;
        }
      }

      .operators {
        display: flex;
        align-items: center;

        .icon {
          flex: 1;
          color: $color-theme;

          &.disable {
            color: $color-theme-d;
          }

          i {
            font-size: 30px;
          }
        }

        .i-left {
          text-align: right;
        }

        .i-center {
          padding: 0 20px;
          text-align: center;

          i {
            font-size: 40px;
          }
        }

        .i-right {
          text-align: left;
        }

        .icon-favorite {
          color: $color-sub-theme;
        }
      }
    }

    &.normal-enter-active,
    &.normal-leave-active {
      transition: all 0.6s;

      .top,
      .bottom {
        transition: all 0.6s cubic-bezier(0.45, 0, 0.55, 1);
      }
    }

    &.normal-enter-from,
    &.normal-leave-to {
      opacity: 0;

      .top {
        transform: translate3d(0, -100px, 0);
      }

      .bottom {
        transform: translate3d(0, 100px, 0);
      }
    }
  }
}
</style>
