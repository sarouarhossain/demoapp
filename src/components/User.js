import React, { Component } from 'react'
import UserList from './UserList'

const url = 'http://roman786sajib.ddns.net:8083/user';

class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: "",
      email:"",
      password: "",
      confirmPassword: "",
      users: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch(url)
    .then(res=>res.json())
    .then(response => {
      this.setState({
        isLoaded: true,
        users: response
      })
    })
  }

  submitButton(){
    if(this.state.userName!=="" && this.state.email!=="" && this.state.password!=="" && this.state.password===this.state.confirmPassword){
      var form = {
        'userName': this.state.userName,
        'email': this.state.email,
        'password': this.state.password,
        'confirmPassword': this.state.confirmPassword
      }

      fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })
      .then(res=>res.json())
      .then(response => {
        this.setState({
          users: this.state.users.concat(response),
          userName: "",
          email: "",
          password: "",
          confirmPassword: ""
        })
      })
    }
  }

  render() {
   return <div>
     <div>
       <div>
        <label>First name:   </label>
         <input
          type="text"
          name="User Name"
          value={this.state.userName}
          onChange={(data=> {this.setState({userName:data.target.value})})}
         /> <br/> <br/>

         <label>Email:   </label>
         <input
          type="text"
          name="Email"
          value={this.state.email}
          onChange={(data=> {this.setState({email:data.target.value})})}
         /> <br/> <br/>  

        <label>Password:   </label>
         <input
          type="text"
          name="Password"
          value={this.state.password}
          onChange={(data=> {this.setState({password:data.target.value})})}
         /> <br/> <br/> 

        <label>Confirm Password:   </label>
         <input
          type="text"
          name="User Name"
          value={this.state.confirmPassword}
          onChange={(data=> {this.setState({confirmPassword:data.target.value})})}
         /> <br/> <br/>                        
       </div>
       <br/><br/>

       <button onClick={() => this.submitButton()}>Submit Button</button>

       <br/><br/>
     </div>
      <UserList props={this.state}/>
    </div>
  }
}

export default User
