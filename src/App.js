import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'

class App extends Component {
  render() {
    return (
      <>
      <div>Intel Header</div>
      <div id="colorlib-page">
        	<Sidebar></Sidebar>
          <Sidebar/> 
          <div id="colorlib-main">
					<Introduction></Introduction>
          	</div>
       </div>
       </>
    );
  }
}

export default App;
