import './style.css';

// interface CardProps {
//     name: string;
//     time: string; 
// }

export type CardProps = {
    name: string;
    time: string;
}

export function Card(props: CardProps) {
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}