import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import TechSidebar from './components/techSidebar'
import Content from './components/content'
import Logo from './img/intel.jpg'
import {tableContent} from '../src/utils/const'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      techId:'',
      tableContentList : tableContent
    };
  }
  openSideBar = (id) => {
    this.setState({show: true});
    this.setState({techId: id});
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      console.log(repos);
    });
  }
  closeSideBar =() =>{
    this.setState({show: false});
  }
  updateTableContentList=(list) =>{
    this.setState({tableContentList: list});
  }
  render() {
    return (
      <>
      <div className='header'><img src={Logo}></img></div>
      <div id="colorlib-page">
        	<Sidebar toggleShow={this.openSideBar}/>
          {/* {
            this.state.show &&  <TechSidebar id={this.state.techId} toggleShow={this.closeSideBar} updateTableContentList={this.updateTableContentList} tableContentList={this.state.tableContentList}/>
          } */}
          
          <div id="colorlib-main">
					<Content tableContentList={this.state.tableContentList}></Content>
          	</div>
       </div>
       </>
    );
  }
}

export default App;
