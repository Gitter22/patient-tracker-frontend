import dayjs from "dayjs"
export const getDayOfWeek = (date, format = 'long') => {
    const weekDayString = [{
        short: 'Sun',
        long: 'Sunday'
    }, {
        short: 'Mon',
        long: 'Monday'
    }, {
        short: 'Tue',
        long: 'Tuesday'
    }, {
        short: 'Wed',
        long: 'Wednesday'
    }, {
        short: 'Thurs',
        long: 'Thursday'
    }, {
        short: 'Fri',
        long: 'Friday'
    }, {
        short: 'Sat',
        long: 'Saturday'
    },]
    console.log(dayjs(date).date())

    if (typeof date === 'string') {
        return weekDayString[dayjs(date).day()]?.[format]
    } else if (date instanceof dayjs) {
        return weekDayString[date.day()]?.[format]
    } else {
        return null
    }
}