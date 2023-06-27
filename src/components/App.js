import {useState, useEffect} from "react";
import Intro from "./intro";
import Game from "./Game";


function App() {

    const [randomNumber, setRandomNumber] = useState(0);
    const [gameSettings,setGameSettings] = useState({
        minNumber: 1,
        maxNumber: 100,
        attempts: 10,
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [guesses, setGuesses] = useState([]);

    useEffect(
        function (){
            setRandomNumber(getRandomNumber(gameSettings.minNumber,gameSettings.maxNumber));
        }, [gameSettings.minNumber, gameSettings.maxNumber]
    );

    function getRandomNumber(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function validateGuess(guess){
        if (isNaN(guess)){
            alert("Пожалуйста, введите корректное число!");
        } else if(guess < gameSettings.minNumber){
            alert(`Пожалуйста введите число больше ${gameSettings.minNumber}`);
        } else if(guess > gameSettings.maxNumber){
            alert(`Введите число меньше ${gameSettings.maxNumber}`);
        } else{
            checkGuess(guess);
        }
    }

    function checkGuess(guess){
            console.log(guess)
    }


    //const remainingGuesses = gameSettings.attempts - guesses.length;



    return(
        <div className="app">
            <Intro gameSettings={gameSettings}/>
            <Game isPlay={isPlaying} onValidate={validateGuess}/>
        </div>
    );
}

export default App;
