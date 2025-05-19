import {
  _decorator,
  Asset,
  Component,
  Layers,
  Node,
  resources,
  Sprite,
  SpriteFrame,
  UITransform,
  WorldNode3DToLocalNodeUI,
} from 'cc'
import levels from '../../Levels'
import { createUINode } from '../Utils'
import { TileManager } from './TileManager'
const { ccclass, property } = _decorator

export const TILE_WIDTH = 55
export const TILE_HEIGHT = 55

@ccclass('TileMapManager')
export class TileMapManager extends Component {
  async init() {
    // 获取地图
    const { mapInfo } = levels[`level${1}`]
    // 获取资源图片
    const spriteFrames = await this.loadRes()

    for (let i = 0; i < mapInfo.length; i++) {
      const column = mapInfo[i]
      for (let j = 0; j < column.length; j++) {
        const item = column[j]
        if (item.src === null || item.type === null) continue

        const node = createUINode()

        // 加载资源
        const tileName = `tile (${mapInfo[i][j].src})`
        const spriteFrame = spriteFrames.find(v => v.name === tileName) || spriteFrames[0]

        const tileManager = node.addComponent(TileManager)
        tileManager.init(spriteFrame, i, j)

        node.setParent(this.node)
      }
    }
  }

  loadRes() {
    return new Promise<SpriteFrame[]>((resolve, reject) => {
      // 加载 test assets 目录下所有 SpriteFrame，并且获取它们的路径
      resources.loadDir('texture/tile/tile', SpriteFrame, function (err, assets) {
        if (err) {
          reject(err)
          return
        }
        resolve(assets)
      })
    })
  }
}
