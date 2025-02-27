
import PropTypes from "prop-types";
import Player from "./Player";

const PlayerSection = ({players, selectedPlayers, balanceCoin}) => {
    
    // const [players, setPlayers] = useState([]);

    // useEffect(() => {
    //     fetch('../../../public/data.json')
    //     .then(res => res.json())
    //     .then(data => setPlayers(data))
    // }, [])
    // console.log(players)

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 md:my-12">
            {players.map(player => <Player balanceCoin={balanceCoin} selectedPlayers={selectedPlayers} player={player} key={player.id}></Player>)}
        </div>
    );
};
PlayerSection.propTypes ={
    players: PropTypes.object,
    selectedPlayers: PropTypes.func,
    balanceCoin: PropTypes.number,
}
export default PlayerSection;