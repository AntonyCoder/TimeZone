import './TimeItem.css';
import CircleXmarkIcon from '@gravity-ui/icons/svgs/circle-xmark.svg';
import getTime from './getTime';
import { useEffect, useState } from 'react';

function TimeItem({ timezone, onDelete }) {
    const { name, zone } = timezone;

    const [time, setTime] = useState(getTime(zone));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime(zone))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="time-item">
            <span className="time-name">{name}</span>
            <div className="time-wrapper">
                <p className="time">{time}</p>
                <button className="delete-time" onClick={() => onDelete(name)}>
                    <img src={CircleXmarkIcon} alt="delete" className="delete-icon" />
                </button>
            </div>
        </div>
    )
}

export default TimeItem;