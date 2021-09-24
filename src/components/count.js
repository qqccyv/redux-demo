import React, { Component } from 'react'
// import store from '../redux/store';

export default class count extends Component {
  incrementedcount = () => {
    const { value } = this.select;
    this.props.jia(value)
    // store.dispatch(createIncrementAction(value))
  }
  decrementedcount = () => {
    const { value } = this.select;
    // store.dispatch(createDecrementAction(value))
    this.props.jian(value)
  }
  incrementedcountcountByOdd = () => {
    // let preState = store.getState()
    let preState = this.props.count
    if (preState % 2 === 0) return
    const { value } = this.select;
    this.props.jia(value)
    // store.dispatch(createIncrementAction(value))
  }
  incrementedcountAsync = () => {
    const { value } = this.select;
    // store.dispatch(createincrementedcountAsync(value, 500))
    this.props.jiaAsync(value, 500)
  }
  render() {
    return (
      <div>
        <h1>相加的和是: {this.props.count}</h1>
        <select ref={c => this.select = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.incrementedcount}>+</button>&nbsp;
        <button onClick={this.decrementedcount}>-</button>&nbsp;
        <button onClick={this.incrementedcountcountByOdd}>奇数时加</button>&nbsp;
        <button onClick={this.incrementedcountAsync}>异步加</button>
      </div>
    )
  }
}
