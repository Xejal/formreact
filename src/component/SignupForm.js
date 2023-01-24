import React, { Component } from 'react'

export default class Form extends Component {
  state ={
    name:"",
    email:"",
    sifre:""
  }
  handleChange =(e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    console.log('name '+ this.state.name);
    console.log('email ' + this.state.email);
    console.log('sifre '+ this.state.sifre)
    return (
      <div>
        <label htmlFor='name'>
          Name: <input name="name" id= "name" onChange={this.handleChange}/>
        </label>
        <label htmlFor='email'>
          Email: <input name="email" id= "email" onChange={this.handleChange}/>
        </label>
        <label htmlFor='sifre'>
          Sifre: <input name="sifre" id= "sifre" onChange={this.handleChange}/>
        </label>
      </div>
    )
  }
}

