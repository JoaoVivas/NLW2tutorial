const Database = require("./db")
const createProffy = require("./createProffy")

Database.then( async (db) => {
    proffyValue = {
        name: "penis",
        avatar: "https://penis.com",
        whatsapp:"979832564",
        bio:"eu sou um pneis",
    }
    classValue = {
        subject: 1,
        cost: "20",

    }
    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 500,
            time_to: 1550,
        }
    ]

//await createProffy(db, {proffyValue, classValue, classScheduleValues})
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"
    `)
    //console.log(selectClassesSchedules)
})