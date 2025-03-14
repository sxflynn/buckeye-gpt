import { AcademicCapIcon, UserIcon } from '@heroicons/react/24/outline';
import { type JSX, memo } from 'react';

import { StyledMarkdown } from '@/components/styled-markdown';
import type { ChatBubbleProps } from '@/types/chat-messages-props';

const ChatBubble = ({ message }: ChatBubbleProps): JSX.Element => {
  return (
    <div
      className={`chat ${message.role === 'user' ? 'chat-end' : 'chat-start'} p-1`}
    >
      <div className="chat-image avatar">
        <div className="w-8 rounded-full">
          {message.role === 'user' ? <UserIcon /> : <AcademicCapIcon />}
        </div>
      </div>
      <div className="chat-bubble">
        <StyledMarkdown>{message.content}</StyledMarkdown>
      </div>
    </div>
  );
};

export const MemoizedChatBubble = memo(ChatBubble);
