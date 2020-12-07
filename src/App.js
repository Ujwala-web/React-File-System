import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import TechSidebar from './components/techSidebar'
import Content from './components/content'
import Logo from './img/intel.jpg'
import axios from 'axios'

const tmp = [
  ["/nfs/orto/proj/tapeout/dde_mse1a/soft/1273_X/8S73MA/LAYOUTS/gxt_x74yldtop_d06_1T774D_PC1_3AA.oas\n",
  "/nfs/orto/proj/tapeout/dde_mse1a/soft/1273_X/8S73MA/LAYOUTS/gxt_x74yldtop_d06_1T774D_PC1_3AA.oas\n",
  "/nfs/orto/proj/tapeout/dde_mse1a/soft/1273_X/8S73MA/LAYOUTS/gxt_x76yldtop_d06_1T774D_PC2_3AA.oas\n"
   ],
   [   "/nfs/orto/proj/tapeout/dde_mse1a/soft/1273_X/88CFCA/LAYOUTS/gxt_x75yldtop_d06_1X474D_PC3_3AA.oas",
   "/nfs/orto/proj/tapeout/dde_mse1a/soft/1273_X/88CFCA/LAYOUTS/gxt_x75yldtop_d06_1X474D_PC2_3AA.oas"
  ]
] 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      techId:'',
      tableContentList : [],
      folderStructure :[]
    };
  }

  openSideBar = (id) => {
    var allRepos = [];
    var fileNames = [];
    const apiUrl = 'http://127.0.0.1:5000/id/'+id;  
    this.setState({techId: id});
    axios.get(apiUrl).then((response) => {
      this.setState({show: true});
       allRepos = response.data[0];
      console.log(response.data);
      allRepos.forEach(fileName => {
           if(fileName!=' ' || fileName != null) {
            var names = fileName.split("/")
             fileNames.push(names[10])
           }
      })
      
    var folderLevel1 = new Map();
    fileNames.forEach(file=>{
      let folderLevel2 = new Map();
      let folderLevel3 = new Map();
      var arr1 = []
      arr1.push(file)
      var folderNames = [];
      console.log(file)
      //if(typeof file !== 'undefined'){
        var folderNames = file.split("_")
     // }
      if(folderLevel1.has(folderNames[1])) {
         var innerFolder2 = folderLevel1.get(folderNames[1])
         //console.log("innerFolder2"+innerFolder2)
        if(innerFolder2.has(folderNames[3])) {
          var innerFolder3 = innerFolder2.get(folderNames[3])
        // console.log(innerFolder3)
         
         if(innerFolder3.has(folderNames[4])) {
            var innerFolder4 = innerFolder3.get(folderNames[4])
           // console.log(innerFolder4)
            innerFolder4.push(file)
           
         } else {
           var arr = []
           arr.push(file)
          innerFolder3.set(folderNames[4],arr1)
         }    
        } else {
          var mapFolder3 = new Map();
          mapFolder3.set(folderNames[4],arr1)
          innerFolder2.set(folderNames[3],mapFolder3)
        }
   
      } else {
      // console.log("inside folder1 else")
        folderLevel3.set(folderNames[4], arr1)
        folderLevel2.set(folderNames[3], folderLevel3 )      
        folderLevel1.set(folderNames[1], folderLevel2)
      }
    })
    console.log(folderLevel1)
    this.setState({folderStructure: folderLevel1});
      
    }).catch((error) =>{
      console.log(error)
    })

    // setTimeout(function() {

    // }, 1000);

   
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
          {
            this.state.show &&  <TechSidebar id={this.state.techId} toggleShow={this.closeSideBar} updateTableContentList={this.updateTableContentList} tableContentList={this.state.tableContentList}  folderStructure={this.state.folderStructure}/>
          }
          
          <div id="colorlib-main">
					<Content tableContentList={this.state.tableContentList}></Content>
          	</div>
       </div>
       </>
    );
  }
}

export default App;
