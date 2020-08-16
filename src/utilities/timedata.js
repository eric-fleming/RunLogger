
function generateClockTime(time) {
    let clock_time = [0, 0, 0];
    while (time > 0) {
        if (time >= 3600) {
            clock_time[0]++;
            time -= 3600;
        }
        else if (time >= 60) {
            clock_time[1]++;
            time -= 60;
        }
        else {
            clock_time[2] = time;
            break;
        }
    }

    for (let i = 0; i < 3; i++) {
        let temp = clock_time[i]
        if (temp < 10) {
            clock_time[i] = "0" + temp;
        }
    }

    clock_time = `${clock_time[0]}:${clock_time[1]}:${clock_time[2]}`;
    return clock_time;
}

function generatePace(d, t) {
    t = Number(t);
    let hr_limit = Math.floor(Number(t) / (d * 3600));

    if (hr_limit === 0) {
        let min_pace = t / (d * 60);
        let min = Math.floor(min_pace);
        let sec = Math.floor(60 * (min_pace - min));
        if (sec < 10) {
            sec = `0${sec}`;
        }
        return `${min}:${sec}`;
    }
    else {
        return `pace is over an hour per mile`;
    }

}

function trimDateString(date) {
    let timeIndex = date.indexOf("T");
    if (timeIndex >= 0) {
        return date.substring(0, timeIndex);
    }
    return date;
}

function americanDateFormat(date) {
    let first = date.indexOf('-');
    let last = date.lastIndexOf('-');
    return (date.substring(first + 1, last) + '-' + date.substring(last + 1) + '-' + date.substring(0, first));
}

module.exports = {
    generateClockTime,
    generatePace,
    trimDateString,
    americanDateFormat,
}