import moment from "moment";

export default function formatDate(date) {
    const fromNow = moment(date).fromNow();
    if (moment().diff(date, `minutes`) <= 59) {
        return fromNow;
    }
    if (moment().diff(date, `hours`) <= 11) {
        return fromNow;
    }
    return moment(date).calendar(null, {
        lastDay: `[Yesterday] HH:mm`,
        sameDay: `[Today] HH:mm`,
        lastWeek: `DD/MM/YYYY`,
        nextWeek: `dddd [at] HH:mm`,
        sameElse() {
            return `LL`;
        },
    });
}