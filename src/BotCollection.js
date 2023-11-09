import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, handleSelectedBot = () => {} }) => {
  return (
    <div className="bot-cards">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleSelectedBot={handleSelectedBot} />
      ))}
    </div>
  );
};

export default BotCollection;