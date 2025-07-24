import React from 'react'
import { ProfileContext } from './App'
import { useContext } from 'react'

function Profile() {
    const {profileData} = useContext(ProfileContext)
  return (
    <div>Profile
        <p>Name: {profileData.name}</p>
        <p>Age: {profileData.age}</p>
    </div>
  )
}

export default Profile