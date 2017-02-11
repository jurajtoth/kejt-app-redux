import React from 'react'
import './Header.scss'

export default class Header extends React.Component {

  render () {
    return <div className="homepage-header" onClick={this.props.changeTitle}>
        <i className="fa fa-heartbeat fa-5x" aria-hidden="true"></i>
		    <span className="title">{this.props.title}</span>
    </div>
  }
}