import React from 'react'
import { useNavigate } from 'react-router-dom'

const FrontPage = () => {
    const navigate = useNavigate()
    const toLogin = () => {
        navigate('/login')
    }
  return (
    <div>
        <div>
            <h1>Welcome to Cappsule</h1>
            <div onClick={toLogin} style={{cursor: 'pointer' }}>Login now!</div>
        </div>
    </div>
  )
}

export default FrontPage