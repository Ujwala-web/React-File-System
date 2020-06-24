import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import TechSidebar from './components/techSidebar'
import Content from './components/content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      techId:''
    };
  }
  openSideBar = (id) => {
    this.setState({show: true});
    this.setState({techId: id});
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
          {
            this.state.show &&  <TechSidebar id={this.state.techId} toggleShow={this.closeSideBar}/>
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
