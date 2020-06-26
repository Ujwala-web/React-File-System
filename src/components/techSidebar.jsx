import React, { Component } from 'react'
import TreeView from './TreeView'

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
  onCheckBoxClick = (folder) => {
    console.log(folder)
    var list = this.state.folderList;
    list.push(folder);
    this.setState({folderList: list});
    console.log(this.state.folderList)
  }
  
  onSubmit = ()=>{
   console.log('inside submit')
    this.state.folderList.map((folder=>{
      if(folder==='M4G'){
        console.log('inside m4g')
        this.props.tableContentList.push(
          m4gPush
        )
        this.props.updateTableContentList(this.props.tableContentList)
      }else{
        console.log('inside m4p')
        this.props.tableContentList.push(
        m4pPush
        )
        this.props.updateTableContentList(this.props.tableContentList)
      }
    }))
  }

  render() {
    const label0 = <><div className="square" /><span className="node">{this.props.id}</span></>;
    return (
      <div>
        <div className='container'>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside1" className="border js-fullheight">
              <button className='close-button' onClick={this.props.toggleShow} >
              <div class="close">
                  <div class="md"></div>
                </div>
                </button> 
        
              <div className='tree-wrapper'>
        
                  <TreeView key="1" nodeLabel={label0} defaultCollapsed={false}>
                    {
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
                    }
                    {/* {dataSource.map((node, i) => {
                    const type = node.type;
                    const label = <><div className="square" /><span className="node">{type}</span></>;
                      return ( 
                      <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={false}>
                      {node.people.map(person => {
                        const label2 = <><div className="square" /><span className="node">{person.name}</span></>;
                        return (
                          <TreeView nodeLabel={label2} key={person.name} defaultCollapsed={false}>
                            <div className="tree-info"> {person.file1}</div>
                            <div className="tree-info">{person.file2}</div>
                            <div className="tree-info"> {person.file3}</div>
                          </TreeView>
                        );
                      })}
                    </TreeView>
                );
                } */}
                {/* )}  */}
                </TreeView>
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