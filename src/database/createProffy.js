module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {

    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)
    const class_id = insertedClass.lastID
    
    const insertedAllCLassScheduleValues = classScheduleValues.map((classSchedulevalue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classSchedulevalue.weekday}",
                "${classSchedulevalue.time_from}",
                "${classSchedulevalue.time_to}"
            );
        `)
    })
    await Promise.all(insertedAllCLassScheduleValues)
}