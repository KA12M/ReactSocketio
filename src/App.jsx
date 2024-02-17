import "./App.css";
import { useState, useEffect, useContext, useCallback } from "react";
import HeaderUser from "./components/HeaderUser";
import FormUsername from "./components/FormUsername";
import { UserContext } from "./config/UserContext";
import { SocketContext } from "./config/SocketContext";

function App() {
  const { username } = useContext(UserContext);
  const { client } = useContext(SocketContext);

  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  function sendMessage(e) {
    e.preventDefault();
    console.log("Button clicked");
    client.emit("send-message", { username, message });
    setMessage("");
  }

  const handleMessageSocket = useCallback(() => {
    client.on("receive-message", (data) => {
      setData(data);
    });
    client.on("new-message", (newData) => setData(newData));
  }, [client]);

  useEffect(() => {
    if (client) handleMessageSocket();
  }, [handleMessageSocket]);

  return (
    <div className="App">
      <HeaderUser />
      <div>
        <FormUsername />
      </div>
      <form onSubmit={sendMessage}>
        <input
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={!username || !message}>
          Send message
        </button>
      </form>
      <div>
        {data.map((item, i) => (
          <p key={i}>
            {item.username}: {item.message}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
