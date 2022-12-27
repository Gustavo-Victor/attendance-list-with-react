//imports
import './style.css';
import {Card} from '../../components/Card';
import {useState} from 'react';

//component
export function Home() {
    //state
    const [name, setName] = useState(""); 

    //content
    return (
        <div className='container'>
            <h1>Nome: {name}</h1>
            <input 
            type="text"
            placeholder="Digite o nome..."
            onChange={e => {setName(e.target.value)}} 
            />
            <button type="button">Enviar</button>

            <Card name="Rodrigo" time="10:55:25" />
            <Card name="Juliana" time="10:56:46" />
        </div>
    );
}