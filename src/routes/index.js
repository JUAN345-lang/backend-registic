const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');
const Student = require('../models/student');
const User = require('../models/user');
const Auth = require('../middlewares/authentication')

//routes
router.get('/', Auth, async (req, res)=>{
    const students = await Student.find();
    res.send(students);
});

router.post('/', async (req, res)=>{    
    // res.send(new Product(req.body));
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

router.get('/:id', async (req, res)=>{
    const student = await Student.findById(req.params.id);
    res.send(student);
});

//------------------------ Auth routes
router.post('/register', async (req, res)=>{
    try {
        const user = new User(req.body);
        const userData = await authService.register(user);
        res.send(userData);
    } catch (error) {
        res.send(error)
    }
});

router.post('/login', async (req, res)=>{ 
    try {
        const {email, password} = req.body;
        if(!email || !password){
            res.status(400).json('Email and password required');
        }
        let token = await authService.login(req.body);
        if (token.code == 200) {
            res.status(token.code).json(token);
        }else{
            res.send(token);
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;