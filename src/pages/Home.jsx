function Home() {

    const myHandler = () => {
        window.alert('Clicou...');
    }

    return (
        <>
            <h1>Lista de Presença</h1>
            <input type="text" placeholder="Digite o nome..." />
            <button type="button" onClick={myHandler}>Clique em mim</button>
        </>
    );
}

export default Home;