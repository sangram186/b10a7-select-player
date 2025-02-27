import { useEffect, useState } from "react";
import Player from "./Player";

const PlayerSection = () => {
    
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    // console.log(players)

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 md:my-12">
            {players.map(player => <Player player={player} key={player.id}></Player>)}
        </div>
    );
};

export default PlayerSection;