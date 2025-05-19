import { _decorator, Component } from 'cc'
import { TileMapManager } from '../Tile/TileMapManager'
import { createUINode } from '../Utils'
import { DataManagerInstance } from 'db://assets/Runtime/Datamanager'
import Levels, { ILevel } from 'db://assets/Levels'

const { ccclass, property } = _decorator

@ccclass('SceneManager')
export class SceneManager extends Component {
  level: ILevel
  start() {
    this.generateTileMap()
  }

  /**
   * 获取地图信息
   */
  initLevel() {
    const level = Levels[`level${1}`]

    DataManagerInstance.mapInfo = this.level.mapInfo
    DataManagerInstance.mapColumnCount = this.level.mapInfo.length || 0
    DataManagerInstance.mapColumnCount = this.level.mapInfo[0].length || 0

  }

  generateTileMap() {
    const stage = createUINode()
    stage.setParent(this.node)

    const tileMap = createUINode()
    tileMap.setParent(stage)
    const tileManager = tileMap.addComponent(TileMapManager)
    tileManager.init()
  }
}