import React, { Component } from 'react'
import TreeView from './TreeView'
const fileStructure = [
  {
    id:'1270',
    value: [
      { id:'PEQU', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
        ]},
      { id:'PBUD', value :[
        {id:'8PBUCF', value:['F1','F2','F3']},
        {id:'8PBUCF', value:['F1','F2','F3']},
      ]},
      { id:'PBJA', value :[
        {id:'8PBUCF', value:['F1','F2','F3']},
        {id:'8PBUCF', value:['F1','F2','F3']},
    ]},     
    ]
  },
  {
    id:'1272',
    value: [
      { id:'PEQU', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
        ]},
      { id:'PBUD', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
      ]},
      { id:'PBJA', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
    ]},     
    ]
  },

  {
    id:'1274',
    value: [
      { id:'PEQU', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
        ]},
      { id:'PBUD', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
      ]},
      { id:'PBJA', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
    ]},     
    ]
  },
  {
    id:'1276',
    value: [
      { id:'PEQU', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
        ]},
      { id:'PBUD', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
      ]},
      { id:'PBJA', value :[
          {id:'8PBUCF', value:['F1','F2','F3']},
          {id:'8PBUCF', value:['F1','F2','F3']},
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
export default class TechSidebar extends Component {
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
                                                    <div className="tree-info"> <input type="checkbox" id={nodelevel2+this.props.id} name={nodelevel2+this.props.id} value={nodelevel2}/><span className='checkbox-text'>{nodelevel2}</span></div>
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
              <button type="submit" className="submit-button">Submit</button>
            </div>


          </aside>
        </div>
      </div>
    )
  }
}