import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-input">
      ChatInput
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message here"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};
ChatInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired, // Ensure onSendMessage is a function and is required
};
export default ChatInput;
