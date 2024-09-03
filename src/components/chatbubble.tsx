import React from 'react';
import Body from './body';

type ChatBubbleProps = {
  message: string;
  className?: string;
  position?: 'start' | 'end';
  //start means leftside chat bubble, end means rightside bubble.
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, className, position = 'start' }) => {
  return (
    <div className={`chat chat-${position}`}>
      <div className={`chat-bubble flex flex-col items-center justify-center ${className}`}>
        {message.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            <Body>{line}</Body>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatBubble;

