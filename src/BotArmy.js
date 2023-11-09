import React from 'react';
import BotCard from './BotCard';

const BotArmy = ({ army, removeFromArmy = () => {} }) => {
  return (
    <div>
      <div className="bot-cards">
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot}>
            <p>
              <button onClick={() => removeFromArmy(bot)}>Remove</button>
            </p>
          </BotCard>
        ))}
      </div>
    </div>
  );
};

export default BotArmy;