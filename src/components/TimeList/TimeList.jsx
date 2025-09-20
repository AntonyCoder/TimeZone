import TimeItem from "../TimeItem/TimeItem";
import './TimeList.css'

function TimeList({timezones, onDelete}){

    return(
        <div className="time-list">
            {timezones.map((item, itemId) => (
                <TimeItem timezone={item} key={itemId} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default TimeList