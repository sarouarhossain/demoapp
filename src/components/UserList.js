import React from 'react'

function UserList(data) {
  var {isLoaded, users} = data.props
  if(!isLoaded){
    return <div> Loading.......... </div>
  }else{
    return (
      <div>
        <ul>
          {users.map(user=>{
            return <li key={user.id}>
              ID: {user.id}        | User Name : {user.userName} | Email : {user.email} | Password :{user.password} | Created At : {user.createdAt} 
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default UserList
