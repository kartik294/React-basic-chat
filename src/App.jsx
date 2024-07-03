import { useState } from "react";
import "./App.css";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (content) => {
    const newMessage = {
      id: messages.length,
      username: user_list[Math.floor(Math.random() * user_list.length)],
      content: content,
      likes: 0,
    };
    setMessages([...messages, newMessage]);
  };

  const handleLike = (id) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
    );
    setMessages(updatedMessages);
  };

  return (
    <div className="app">
      <h1>React Chat Application</h1>
      <div className="chat-container">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} onLike={handleLike} />
        ))}
      </div>
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default App;
