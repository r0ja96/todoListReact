import './AddTodo.css';

const AddTodo = ({ buttonState, onInputChange, onButtonClick, input }) => {
    return (
        <div className='addTodo-container'>
            <div className='addTodo-bg'>
                <input value={input} onChange={onInputChange} type='text' />
                <button disabled={buttonState} onClick={onButtonClick}>ADD</button>
            </div>
        </div>
    );
}

export default AddTodo;