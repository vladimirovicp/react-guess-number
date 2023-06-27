import GameForm from "./GameForm";
import GameResult from "./GameResult";

function Game({
                  isPlaying,
                  onValidate,
                  attempts,
                  guesses
              }){
    return (
        <div className="game">
            <GameForm isPlaying={isPlaying} onValidate={onValidate}/>
            <GameResult />
        </div>
    );
}

export default Game;