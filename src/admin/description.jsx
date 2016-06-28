import React, {Component} from 'react';

export default class Description extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <textarea rows="4" cols="50" 
                  placeholder="Enter description here!"
                  onChange={this.props.addDescription}>
        </textarea>
    )
  }
}