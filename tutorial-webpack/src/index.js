import './assets/less/index.less'

require('./a')

var banner = require('./assets/banner.css')
console.log(banner.default.toString())

const bannerStyle = banner.default.toString()
const style = document.createElement('style')
style.innerHTML = bannerStyle

document.head.appendChild(style)
