import React from "react";
import Dice from "./Tenzie/Dice";
import Confetti from 'react-confetti';
import {Howl, Howler} from 'howler';
import clickSound from "../audios/click.wav";
import winSound from "../audios/cheering.wav";

// const Wsounds = "../audios/cheering.wav";

function Tenzie() {
    const [count,setCount]=React.useState(0);
    const [over,setOver]=React.useState(false);
    
    Howler.volume(0.5)
    // var sound = new Howl({
    //     winSound
    // });
    const sound = new Howl({
        src:[winSound]
    })




    const [dices,setDices] = React.useState(generateDices());
    const diceArray=dices.map((item,id) => <Dice key={item.id} value={item.value} locked={item.locked} toggleDiceState={()=> toggleDiceState(id)} />);
    function getValue(){
        return Math.floor(Math.random() * 5 + 1);
    }


    function generateDices(){
        const array = [];
        for(let i=0;i<9;i++){
            array.push(
                {
                    id:i,
                    value:getValue(),
                    locked:false
                }
            )
        }
        return array;
    }
    function toggleDiceState(index){
        setDices(oldState=>oldState.map((item,id)=> (id===index)?{...item,locked:!item.locked}:item));
    }
    function shuffleDice(){
        setCount(count=>count+1);
        setDices(oldState=>oldState.map((item,id)=> (!item.locked)?{...item,value:getValue()}:item));
    }
    function isOver(){
        let selected;
        for(let i=0;i<dices.length;i++){
            if(i===0)
                selected = dices[i].value;
            if(!dices[i].locked || selected !== dices[i].value)
                return false;
        }
        return true;
    }




    function handleButton(){
        if(over){
            sound.stop();
            setOver(false);
            setCount(0);
            setDices(generateDices());
        }
        else
            shuffleDice();
    }

    React.useEffect(()=>{
        if(isOver()){
            sound.play();
            setOver(true);
        }
    },[dices])

    return (
        <div className="pt-16 pb-5 w-full bg-cyan-900 overflow-x-hidden">
            { over&&<Confetti className={` w-screen h-screen`} />}
            <div className="mx-3 sm:mx-auto sm:w-[500px] bg-slate-200 rounded-lg flex flex-col gap-5 py-3 px-5 md:px-10 md:py-8 text-center text-cyan-900">
                <h3 className="text-2xl font-inter-bold">Tenzie</h3>
                <p className=" text-sm sm:text-base font-inter-medium px-0 sm:px-20 md:px-10">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <p className="font-inter-semibold text-lg sm:text-xl">count: {count}</p>
                <div className="grid grid-cols-3 gap-4">
                    {diceArray}
                </div>
                <button className={`text-white py-3 text-center w-40 mx-auto font-inter-bold rounded-lg active:scale-95 transition-all ${over?'bg-green-600':'bg-blue-700'}`} onClick={()=>handleButton()}>{over?"Reset":"Roll"}</button>
            </div>

        </div>
    );
}

export default Tenzie;