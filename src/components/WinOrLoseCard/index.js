import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, result} = props

  const resultDisplayText = isWon ? 'You Won' : 'You Lose'
  const resultDisplayImgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultLabelText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-card">
      <div className="results-text-container">
        <h1 className="result-text">{resultDisplayText}</h1>
        <p className="label">{resultLabelText}</p>
        <p className="current-score">{result}/12</p>
        <button
          className="play-again-button"
          onClick={onClickPlayAgain}
          type="button"
        >
          Play Again
        </button>
      </div>
      <div className="img-container">
        <img
          className="result-img"
          src={resultDisplayImgUrl}
          alt="win or lose"
        />
      </div>
    </div>
  )
}
export default WinOrLoseCard
