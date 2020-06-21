import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Sidebar1 from './components/sidebar1'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        	<Sidebar></Sidebar>
          <Sidebar/> 
          <Sidebar/> 
          <div id="colorlib-main">
					<Introduction></Introduction>
          	</div>
       </div>
    );
  }
}

export default App;
