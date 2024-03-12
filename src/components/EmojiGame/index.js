import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], isGameInProgress: true, topScore: 0}

  setReset = () => {
    this.setState({clickedEmojiList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = clickedEmojiList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.setReset}
        result={clickedEmojiList.length}
      />
    )
  }

  finishGameAndGetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = 0
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const emojiListLength = emojisList.length
    const clickedEmojiListLength = clickedEmojiList.length
    const isEmojiPresent = clickedEmojiList.includes(id)

    if (isEmojiPresent) {
      this.finishGameAndGetTopScore(clickedEmojiListLength)
    } else {
      if (emojiListLength - 1 === clickedEmojiListLength) {
        this.finishGameAndGetTopScore(emojiListLength)
      }
    }
    this.setState(prevState => ({
      clickedEmojiList: [...prevState.clickedEmojiList, id],
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiListCard = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emoji-card-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, isGameInProgress, clickedEmojiList} = this.state
    return (
      <div className="app-container">
        <NavBar
          isGameInProgress={isGameInProgress}
          topScore={topScore}
          score={clickedEmojiList.length}
        />
        <div className="emoji-game-body">
          {isGameInProgress
            ? this.renderEmojiListCard()
            : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
