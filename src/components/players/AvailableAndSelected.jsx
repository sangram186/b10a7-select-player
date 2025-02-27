import { useEffect, useState } from "react";
import PlayerSection from "./playerSection";
import SelectedPlayers from "./SelectedPlayers";
import PropTypes from "prop-types";

const AvailableAndSelected = ({ balanceCoin, setBalanceCoin }) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const [visibleSection, setVisibleSection] = useState('PlayerSection');


    const [getPlayer, setGetPlayer] = useState([]);

    const selectedPlayers = (newPlayer) => {

        const isAlreadySelected = getPlayer.some(player => player.id === newPlayer.id);
        if (isAlreadySelected) {
            alert('Player is already selected');
        }

        if (balanceCoin < newPlayer.price) {
            alert('You dont have enough coins')
        }
        else if (!isAlreadySelected && balanceCoin >= newPlayer.price) {
            setBalanceCoin(balanceCoin - newPlayer.price)
            setGetPlayer([...getPlayer, newPlayer])
            alert(`Congratulation! You selected ${newPlayer.name}`)
        }
    }
    console.log(getPlayer)

    return (
        <div className="my-8 md:my-12">
            <div className="flex justify-between  items-center">
                <div>
                    <h1 className="text-2xl font-bold ">{visibleSection === 'PlayerSection' ? `Available Players ${players.length}` : `Selected Player (${getPlayer.length}/6)`}</h1>
                </div>
                <div className="flex border-2 border-gray-400 rounded-xl">
                    <button onClick={() => setVisibleSection('PlayerSection')} className={`py-2 px-3 rounded-l-xl font-bold  cursor-pointer ${visibleSection === 'PlayerSection' ? 'bg-[#E7FE29] font-bold' : 'bg-white font-light'}`}>Avalible</button>
                    <span className="border-r-2 border-gray-400"></span>
                    <button onClick={() => setVisibleSection('SelectedPlayers')} className={`py-2 px-3 rounded-r-xl font-bold cursor-pointer ${visibleSection === 'SelectedPlayers' ? 'bg-[#E7FE29] font-bold' : 'bg-white font-light'}`}>Selected <span>({getPlayer.length})</span></button>
                </div>
            </div>
            {visibleSection === 'PlayerSection' && <PlayerSection balanceCoin={balanceCoin} selectedPlayers={selectedPlayers} players={players}></PlayerSection>}
            {visibleSection === 'SelectedPlayers' && getPlayer.map(player => <SelectedPlayers setVisibleSection={setVisibleSection} key={player.id} player={player}></SelectedPlayers>)}



            {visibleSection === 'SelectedPlayers' &&
                <div className="mt-6 border-2 inline-block rounded-xl">
                    <button onClick={() => setVisibleSection('PlayerSection')} className="cursor-pointer bg-[#E7FE29] py-2 px-3 m-1 rounded-xl">Add More Player</button>
                </div>}
        </div>
    );
};

AvailableAndSelected.propTypes = {
    balanceCoin: PropTypes.number,
    setBalanceCoin: PropTypes.func
}

export default AvailableAndSelected;