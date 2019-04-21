import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom';
import Writer from '../Writer/Writer';
import ErrorPage from '../ErrorPage/ErrorPage';
export default class writers extends Component {
  render() {
      const url = this.props.match.url;
      const { writers } = this.props
    return (
      <Fragment>
        <ul>
            {this.props.writers.map(writer => 
                <li key={writer.id}>
                    <Link to={`${url}/${writer.id}`}>{writer.name}</Link>
                </li>
            )}
        </ul>
        {/* He came to know to do props.match.id by printing the match object initially inside Writer */}
        {<Route path={`${url}`} render = {() => (<h3>Please select the writer from above</h3>)} exact />}
        {<Route path={`${url}/:writerid`} 
          render = { 
            (props) => {
              const  {  match }  = props
              const { writerid } = match.params
              const writer = writers.find( writer => writer.id === writerid)              
              const renderWriter = writer ? <Writer {...props} writer={writer} />  : <ErrorPage />
              return  renderWriter       
            }
          } />
        }
      </Fragment>
    )
  }
}
