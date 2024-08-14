import React from "react";

function BoxMessage({ message, isSelf, user }) {
  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-xs p-3 rounded-lg text-white ${
          isSelf ? "bg-blue-400" : "bg-orange-400"
        }`}
      >
        <p className={`text-xs text-stone-200`}>
          {user.slice(0, user.length / 2)}
        </p>
        <p className="text-xl">{message}</p>
      </div>
    </div>
  );
}

export default BoxMessage;
