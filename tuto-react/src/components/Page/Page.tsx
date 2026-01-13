import './Page.css'

export default function Page(props: any) {
  const pageNumber = getPageNumbers(props)

  if (pageNumber === 0) {
    return null
  }

  const min = getMinPageNumber(props)
  const max = getMaxPageNumber(props)

  const numbers = []
  for (let i = min; i <= max; i++) {
    if (i === props.current) {
      numbers.push(<span onClick={() => { changePageHandler(props, i) }} key={i} className='item current'>{i}</span>)
    } else {
      numbers.push(<span onClick={() => { changePageHandler(props, i) }} key={i} className='item'>{i}</span>)
    }
  }
  return (
    <>
      <span onClick={() => { changePageHandler(props, 1) }} className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>

      {numbers}

      <span onClick={() => { toPrePage(props) }} className={pageNumber === 1 ? 'disabled' : ''}>上一页</span>
      <span onClick={() => { toNextPage(props) }} className={pageNumber === props.current ? 'disabled' : ''}>下一页</span>
      <span>{props.current + '/' + pageNumber}</span>
    </>
  )
}

const changePageHandler = (props: Props, page: number) => {
  if (props.current === page) return;
  props.onPageChange && props.onPageChange(page);
}

const toPrePage = (props: Props) => {
  const current = props.current
  if (current <= 1) return;
  changePageHandler(props, current - 1)
}

const toNextPage = (props: Props) => {
  const current = props.current
  if (current >= getMaxPageNumber(props)) return;
  changePageHandler(props, current + 1)
}

// 最小页码
const getMinPageNumber = (props: Props): number => {
  const min = Math.max(1, props.current - props.limit / 2)
  return min
}

// 最大页码
const getMaxPageNumber = (props: Props): number => {
  const max = getMinPageNumber(props) + getPageNumbers(props) - 1
  return max
}

// 获取页数
function getPageNumbers(props: any) {
  return Math.ceil(props.total / props.limit)
}

type Props = {
  // 当前页码
  current: number
  // 总数据条数
  total: number
  // 每页条数
  limit: number
  onPageChange: Function
}