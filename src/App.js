import React from 'react'
import { ChatEngine } from 'react-chat-engine'

import './App.css'


const App = () => {
    return (
        <ChatEngine

            height='100vh'
            projectID={process.env.projectID}
            userName='IMRANDIL'
            userSecret={process.env.PASS}

        />
    )
}

export default App