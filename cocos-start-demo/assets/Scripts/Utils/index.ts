import { Layers, Node, UITransform } from 'cc'

export const createUINode = (name: string = '') => {
  const node = new Node()

  const transform = node.addComponent(UITransform)
  transform.setAnchorPoint(0, 1)

  node.layer = 1 << Layers.nameToLayer('UI_2D')

  return node
}
