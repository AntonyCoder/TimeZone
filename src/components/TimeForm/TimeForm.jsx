import './TimeForm.css'

function TimeForm({ onSubmit }) {

    return (
        <form className="time-form" onSubmit={onSubmit}>
            <label className="form-label">
                Название
                <input type="text" className="input time-name" name='name' required/>
            </label>
            <label className="form-label">
                Временная зона
                <input type="number" className="input time-zone" name='zone' min='-12' max='14' required/>
            </label>
            <button className="form-button">Добавить</button>
        </form>
    )
}

export default TimeForm