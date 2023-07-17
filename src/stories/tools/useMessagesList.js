import { useState } from "react";

const useMessagesList = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = msg => setMessages(prev => new Array(...prev, msg));

  return [messages, addMessage];
};

export default useMessagesList;