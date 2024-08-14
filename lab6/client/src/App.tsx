import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import BoxMessage from "./components/BoxMessage";
import InputChat from "./components/InputChat";

const socket = io("http://localhost:6001");

type messageType = {
  isSelf: boolean;
  user: string;
  message: string;
};

const App = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<messageType[]>([]);
  const messageEndRef = useRef(null);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  const listeningMessage = (data: messageType) => {
    setChat((prevChat) => [...prevChat, data]);
  };

  useEffect(() => {
    socket.on("receiveMessage", listeningMessage);

    return () => {
      socket.off("receiveMessage", listeningMessage);
    };
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md flex flex-col h-5/6">
        <h1 className="text-center text-2xl font-bold mb-6 underline">
          Realtime Chat
        </h1>

        <div className="overflow-y-auto flex-grow">
          {chat.map(({ isSelf, user, message }, index) => (
            <BoxMessage
              key={index}
              message={message}
              isSelf={isSelf}
              user={user}
            />
          ))}
          <div ref={messageEndRef} />
        </div>
        <InputChat
          message={message}
          onMessageChange={setMessage}
          onSendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default App;
