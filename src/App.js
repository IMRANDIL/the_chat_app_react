

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css'


const App = () => {
    return (
        <ChatEngine

            height='100vh'
            projectID={process.env.REACT_APP_PROJECTID}
            userName='IMRANDIL'
            userSecret='Dil@12345'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}

export default App