import { allViewPortsSchema } from '@/utils/components'
import { Type, type Static } from '@sinclair/typebox'

const Display = Type.Boolean({
  code: 'config-viewport',
  title: '屏幕',
  default: true,
  errorMessage: {
    required: '选择一项即可',
  },
  rules: [{ required: true, message: '选择一项即可', trigger: 'change' }],
})
const Src = Type.String({
  code: 'config-files',
  title: '图片',
  default: '',
  minLength: 1,
  errorMessage: {
    required: '最少1个字符',
    minLength: '最少1个字符',
  },
  rules: [{ required: true, min: 1, message: '最少1个字符', trigger: 'change' }],
})
const Link = Type.String({
  code: 'config-input',
  title: '链接',
  default: '',
  placeholder: '请输入链接',
  minLength: 1,
  errorMessage: {
    required: '最少1个字符',
    minLength: '最少1个字符',
  },
  rules: [{ required: true, min: 1, message: '最少1个字符', trigger: 'change' }],
})
const Width = Type.String({
  code: 'config-input',
  title: '宽度',
  default: '100%',
  placeholder: '请输入宽度',
  minLength: 1,
  errorMessage: {
    required: '最少1个字符',
    minLength: '最少1个字符',
  },
  rules: [{ required: true, min: 1, message: '最少1个字符', trigger: 'change' }],
})
const Height = Type.String({
  code: 'config-input',
  title: '高度',
  default: '295px',
  placeholder: '请输入高度',
  minLength: 1,
  errorMessage: {
    required: '最少1个字符',
    minLength: '最少1个字符',
  },
  rules: [{ required: true, min: 1, message: '最少1个字符', trigger: 'change' }],
})
const Top = Type.String({
  code: 'config-input',
  title: '居上',
  default: '0px',
  placeholder: '请输入居上位置',
  inCanvas: true,
})
const Left = Type.String({
  code: 'config-input',
  title: '居左',
  default: '0px',
  placeholder: '请输入居左位置',
  inCanvas: true,
})

const schema = Type.Object({
  display: allViewPortsSchema(Display),
  src: allViewPortsSchema(Src),
  link: allViewPortsSchema(Link),
  width: allViewPortsSchema(Width),
  height: allViewPortsSchema(Height),
  top: Type.Optional(allViewPortsSchema(Top)),
  left: Type.Optional(allViewPortsSchema(Left)),
})

export default schema

export type ImageSchema = Static<typeof schema>
