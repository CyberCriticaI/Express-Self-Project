const express = require('express')
const app = express()
const PORT = 3000

// ------------------------------------- //

app.set('view engine', 'ejs')
// npm i express ejs --save

// --------------[ROUTES]
app.get('/',(req,res)=>{
    res.send("Welcome to the Homepage")
})
app.get('/home',(req,res)=>{
    res.render('Homepage')
})

// ----------------(RES.RENDER)

app.listen(PORT,()=>{
    console.log(`Server is now Running...${PORT}`)
})