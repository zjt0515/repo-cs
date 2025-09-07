import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
    }
  }

  static defaultProps = {
    name: '默认名字',
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  clickHandle() {
    this.setState({ count: this.state.count + 1 })
  }

  // 必须方法
  render() {
    console.log('render')
    return (
      <div className="container">
        <h1>类组件</h1>
        <div className="data">
          <h2>组件状态</h2>
          {this.count}
          <button onClick={() => this.clickHandle}> + 1</button>
        </div>
        <div className="props">
          <h2>props</h2>
          {this.props.name}
        </div>
      </div>
    )
  }
}

ClassComponent.propTypes = {}

export default ClassComponent
