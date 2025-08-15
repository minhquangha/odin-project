import './App.css';
import { useEffect, useState } from 'react';
import shuffleArray from './utils/shuffleArray';
import Card from './component/Card';
import Header from './component/Header';
import GameOverPopup from './component/gameOver';
function App() {
    const [list, setList] = useState([]);
    const [score, setScore] = useState(0);
    const [highest, setHighest] = useState(0);
    const [currentList, setCurrentList] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [finalScore,setFinalScore] = useState(0);

    function handleClick(name) {
        if (currentList.includes(name)) {
            const finalScore = score;
            setHighest((prev) => Math.max(prev, score));
            setFinalScore(finalScore);
            setGameOver(true);
            setScore(0);
            setCurrentList([]);
            return;
        } else {
            setCurrentList((prevList) => [...prevList, name]);
            setScore((prev) => prev + 1);
        }

        setList((prev) => shuffleArray(prev));
    }
    useEffect(() => {
        const pokemonList = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
            const data = await res.json();
            const pokemonList = await Promise.all(
                data.results.map(async (poke) => {
                    const img = await fetch(poke.url);
                    const imgs = await img.json();
                    return {
                        name: poke.name,
                        img: imgs.sprites.front_default
                    };
                })
            );
            setList(shuffleArray(pokemonList));
        };
        pokemonList();
    }, []);

    return (
        <div className='container'>
            <Header score={score} highest={highest} />
            <div className='grid'>
                {list.map((poke) => {
                    return <Card name={poke.name} img={poke.img} key={poke.name} onClick={() => handleClick(poke.name)} />;
                })}
            </div>
            {gameOver && <GameOverPopup score={finalScore} highest={highest} onClose={() => setGameOver(false)} />}
        </div>
    );
}

export default App;
