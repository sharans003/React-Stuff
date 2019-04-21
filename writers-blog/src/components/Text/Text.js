import React, { Component, Fragment } from 'react'

export default class Text extends Component {
  render() {
      const { text } = this.props;            
    return (
      <Fragment>
          <h4>{text.title}</h4>
          <p>{text.description}</p>
      </Fragment>
    )
  }
}
