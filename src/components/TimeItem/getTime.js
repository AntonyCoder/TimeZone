import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

//Получаем время по временной зоне
function getTime(zone) {

    const minutes = zone * 60;
    const currentTime = dayjs().utc().utcOffset(minutes).format('HH:mm:ss');

    return currentTime
}

export default getTime