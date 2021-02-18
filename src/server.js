// const proffys = [
//     {
//         name : "Diego Fernandes",
//         avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
//         whatsapp: "21979835659",
//         bio:"chupameupinti",
//         subject: "Química",
//         cost: "20",
//         weekday: [0],
//         time_from: [720],
//         time_to: [1220]
//     },
//     {
//         name : "Diego Fernandes ",
//         avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
//         whatsapp: "21979835659",
//         bio:"chupameupinti",
//         subject: "Química",
//         cost: "20",
//         weekday: [0],
//         time_from: [720],
//         time_to: [1220]
//     },
    
// ]
const express = require("express")
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")

const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    coCache: true,
})

server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen("5000")