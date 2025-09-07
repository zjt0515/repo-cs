/**
 * 获取bv号
 * @returns
 */
export function getBvIdFromUrl() {
  const match = window.location.href.match(/\/video\/(BV\w+)/)
  return match ? match[1] : null
}
