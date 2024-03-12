import './index.css'

const NavBar = props => {
  const {topScore, score, isGameInProgress} = props

  return (
    <div className="nav-bar">
      <div className="score-logo-title-container">
        <div className="logo-title-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-card-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
