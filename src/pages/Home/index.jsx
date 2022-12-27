import './style.css';
import {Card} from '../../components/Card';

export function Home() {
    return (
        <div className='container'>
            <h1>Lista de Presença</h1>
            <input type="text" placeholder="Digite o nome..." />
            <button type="button">Enviar</button>
        
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}