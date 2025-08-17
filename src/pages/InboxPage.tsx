import { useState } from "react";
import { MessageSquare, ArrowLeft, Send } from "lucide-react";
import petCorgi from "../assets/pet-corgi.png";
import petCat from "../assets/pet-cat.png";
import petGolden from "../assets/pet-golden.png";

const mockMessages = [
  {
    id: "1",
    petName: "Luna",
    ownerName: "Mike",
    petImage: petCat,
    lastMessage: "Let's meet at the dog park this afternoon?",
    timestamp: "2 min ago",
    unread: true,
    status: "pending"
  },
  {
    id: "2", 
    petName: "Buddy",
    ownerName: "Emma",
    petImage: petGolden,
    lastMessage: "Mochi sounds amazing! 🐾",
    timestamp: "1 hour ago",
    unread: false,
    status: "confirmed"
  },
  {
    id: "3",
    petName: "Charlie",
    ownerName: "Sarah",
    petImage: petCorgi,
    lastMessage: "Thanks for the playdate! 🎾",
    timestamp: "Yesterday",
    unread: false,
    status: "completed"
  }
];

const mockChatMessages = [
  { id: 1, text: "Hey! Luna would love to meet Mochi!", sent: false, timestamp: "10:30 AM" },
  { id: 2, text: "That sounds great! Mochi is so social 🐾", sent: true, timestamp: "10:32 AM" },
  { id: 3, text: "Perfect! How about the Central Park at 3 PM?", sent: false, timestamp: "10:35 AM" },
  { id: 4, text: "See you there! 🎾", sent: true, timestamp: "10:38 AM" }
];

export const InboxPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");

  if (selectedChat) {
    const chat = mockMessages.find(m => m.id === selectedChat);
    if (!chat) return null;

    return (
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-card/80 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedChat(null)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <img
              src={chat.petImage}
              alt={chat.petName}
              className="w-10 h-10 object-cover rounded-full border-2 border-white/50"
            />
            <div>
              <h3 className="font-pixel text-sm text-foreground">{chat.petName}</h3>
              <p className="text-xs text-muted-foreground font-body">with {chat.ownerName}</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 pb-20 overflow-y-auto space-y-3">
          {mockChatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sent ? "justify-end" : "justify-start"} items-end gap-2`}
            >
              {!message.sent && (
                <img
                  src={chat.petImage}
                  alt={chat.petName}
                  className="w-6 h-6 object-cover rounded-full"
                />
              )}
              <div
                className={`max-w-xs p-3 ${
                  message.sent
                    ? "chat-bubble-sent text-primary-foreground"
                    : "chat-bubble-received text-secondary-foreground"
                }`}
              >
                <p className="font-body text-sm">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
              </div>
              {message.sent && (
                <img
                  src={petCorgi}
                  alt="Mochi"
                  className="w-6 h-6 object-cover rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Quick Emoji Reactions */}
        <div className="px-4 pb-2">
          <div className="flex gap-2 justify-center">
            {["❤️", "🦴", "🐾", "🎾", "😊"].map((emoji) => (
              <button
                key={emoji}
                className="text-2xl p-2 rounded-full hover:bg-white/10 transition-colors animate-bounce-gentle"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-card/80 backdrop-blur-sm border-t border-white/20 p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Send paw message..."
              className="flex-1 bg-input/50 border border-white/20 rounded-2xl px-4 py-2 
                         font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50
                         placeholder:text-muted-foreground"
            />
            <button className="bg-gradient-pink p-2 rounded-full shadow-soft hover:shadow-float transition-all duration-300">
              <Send className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 pb-24">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="font-pixel text-primary text-lg">Inbox</h2>
          <MessageSquare className="w-5 h-5 text-primary animate-bounce-gentle" />
          <div className="text-lg animate-float">🐾</div>
        </div>
      </div>

      <div className="space-y-3">
        {mockMessages.map((message) => (
          <button
            key={message.id}
            onClick={() => setSelectedChat(message.id)}
            className="w-full card-floating p-4 text-left hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={message.petImage}
                  alt={message.petName}
                  className="w-12 h-12 object-cover rounded-full border-2 border-white/50"
                />
                {message.unread && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white animate-pulse-soft" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-body font-semibold text-sm text-foreground">
                    {message.petName} & {message.ownerName}
                  </h3>
                  <span className="text-xs text-muted-foreground font-body">
                    {message.timestamp}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground font-body truncate">
                  {message.lastMessage}
                </p>
                
                {message.status === "pending" && (
                  <div className="inline-block mt-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-body border border-primary/30">
                      Playdate Pending
                    </span>
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="fixed bottom-32 right-8 text-lg animate-float" style={{ animationDelay: "0.5s" }}>
        💌
      </div>
    </div>
  );
};