import './style.css';
import {Card} from '../../components/Card';

export function Home() {
    return (
        <div className='container'>
            <h1>Lista de Presença</h1>
            <input type="text" placeholder="Digite o nome..." />
            <button type="button">Enviar</button>
        
            <Card name="Rodrigo" time="10:55:25" />
            <Card name="Juliana" time="10:56:46" />
        </div>
    );
}