import './App.css';
import { useEffect, useState } from 'react';
import shuffleArray from './utils/shuffleArray';
import Card from './component/Card';
import Header from './component/Header';
function App() {
    const [list, setList] = useState([]);

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
            <Header />
            <div className='grid'>
                {list.map((poke) => {
                    <Card name={poke.name} img={poke.img} />;
                })}
            </div>
        </div>
    );
}

export default App;
