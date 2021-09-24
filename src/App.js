import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import store from './redux/store';
// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import { NavLink, Route } from 'react-router-dom'
// import { Button } from 'antd';
// import { StepBackwardOutlined } from '@ant-design/icons'
// import 'antd/dist/antd.css'; 
import { createIncrementAction, createDecrementAction, createincrementedcountAsync } from './redux/count-action'

class App extends React.Component {
  incrementedcount = () => {
    const { value } = this.select;
    store.dispatch(createIncrementAction(value))
  }
  decrementedcount = () => {
    const { value } = this.select;
    store.dispatch(createDecrementAction(value))
  }
  incrementedcountcountByOdd = () => {
    let preState = store.getState()
    if (preState % 2 === 0) return
    const { value } = this.select;
    store.dispatch(createIncrementAction(value))
  }
  incrementedcountAsync = () => {
    const { value } = this.select;
    store.dispatch(createincrementedcountAsync(value, 500))
  }
  render() {
    return (
      <div className="App">
        {/* <Button type="primary">Primary Button</Button>
      <StepBackwardOutlined />
      <NavLink to="/first-page">first-page</NavLink>
      <NavLink to="/second-page">second-page</NavLink>
      <Route path="/first-page" component={FirstPage} ></Route>
      <Route path="/second-page" component={SecondPage} ></Route> */}
        <h1>相加的和是: {store.getState()}</h1>
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
    );
  }
}

export default App;
