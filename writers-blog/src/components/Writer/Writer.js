import React, { Component, Fragment } from 'react'

export default class Writer extends Component {
  render() {    
    const { writer } = this.props    
    
    return (
      <Fragment>
        <img src={writer.image} alt={writer.name} style={{maxWidth: 300}}/>
        <h1>{writer.name}</h1>
        <h3>{`${writer.born} - ${writer.deceased}`}</h3>
      </Fragment>
    )
  }
}
