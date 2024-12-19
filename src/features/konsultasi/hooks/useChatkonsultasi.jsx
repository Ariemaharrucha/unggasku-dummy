import { useState, useEffect, useRef } from "react";

// Custom hook untuk chat konsultasi menggunakan array sebagai dummy data
export const useChatKonsultasi = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isUserTyping, setIsUserTyping] = useState(false);

  const latestMessageRef = useRef(null);

  // Dummy messages
  const dummyMessages = [
    {
      sender: "dokter",
      content: "Halo, selamat siang!",
      sent_at: new Date().toISOString(),
    },
    {
      sender: "user",
      content: "Selamat siang dok!",
      sent_at: new Date().toISOString(),
    },
  ];

  // Simulate fetching data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setMessages(dummyMessages);
      setLoading(false);
    }, 500);
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: "user",
        content: message,
        sent_at: new Date().toISOString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
      setIsUserTyping(false);
    }
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setIsUserTyping(newMessage.trim() !== "");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return {
    messages,
    loading,
    message,
    isUserTyping,
    latestMessageRef,
    handleMessageChange,
    handleKeyDown,
    sendMessage,
  };
};
