import React from "react";
import BotCard from "./BotCard";

const ViewBot = ({ bot, setbots = () => { },
 removeSelectedBot = () => {},
 Enlist=()=>{} }) => {
    if (bot === null) {
        return null;
    }

   
    return (
        <div className="bot-cards">
            <BotCard bot={bot} handleSelectedBot={setbots} />
            <div className="viewbot">
            <p>
                <button onClick={()=>Enlist(bot)}>Enlist</button>
            </p>
            <p>
                <button onClick={removeSelectedBot}>GoBack</button>
            </p>
            </div>
        </div>
    );
}

export default ViewBot;