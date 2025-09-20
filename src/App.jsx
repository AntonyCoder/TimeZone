import { useState } from 'react';
import TimeForm from './components/TimeForm/TimeForm';
import TimeList from './components/TimeList/TimeList';
import './App.css';

function App() {
  const [timezones, setTimezone] = useState([]);

  //Обработка нажатия кнопки добавить
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    form.reset();

    const isExist = timezones.find(item => item.name === data.name)

    if(isExist){
      alert('Такие часы уже существуют');
      return;
    }

    setTimezone(prev => [...prev, data])
  }

  //Оыбработка нажатия кнопки удалить временную зону
  function handleDelete(name){
    setTimezone(prev => prev.filter(timezone => timezone.name !== name))
  }

  return (
    <div className="timezone">
      <TimeForm onSubmit={handleSubmit} />
      <TimeList timezones={timezones} onDelete={handleDelete}/>
    </div>
  )
}

export default App;
