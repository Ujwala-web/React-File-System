import React, { Component } from 'react'

export default class Sidebar1 extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside1" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Dhruv Barochiya</a></h1>
              <span className="email"><i className="icon-mail"></i> dhruv.barochia34788@gmail.com</span>
            </div> 
          </aside>
        </div>
      </div>
    )
  }
}
