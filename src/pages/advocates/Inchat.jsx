import React from "react";
import { useState } from "react";

import InputBox from "../../components/advocates/inchats/components/InputBox";
import Header from "../../components/advocates/inchats/components/Header";
import Examples from "../../components/advocates/inchats/components/Examples";



export default function Inchat() {
  const [messages, setMessages] = useState([]);

  const handleNewChat = () => setMessages([]);
  const handleClearChat = () => setMessages([]);
  const handleSendMessage = (msg) =>
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
  const handleExampleClick = (msg) => handleSendMessage(msg);
  return (
    <div className="flex flex-col gap-8 p-8">
      <Header onClear={handleClearChat} onNew={handleNewChat} />
      <Examples onExampleClick={handleExampleClick} />
      <InputBox onSend={handleSendMessage} />
    </div>
  );
}
