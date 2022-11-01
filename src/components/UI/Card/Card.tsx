import { ClassComponent, ContainerComponent } from '../../../types/Components';
import './Card.css'

interface CardProps extends ContainerComponent, ClassComponent {
    id: string
}

function Card({ id, className, children }: CardProps): JSX.Element {
    const clss = `card ${className}`
    return (
        <div id={id} className={clss}>{children}</div>
    );
}

export default Card;