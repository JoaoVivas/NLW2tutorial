const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "Históra",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]
function getSubject(subjectNumber){
    return subjects[subjectNumber]
}
function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour*60)+ minutes)
}
module.exports = {
    convertHoursToMinutes,
    subjects,
    weekdays,
    getSubject
}