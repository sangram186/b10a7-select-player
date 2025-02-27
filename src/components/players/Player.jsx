import PropTypes from "prop-types";


const Player = ({ player, selectedPlayers, balanceCoin }) => {
    const { name, country, information, rating, handedness, price, cover_image } = player;

    return (
        // ================Player Card===============
        <div className="p-4 border-2 border-gray-300 rounded-2xl space-y-6">
                <div className="overflow-hidden">
                    <img className='w-full h-[240px] object-cover rounded-xl' src={cover_image} alt="" />
                </div>
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#131313"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                    <h2 className="text-xl font-bold">{name}</h2>
                </div>

                <div className="flex justify-between border-b-2 border-gray-300 pb-4">
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#999999"><path d="M0 0h24v24H0z" fill="none" /><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" /></svg>
                        <p className="text-gray-500">{country}</p>
                    </div>
                    <span className="bg-gray-200 px-3 rounded-xl py-1.5">{information}</span>
                </div>


          
            <h3 className="font-bold">Rating: {rating}</h3>
            <div className="flex justify-between">
                <p className="font-bold">Handedness:</p>
                <p className="text-gray-500">{handedness}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-bold">Price: ${price}</p>
                <button onClick={() => selectedPlayers(player)} className="px-2.5 py-1 border-2 border-gray-300 rounded-xl cursor-pointer">Choose Player</button>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    selectedPlayers: PropTypes.func,
    balanceCoin: PropTypes.number
}
export default Player;