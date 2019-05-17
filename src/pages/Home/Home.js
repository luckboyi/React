import React, { Component } from 'react'
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state ={
      count:0
    }
  }
  AddClick(){
    this.setState({
      count:++this.state.count
    })
  }
  render(){
    return(
      <div>
        <h3>this is home page2!</h3>
        <p>num:{this.state.count}</p>
        <button onClick={()=> this.AddClick()}>+</button>
      </div>
    )
  }
}