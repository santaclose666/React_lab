import React from "react";

interface InputChatProps {
  message: string;
  onMessageChange: (s: string) => void;
  onSendMessage: () => void;
}

function InputChat({
  message,
  onMessageChange,
  onSendMessage,
}: InputChatProps) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <div className="flex mt-2">
      <input
        type="text"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-grow p-2 border rounded-l-md"
      />
      <button
        onClick={onSendMessage}
        className="bg-blue-500 text-white p-2 rounded-r-md"
      >
        Send
      </button>
    </div>
  );
}

export default InputChat;
