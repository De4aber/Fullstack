import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../../Stores/authStore'
import './loginPage.css'

const LoginPage = () => {
    let navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async () => {
        console.log(username, password)
        await authStore.attemptLogin({ username: username, password: password })
        if (authStore.user) {
            navigate("/");
        }
    }


    return (
        <div className='login_Container'>
            <div className='login_Wrapper'>
                <div className='login_Component'>
                    <div className='login_Component_Header'>
                        <div className='login_Component_HeaderWrapper'>
                            <h1 className='login_Component_HeaderTitle'>Login</h1>
                        </div>
                    </div>
                    <div className='login_Component_Body'>
                        <div className='login_Component_Body_Input'>
                            <span className='login_Component_Body_InputTitle'>Username</span>
                            <input className='login_Component_Body_InputField' onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' />
                        </div>
                        <div className='login_Component_Body_Input'>
                            <span className='login_Component_Body_InputTitle'>Password</span>
                            <input className='login_Component_Body_InputField' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                        </div>
                    </div>
                    <div className='login_Component_Footer'>
                        <button className='Login_Button' onClick={onLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage