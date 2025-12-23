import { PropType } from 'vue-demi'

export type ChImagePropData = {
  display?: MobileAndDesktop
  src?: MobileAndDesktop
  link?: MobileAndDesktop
  width?: MobileAndDesktop
  height?: MobileAndDesktop
}

type MobileAndDesktop = {
  desktop: string
  mobile: string
}

const defaultMobileAndDesktop = {
  desktop: '',
  mobile: '',
}

export const props = {
  data: {
    type: Object as PropType<ChImagePropData>,
    default: () => ({
      display: defaultMobileAndDesktop,
      src: defaultMobileAndDesktop,
      link: defaultMobileAndDesktop,
      width: defaultMobileAndDesktop,
      height: defaultMobileAndDesktop,
    }),
  },
}
