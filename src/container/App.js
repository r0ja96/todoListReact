import './App.css';
import AddTodo from '../components/AddTodo/AddTodo.js';
import TodoList from '../components/TodoList/TodoList.js';
import { useState } from 'react';


function App() {

  const [input, setInput] = useState('');
  const [todoListItem, setTodoListItem] = useState([]);
  const [buttonState, setButtonState] = useState(true);
  const [checkedItem, setCheckedItem] = useState([]);

  const onInputChage = (event) => {
    const type = event.target.value;
    setInput(type);
    type === '' ? setButtonState(true) : setButtonState(false);
  }

  const onButtonClick = () => {
    setTodoListItem([...todoListItem, { isChecked: false, input }]);
    setInput('');
    setButtonState(true);
  }

  const onChecked = (event) => {
    const isChecked = event.target.checked
    const id = Number(event.target.id);
    var itExist = true;
    let updateChecked = [...todoListItem];
    updateChecked[id].isChecked = isChecked;
    setTodoListItem(updateChecked);


    if (isChecked) {
      for (let i = 0; i < checkedItem.length; i++) {
        if (checkedItem[i] === id) {
          itExist = false
          break
        }
      }
      if (itExist) {
        setCheckedItem([...checkedItem, id]);
      }
    } else {
      const newCheckedItems = checkedItem.filter(item => {
        return item !== id;
      });
      setCheckedItem(newCheckedItems);
    }
  }

  const onDelete = () => {

    const deleteItem = todoListItem.filter((item, i) => {
      return !checkedItem.includes(i);
    });

    setTodoListItem(deleteItem);
    setCheckedItem([])


  }

  return (
    <div>
      <AddTodo onInputChange={onInputChage} buttonState={buttonState} onButtonClick={onButtonClick} input={input} />
      <TodoList todoListItem={todoListItem} onChecked={onChecked} checkedItem={checkedItem} onDelete={onDelete} />
    </div>
  );
}

export default App;
