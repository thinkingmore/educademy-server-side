const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

const categories = require('./data/courses.json')

const courses = require('./data/details.json')

app.use(cors());

app.get('/',(req,res)=>{
    res.send('api is running');
})

app.get('/categories',(req,res)=>{
    res.send(categories);
})


app.get('/categories/:id',(req, res)=>{
    const id = req.params.id;
    const course = courses.filter(cs => cs.category_id === id)
    res.send(course);
   
})

// app.get('/categories/:id',(req, res)=>{
//     const id = req.params.id;
//     const category = categories.find(cs => cs.id === id)
//     res.send(category);
   
// })

app.get('/courses',(req,res)=>{
    res.send(courses);
})


app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const singleCourse = courses.find(sc=> sc.id === id)
    res.send(singleCourse);
})


app.listen(port, ()=>{
    console.log('educademy is running');
})