import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmojiButton = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button
        className="emoji-button"
        onClick={onClickEmojiButton}
        type="button"
      >
        <img src={emojiUrl} className="emoji" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
