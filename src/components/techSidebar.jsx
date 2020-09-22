import React, { Component } from 'react'
import TreeView from './TreeView'

const items = [ 'gxt_x74yldtop_d06_1T774D_PC1_3AA.oas', 'gxt_x74yldtop_d06_1X784D_PC2_3AA.oas', 'gxt_x74yldtop_d06_1X794D_PC3_3AA.oas', 'gxt_x74yldtop_d06_1X275D_PC2_3AA.oas', 'gxt_x74yldtop_d06_1X274D_PC1_3AA.oas']

const fileStructure = [
  {
    id:'1270',
    value: [
      { id:'PEQU', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
        ]},
      { id:'PBUD', value :[
        {id:'8PBUCF', value:['M4G','M4P']},
        {id:'8PBUCF', value:['M4G','M4P']},
      ]},
      { id:'PBJA', value :[
        {id:'8PBUCF', value:['M4G','M4P']},
        {id:'8PBUCF', value:['M4G','M4P']},
    ]},     
    ]
  },
  {
    id:'1272',
    value: [
      { id:'PEQU', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
        ]},
      { id:'PBUD', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
      ]},
      { id:'PBJA', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
    ]},     
    ]
  },

  {
    id:'1274',
    value: [
      { id:'PEQU', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
        ]},
      { id:'PBUD', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
      ]},
      { id:'PBJA', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
    ]},     
    ]
  },
  {
    id:'1276',
    value: [
      { id:'PEQU', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
        ]},
      { id:'PBUD', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
      ]},
      { id:'PBJA', value :[
          {id:'8PBUCF', value:['M4G','M4P']},
          {id:'8PBUCF', value:['M4G','M4P']},
    ]},     
    ]
  },
]
const dataSource = [
  {
    type: 'PEQU',
    collapsed: false,
    people: [
      {name: '8PBUCF', file1: 'F1', file2: 'F2', file3: 'F3', collapsed: false},
      {name: '8PBUCF', file1: 'F1', file2: 'F2', file3: 'F3', collapsed: false},
    ],
  },
  {
    type: 'PBUD',
    collapsed: false,
    people: [
      {name: '8PBUCF', file1: 'F1', file2: 'F2', file3: 'F3', collapsed: false},
      {name: '8PBUCF', file1: 'F1', file2: 'F2', file3: 'F3', collapsed: false},
    ],
  },
  {
    type: 'PBJA',
    collapsed: false,
    people: [
      {name: '8PBUCF', file1: 'F1', file2: 'F2', file3: 'F3', collapsed: false},
      {name: '8PBUCF', file1: 'F1', file2: 'F2', file3: 'F3', collapsed: false},
    ],
  },
];

const m4gPush= {
  col1:"gxt_8pbucf_0a_8PBUCF_M4G_2AA.oas",
  status:"green",
  col2:"TapeOutlog_date.log" 
}
const m4pPush= {
  col1:"gxt_8pbucf_0a_8PBUCF_M4P_2AA.oas",
  status:"green",
  col2:"TapeOutlog_date.log" 
}

export default class TechSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderList:[]
    };
  }
   getFolderStructure = () =>{
    const {folderStructure} = this.props;
    var content = [];
    let folder1 = [];
    let folder2 = [];
    var iterator = folderStructure.entries()
    for (const [k1, v1] of iterator) {
     const label1 = <><div className="square" /><span className="node">{k1}</span></>;
     for (const [k2, v2] of v1) {
      const label2 = <><div className="square" /><span className="node">{k2}</span></>;
      let folder3 = [];
      for (const [k3, v3] of v2) {
        const label3 = <><div className="square" /><span className="node">{k3}</span></>
        console.log(v3);
        folder3.push(<TreeView key={label3} nodeLabel={label3} defaultCollapsed={false}>
          <div className="tree-info"> <input type="checkbox" id={v3} name={v3} value={v3} onClick={()=>this.onCheckBoxClick(v3)}/><span className='checkbox-text'>{v3}</span></div>
        </TreeView>)
       }       
        folder2.push(<TreeView key={label2} nodeLabel={label2} defaultCollapsed={false}>
         {folder3}
       </TreeView>)
     }
     folder1.push(<TreeView key={label1} nodeLabel={label1} defaultCollapsed={false}>
       {folder2}
     </TreeView>)
    }
    const label0 = <><div className="square" /><span className="node">{this.props.id}</span></>;
    content.push( <TreeView key="label0" nodeLabel={label0} defaultCollapsed={false}>
      {folder1}
    </TreeView>
    )
    return content;
   }
  onCheckBoxClick = (folder) => {
    console.log(folder)
    var list = this.state.folderList;
    list.push(folder);
    this.setState({folderList: list});
   // console.log(this.state.folderList)
  }
  
  onSubmit = ()=>{
   console.log('inside submit')
   console.log(this.state.folderList)
   var person;
    this.state.folderList.map((folder=>{
      // if(folder==='M4G'){
      //   console.log('inside m4g')
      //   this.props.tableContentList.push(
      //     m4gPush
      //   )
      //   this.props.updateTableContentList(this.props.tableContentList)
      // }else{
      //   console.log('inside m4p')
      //   this.props.tableContentList.push(
      //   m4pPush
      //   )
      //   this.props.updateTableContentList(this.props.tableContentList)
      // }
      person = {col1:folder, status:"Green", col2:"TapeOutlog_date.log"};
      this.props.tableContentList.push(person);
      console.log( this.props.tableContentList);
      this.props.updateTableContentList(this.props.tableContentList)
    }))
  }

  render() {
    const {folderStructure} = this.props;
    const label0 = <><div className="square" /><span className="node">{this.props.id}</span></>;
    return (
      <div>
        <div className='/'>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside1" className="border js-fullheight" style={{width: "350px"}}>
              <button className='close-button' onClick={this.props.toggleShow} >
              <div class="close">
                  <div class="md"></div>
                </div>
                </button> 
        
              <div className='tree-wrapper'>
             
                  {/* <TreeView key="1" nodeLabel={label0} defaultCollapsed={false}>
                    {
                      // Array.prototype.forEach((value, index) => {
                      
                      // return <TreeView key="1" nodeLabel="fwef" defaultCollapsed={false}>
                      //   </TreeView>
                      

                    //})
                  }
                    </TreeView> */}
                    {this.getFolderStructure()}
            
                    {/* {
                      fileStructure.map((node,i) => {
                          return node.id===this.props.id && (
                            node.value.map((nodeVal)=>{
                             const label1 = <><div className="square" /><span className="node">{nodeVal.id}</span></>
                             return( <TreeView key={nodeVal.id +i} nodeLabel={label1} defaultCollapsed={false}>
                                  {
                                    nodeVal.value.map((nodelevel1) =>{
                                      const label2 = <><div className="square" /><span className="node">{nodelevel1.id}</span></>
                                      return <TreeView key={nodelevel1.id + i} nodeLabel={label2} defaultCollapsed={false}>
                                               {
                                                 nodelevel1.value.map((nodelevel2)=>{
                                                   return(
                                                    <div className="tree-info"> <input type="checkbox" id={nodelevel2+this.props.id} name={nodelevel2+this.props.id} value={nodelevel2} onClick={()=>this.onCheckBoxClick(nodelevel2)}/><span className='checkbox-text'>{nodelevel2}</span></div>
                                                    )
                                                 })
                                               }
                                        </TreeView>
                                    })
                                  }
                                </TreeView>
                             ) 
                            })
                          )
                      })
                    } */}
                {/* </TreeView> */}
            </div>
            <div className="submit-button-wrapper">
              <button type="submit" className="submit-button" onClick={()=>this.onSubmit()}>Submit</button>
            </div>


          </aside>
        </div>
      </div>
    )
  }
}