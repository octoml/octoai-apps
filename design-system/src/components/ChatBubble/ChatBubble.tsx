import { FC } from "react";

interface ChatBubbleProps {
  /** Chat bubble text */
  text: string;
  /** Chat bubble color */
  color: "primary" | "secondary";
}

const ChatBubble: FC<ChatBubbleProps> = ({ text, color = "primary" }) => (
  <div className={`chat-bubble ${color}`}>{text}</div>
);

export default ChatBubble;
