import PlayerSection from "./playerSection";

const AvailableAndSelected = () => {
    return (
        <div>
            <div className="flex justify-between mt-8 md:mt-12 items-center">
                <div>
                    <h1 className="text-2xl font-bold ">Available Players</h1>
                </div>
                <div className="flex gap-4 px-4 py-2 border-2 border-gray-400 rounded-xl">
                    <button className="font-bold border-r-2 border-gray-400 pr-4">Avalible</button>
                    <button className="font-bold">Selected <span>(0)</span></button>
                </div>
            </div>
            <PlayerSection></PlayerSection>
        </div>
    );
};

export default AvailableAndSelected;