
import './List.css'
import Itme from '../componets/Item.js'
const List = (props) => {
    return (
        <ul className="goal-list">
            {props.items.map(goal => (
                <Itme
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </Itme>
            ))}
        </ul>
    );

}
export default List;