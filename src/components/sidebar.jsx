import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                <li><a href="#about" data-nav-section="about">Home</a></li>
                  <li><a href="#about" data-nav-section="about">Technology</a></li>
                </ul>
              </div>
            </nav>
            <div className="technology-wrapper">
              <div className="technology"><button className="technology-button" onClick={()=>this.props.toggleShow('1270')} ><div className="square" /></button><div>1270</div></div>
              <div className="technology"><button className="technology-button" onClick={()=>this.props.toggleShow('1272')} ><div className="square" /></button><div>1272</div></div>
              <div className="technology"><button className="technology-button" onClick={()=>this.props.toggleShow('1274')} ><div className="square" /></button><div>1274</div></div>
              <div className="technology"><button className="technology-button" onClick={()=>this.props.toggleShow('1276')} ><div className="square" /></button><div>1276</div></div>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Help</a></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}