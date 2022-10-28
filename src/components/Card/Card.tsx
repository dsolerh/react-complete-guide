import './Card.css'

function Card({ id, className, children }: { id: string, className: string, children: JSX.Element[] }): JSX.Element {
    const clss = `card ${className}`
    return (
        <div id={id} className={clss}>{children}</div>
    );
}

export default Card;