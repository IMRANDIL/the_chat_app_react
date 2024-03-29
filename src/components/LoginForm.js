import React, { useState } from 'react'

import axios from 'axios';


const LoginForm = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault()

        // get username and password...

        const authObject = { 'Project-ID': '', 'User-Name': userName, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            });

            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);

            window.location.reload()

        } catch (error) {
            setError('Oops...!!! You are not authorized..!');
            setUserName('');
            setPassword('')
        }
    }




    return (
        <div className="wrapper">
            <div className="form">
                <h1 className='title'>Chat Application</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='input' placeholder='UserName' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />

                    <div align='center'>
                        <button className="button" type='submit'>
                            <span>Start Chating</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm