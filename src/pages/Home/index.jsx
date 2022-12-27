import './style.css';

export function Home() {
    const myHandlerButton = () => {
        window.alert('Clicou...');
    }

    const myHandlerInput = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className='home'>
            <h1>Lista de Presença</h1>
            <input type="text" onChange={myHandlerInput} placeholder="Digite o nome..." />
            <button type="button" onClick={myHandlerButton}>Clique em mim</button>
        </div>
    );
}