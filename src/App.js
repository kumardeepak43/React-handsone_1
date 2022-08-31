import './App.css';

import ClassComp from './components/ClassComp';
import React from 'react';
import FunComp from './components/funComp';

class App extends React.Component{
  state = {
    showfun : false,
    showClass : false

  }

  render(){
    return (
      <div className="App">
        <p><h1>React styling using class and functional components</h1></p>
      <div className='btn-container'>
        <button className='btn'onClick={()=>this.setState({showfun: true})}>click functional components</button>
        <button className='btn'onClick={()=>this.setState({showClass: !this.state.showClass})}>click to see class component</button>
      </div>
      <div className='comp-container'>
        {this.state.showClass &&<ClassComp/>}

        {this.state.showfun && <FunComp/>}

      </div>
      </div>
    )
  }
}
export default App;