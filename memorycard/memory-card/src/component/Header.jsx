export default function Header({score,highest}){
    return (
        <div className="scoreContainer">
                <h1>Memory Card Game</h1>
                <div>Score: {score} </div>
                <div>Highest: {highest}</div>
        </div>
    )
}