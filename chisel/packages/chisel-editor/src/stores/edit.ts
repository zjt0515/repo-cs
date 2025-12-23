import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ViewPort } from '../types/edit'

export const useEditStore = defineStore('edit', {
  state: () => ({
    viewport: ViewPort.DESKTOP,
  }),
  getters: {},
  actions: {
    setViewPort(viewPort: ViewPort) {
      this.viewport = viewPort
    },
  },
})
