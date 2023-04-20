const Record = require('../database/Record');

const getRecordForWorkout = (workoutId) => {
    try {
        const record = Record.getRecordForWorkout(workoutId);
        return record;
    } catch (error) {
        throw new Error(error);
    } 
}

module.exports = { 
    getRecordForWorkout,
};