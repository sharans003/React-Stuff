import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Text from '../Text/Text';
export default class Writer extends Component {
  render() {    
    const { writer } = this.props    
    
    return (
      <Fragment>
        <img src={writer.image} alt={writer.name} style={{maxWidth: 300}}/>
        <h1>{writer.name}</h1>
        <h3>{`${writer.born} - ${writer.deceased}`}</h3>
        <p>{writer.description}</p>
        <ul>
               {
                   writer.texts.map(text => {
                       return <li>
                           <Link to={`${this.props.match.url}/texts/${text.id}`}>{text.title}</Link>
                       </li>
                   })
               }
        </ul>
        <hr/>
        <Route path={`${this.props.match.url}/texts/:textId`} render={
          (props) => {
            const text = writer.texts.find(text => (              
              text.writerId === writer.id
            ))                        
            const render = text ? <Text {...props} text={text} />  : <ErrorPage />
            return render
          }
        }/>
      </Fragment>
    )
  }
}
