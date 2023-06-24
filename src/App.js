// import {Switch, Route} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import SliderBar from './components/SliderBar'
import ChatPage from './components/ChatPage'

import './App.css'

const App = () => (
  <>
    <Helmet>
      <title>Chat App</title>
    </Helmet>
    <div className="bg-container">
      <SliderBar />
      <ChatPage />
    </div>
  </>
)

export default App
