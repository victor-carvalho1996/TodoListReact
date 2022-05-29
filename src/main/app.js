import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'
import React from 'react';
import About from '../about/about';
import Menu from '../template/Menu';
import Todo from '../todo/todo';
import Routes from './routes';

function App() {
    return (
      <div className="container">
        <Menu />
        <Routes />
      </div>
    );
}
  
export default App;