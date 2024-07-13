import React from 'react'
import './Users.css'

// import { useState, useEffect } from 'react'

export const Users = ({users}) => {

  return (
    <div className='user-content'>
      <h3>User Display</h3>
      <table id='users'>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>City</th>
            <th>Website</th>
            <th>Created At</th>
            <th>del</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key = {user.id}>
                <td className='user-item'>{user.fname}</td>
                <td className='user-item'>{user.lname}</td>
                <td className='user-item'>{user.city}</td>
                <td className='user-item'>{user.website}</td>
                <td className='user-item'>{user.created_at}</td>
                <td className='user-item'>x</td>
              </tr>
            )
          } )}
        </tbody>
      </table>
    </div>
  )
}

// export default Users
