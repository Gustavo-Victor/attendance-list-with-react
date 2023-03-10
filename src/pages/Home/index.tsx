//imports
import './style.css';
import {Card, CardProps} from '../../components/Card';
import {useState, useEffect} from 'react';

// types 
type ProfileResponse = {
    name: string;
    avatar_url: string;
}

type User = {
    name: string;
    avatar: string;
}

//component
export function Home() {
    //state
    const [studentName, setStudentName] = useState(""); 
    const [students, setStudents] = useState<CardProps[]>([]);
    const [user, setUser] = useState<User>({} as User);

    //handler
    const handleAddStudent = () => {
        const newStudent = {
            name: studentName,
            time : new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: '2-digit',
                second: "2-digit"
            })
        }
        setStudents(prevState => [...prevState, newStudent]);
    }

    //effect
    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch('https://api.github.com/users/Gustavo-Victor'); 
                const data = await response.json() as ProfileResponse;         
                setUser({name: data.name, avatar: data.avatar_url});
            } catch (e) {
                console.error(e);
            }
        }
        getUser();
     }, []);

    //content
    return (
        <div className='container'>
            <header>
                <h1>Lista de Presença</h1>
                <div className='avatar'>
                    <strong>{user.name}</strong> 
                    <img src={user.avatar} alt={user.name} title={user.name}/>                   
                </div>
            </header>
            <input 
            type="text"
            placeholder="Digite o nome..."
            onChange={e => setStudentName(e.target.value)} 
            />
            <button onClick={handleAddStudent} type="button">Enviar</button>

            {
                students.length > 0 ? (
                    students.map((student) => 
                        (
                            <Card 
                            key={student.time}
                            name={student.name}
                            time={student.time}
                            />
                        )
                    )
                ) : (
                    <p>Ninguém chegou ainda...</p>
                )
            }
        </div>
    );
}