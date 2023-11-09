import React, { useState, useEffect } from 'react';
import './index.css';
import BotCollection from './BotCollection';
import ViewBot from './ViewBot';
import BotArmy from './BotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function handleSelectedBot(bot) {
    setSelectedBot(bot);
  }


  function removeSelectedBot() {
    setSelectedBot (null)
  }

  function Enlist (bot){
    for(let bot of army){
      if (army.id === bot.id) return;
    }
    setArmy([bot, ...army ])

  }

  function removeFromArmy(botToRemove) {
    const updatedArmy = army.filter((bot) => bot.id !== botToRemove.id);
    setArmy(updatedArmy);
  }


  return (
    <div className='App'>
      <div>
        <h1>BOT BATTLR</h1>
      </div>
      <div>
        <BotArmy army ={army} removeFromArmy={removeFromArmy}/>
      </div>
      <div>
        <ViewBot bot={selectedBot} 
        setSelectedBot={setSelectedBot}
        removeSelectedBot={removeSelectedBot}
        Enlist = {Enlist}
        />
      </div>
      <div>
        <BotCollection bots={bots} handleSelectedBot={handleSelectedBot} />
      </div>
    </div>
  );
}

export default App;