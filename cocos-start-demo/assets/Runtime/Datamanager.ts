import {ITile} from 'db://assets/Levels';

class DataManager {
  mapInfo: Array<ITile>
  mapRowCount: number
  mapColumnCount: number
}
export const DataManagerInstance = new DataManager()