import './TodoList.css';

const TodoList = ({ todoListItem, onChecked, onDelete }) => {
    return (
        <div className='center'>
            { todoListItem.length !== 0 ?
                <div className='todoListContainer'>
                    <ul className='todoList'>
                        {todoListItem.map((item, i) => {
                            return <li key={i}><input type='checkbox' checked={item.isChecked} id={i} onChange={onChecked} />{item.input}</li>
                        })}
                    </ul>
                    <button onClick={onDelete}>Delete All Selected</button>
                </div> :
                <div className='todoListContainer'>
                    No Tasks
                </div>
            }
        </div>);
}

export default TodoList;