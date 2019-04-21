import React, { Component, Fragment } from 'react'

export default class Writer extends Component {
  render() {    
    const { writerid } = this.props.match.params
    const foundWriter = this.props.writers.find(writer => writer.id === writerid);    
    
    return (
      <Fragment>
        <img src={foundWriter.image} alt={foundWriter.name} style={{maxWidth: 300}}/>
        <h1>{foundWriter.name}</h1>
        <h3>{`${foundWriter.born} - ${foundWriter.deceased}`}</h3>
      </Fragment>
    )
  }
}
