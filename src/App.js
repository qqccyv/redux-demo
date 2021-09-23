import './App.css';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import { NavLink, Route } from 'react-router-dom'
import { Button } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons'
// import 'antd/dist/antd.css'; 
function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <StepBackwardOutlined />
      <NavLink to="/first-page">first-page</NavLink>
      <NavLink to="/second-page">second-page</NavLink>
      <Route path="/first-page" component={FirstPage} ></Route>
      <Route path="/second-page" component={SecondPage} ></Route>
    </div>
  );
}

export default App;
