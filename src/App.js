import React from 'react';

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css'
import LoginForm from './components/LoginForm';


const App = () => {

    if (!localStorage.getItem('userName')) return <LoginForm />




    return (
        <ChatEngine

            height='100vh'
            projectID=''
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}

export default App