import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Count from './container/count';
// import Count from './components/count';
import store from './redux/store';
// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import { NavLink, Route } from 'react-router-dom'
// import { Button } from 'antd';
// import { StepBackwardOutlined } from '@ant-design/icons'
// import 'antd/dist/antd.css'; 

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {/* <Button type="primary">Primary Button</Button>
      <StepBackwardOutlined />
      <NavLink to="/first-page">first-page</NavLink>
      <NavLink to="/second-page">second-page</NavLink>
      <Route path="/first-page" component={FirstPage} ></Route>
      <Route path="/second-page" component={SecondPage} ></Route> */}
        <Count store={store} />
      </div>
    );
  }
}

export default App;
