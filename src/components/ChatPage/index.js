import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserGroup} from '@fortawesome/free-solid-svg-icons'

import './index.css'

const ChatPage = () => (
  <div className="channel-container">
    <div className="channel-details">
      <div>
        <h1 className="chat-name">Introductions</h1>
        <p className="chat-description">
          This Channel Is For Company Wide Chatter
        </p>
      </div>
      <div className="users">
        <p>3| 100</p>
        <span className="users-icon">
          <FontAwesomeIcon icon={faUserGroup} />
        </span>
      </div>
    </div>
    <hr className="hr-line" />
    <div className="chat-container">
      <div>kuyfv,kyhfv</div>
    </div>
    <div className="input-container">
      <input type="text" className="message-input" />
    </div>
  </div>
)

export default ChatPage
