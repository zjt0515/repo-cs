import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/dom.js'

const relativeCls = 'g-relative'

export default function createLoadingLikeDirective(Comp) {
  return {
    mounted(el, binding) {
      const app = createApp(Comp)
      const instance = app.mount(document.createElement('div'))
      // 解决一个组件上有多个同类型的自定义组件bug
      const name = Comp.name
      if (!el[name]) {
        el[name] = {}
      }
      el[name].instance = instance

      // const title = binding.arg
      // if (typeof title !== 'undefined') {
      //   instance.setTitle(title)
      // }
      // 加载时，添加instance(div+Comp)
      if (binding.value) {
        append(el)
      }
    },
    updated(el, binding) {
      // const title = binding.arg
      // if (typeof title !== 'undefined') {
      //   el.instance.setTitle(title)
      // }
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }
  function append(el) {
    const style = getComputedStyle(el)
    const name = Comp.name
    console.log(name);
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
      addClass(el, relativeCls)
    }
    el.appendChild(el[name].instance.$el)
  }

  function remove(el) {
    const name = Comp.name
    removeClass(el, relativeCls)
    el.removeChild(el[name].instance.$el)
  }
}
