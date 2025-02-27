import PropTypes from "prop-types";

const SelectedPlayers = ({ player, setVisibleSection }) => {
    const { name, handedness, thumbnail } = player;
    console.log(player)
    return (
        <div className="my-12">
            <div className="flex justify-between items-center p-4 border-2 border-gray-300 rounded-xl mb-2">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="w-[50px] rounded-full object-fill" src={thumbnail} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2>{name}</h2>
                        <p>{handedness}</p>
                    </div>
                </div>
                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#EA3323"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
            </div>
            
        </div>
    );
};

SelectedPlayers.propTypes = {
    player: PropTypes.object,
}
export default SelectedPlayers;