import './index.css'

const SliderBar = () => (
  <div className="slide-bar">
    <div className="profile">
      <div className="profile-pic">RR</div>
      <div className="profile-details">
        <h1 className="name">Rolande Raimondi</h1>
        <p className="description">Research Nurse</p>
      </div>
    </div>
    <div className="conversations-tab">
      <p>Conversations</p>
      <button className="plus-button " type="button">
        +
      </button>
    </div>
    <div className="conversation-container">
      <div className="conversations-item">
        <p className="hash">#</p>
        <p className="title">Poland Office</p>
      </div>
    </div>
    <div className="conversation-container selected">
      <div className="conversations-item">
        <p className="hash">#</p>
        <p className="title">Introductions</p>
      </div>
    </div>
    <div className="conversation-container">
      <div className="conversations-item">
        <p className="hash">#</p>
        <p className="title">India Office </p>
      </div>
    </div>
  </div>
)

export default SliderBar
