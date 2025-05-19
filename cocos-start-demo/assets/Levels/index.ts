import { TILE_TYPE_ENUM } from '../Enums'
import level1 from './level1'

/**
 * 所有关卡
 */
const levels = {
  level1,
}

/**
 * 瓦片接口
 */
export interface ITile {
  src: number | null
  type: TILE_TYPE_ENUM | null
}
/**
 * ILevel
 */
export interface ILevel {
  mapInfo: Array<Array<ITile>>
}

const Levels: Record<string, ILevel> = {
  level1,
}
export default levels
