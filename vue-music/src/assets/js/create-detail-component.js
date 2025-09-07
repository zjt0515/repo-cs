import MusicList from '@/components/music-list/music-list'
import storage from 'good-storage'
import { processSongs } from '@/service/song'

/**
 * 创建详情组件
 * @param {*} name component name
 * @param {*} key storage key
 * @param {*} fetch
 * @returns
 */
export default function createDetailComponent(name, key, fetch) {
  return {
    // 组件名
    name,
    components: { MusicList },
    props: {
      data: Object
    },
    data() {
      return {
        // 数据
        songs: [],
        loading: true
      }
    },
    computed: {
      computedData() {
        let ret = null
        const data = this.data
        // debugger
        if (data) {
          ret = data
        } else {
          const cached = storage.session.get(key)
          // mid/id 兼容性处理
          if (
            cached &&
            (cached.mid || cached.id + '') === this.$route.params.id
          ) {
            ret = cached
          }
        }
        return ret
      },
      pic() {
        const data = this.computedData
        return data && data.pic
      },
      title() {
        const data = this.computedData
        // debugger
        return data && (data.name || data.title)
      }
    },
    // 获取数据
    async created() {
      const data = this.computedData
      // debugger
      if (!data) {
        const path = this.$route.matched[0].path
        this.$router.push({
          path
        })
        return
      }
      const result = await fetch(data)
      this.songs = await processSongs(result.songs)
      this.loading = false
    }
  }
}
