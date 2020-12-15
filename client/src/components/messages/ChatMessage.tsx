import React from 'react';

export interface IMessage {
  text: string;
  id: string;
}
interface IProps {
  message: IMessage;
}
export const ChatMessage = ({message}: IProps) => {
  const {text} = message;
  return (
    <p>{text}</p>
  );
};
