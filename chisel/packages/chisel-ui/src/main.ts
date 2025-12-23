import { App } from 'vue-demi'
import './assets/styles/index.scss'

import ChImage from './components/image/index.vue'

// schema
import imageSchema, { type ImageSchema } from '@/components/image/schema'

import { allViewPortsSchema as _allViewPortsSchema } from './utils/components'

export const allViewPortsSchema = _allViewPortsSchema

export const componentGroup = {
  ChImage,
}
// const components = Object.values(componentGroup)

const components = Object.values(componentGroup)
// global install
const install = (app: App) => {
  components.forEach((component) => {
    const { name } = component
    if (name) {
      app.component(name, component)
    }
  })
}

// schema
export const schema = {
  image: imageSchema,
}
// schema type
export type ComponentSchema = {
  image: ImageSchema
}

export default {
  install,
  ...componentGroup,
}
