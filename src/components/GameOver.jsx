export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2> Game over! </h2>
            {winner && <p>{winner} has won!</p>}
            {!winner && <p>Its a draw!</p>}
            <p>
                <button onClick={onRestart}> REMATCH! </button>
            </p>
        </div>
    )
}