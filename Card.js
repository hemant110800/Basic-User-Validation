import './Card.css';

function Card(props){
    const cls = `cardStyle ${props.className}`;
    return <div className={cls} style={props.style}>{props.children}</div>;
}

export default Card;