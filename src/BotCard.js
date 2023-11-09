import React from 'react';
import './index.css';

function BotCard({ bot, handleSelectedBot = () => {}, children, }) {
  return (
    <div className="bot-card" onClick={() => handleSelectedBot(bot)}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p className="bot-class">{bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {children}
    </div>
  );
}

export default BotCard;