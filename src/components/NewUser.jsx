import React from 'react'
import './NewUser.css'

const NewUser = () => {
  return (
    <form action="submit" id='form' className='form' >
      <input className='form__item' id='fname' type="text" placeholder="enter first name"/>
      <input className='form__item' id='lname' type="text" placeholder="enter last name"/>
      <input className='form__item' id='city' type="text" placeholder="enter city"/>
      <input className='form__item' id='website' type="text" placeholder="enter website"/>
      <span className="btn-group">
        <button id='submit' type="submit">Submit</button>
        <button id='clear' type="clear">Clear</button>
        <button id='upload' type="upload">Upload</button>
      </span>
    </form>
  )
}

export default NewUser
