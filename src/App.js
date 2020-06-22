import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import TechSidebar from './components/techSidebar'
import Introduction from './components/introduction'
import Content from './components/content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  openSideBar = () => {
    this.setState({show: true});
  }
  closeSideBar =() =>{
    this.setState({show: false});
  }
  render() {
    return (
      <>
      <div className='header'>Intel Header</div>
      <div id="colorlib-page">
        	<Sidebar toggleShow={this.openSideBar}/>
          <Sidebar toggleShow={this.openSideBar}/>
          <Sidebar toggleShow={this.openSideBar}/>
          {
            this.state.show &&  <TechSidebar toggleShow={this.closeSideBar}/>
          }
          
          <div id="colorlib-main">
					<Content></Content>
          	</div>
       </div>
       </>
    );
  }
}

export default App;
