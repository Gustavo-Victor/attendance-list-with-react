//imports
import './style.css';
import {Card} from '../../components/Card';
import {useState} from 'react';

//component
export function Home() {
    //state
    const [studentName, setStudentName] = useState(""); 
    const [students, setStudents] = useState([]);


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

    //content
    return (
        <div className='container'>
            <h1>Lista de Chamadas</h1>
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