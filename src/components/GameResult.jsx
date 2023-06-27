function GameResult({attempts, guesses}){

    return(
        <div className="result">
            <p>Предыдущие варианты: <span className="guesses"></span></p>
            <p>Оставшиеся кол-во попыток: <span className="last-result"></span></p>
            <p className="hint"></p>
        </div>
    )

}

export default GameResult;

