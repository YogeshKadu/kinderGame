
function Dice(props) {
    return (
        <button className={`block demo bg-white aspect-square rounded-lg active:scale-95 transition-all font-inter-semibold text-2xl sm:text-4xl ${props.locked&&'bg-sky-700 text-white'}`} onClick={props.toggleDiceState}>{props.value}</button>
    );
}

export default Dice;