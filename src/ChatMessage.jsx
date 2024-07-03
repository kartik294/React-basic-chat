import PropTypes from "prop-types"; // Import PropTypes

const ChatMessage = ({ message, onLike }) => {
  return (
    <div className="chat-message">
      <span className="username">{message.username}: </span>
      <span className="message-content">{message.content}</span>
      <button className="like-btn" onClick={() => onLike(message.id)}>
        Like ({message.likes})
      </button>
    </div>
  );
};

// PropTypes validation for ChatMessage component
ChatMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatMessage;
