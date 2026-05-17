import { CloudSun } from 'lucide-react'

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
      <div className="p-4 rounded-full bg-blue-100">
        <CloudSun className="w-12 h-12 text-blue-500" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800">欢迎使用天气应用</h1>
      <p className="text-gray-500 max-w-xs">
        点击下方按钮，获取您所在位置的实时天气信息
      </p>
    </div>
  )
}
