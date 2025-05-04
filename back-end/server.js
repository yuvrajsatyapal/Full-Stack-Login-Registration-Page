const express = require('express')
const app = express();
const port = 8000;
const cors = require('cors');

const connectDb = require('./db/dbConnection')
const User = require('./db/user')

app.use(express.json())

app.use(cors());

connectDb()

app.post('/register', async (req,res) => {
    try {
        const {username, password} = req.body;
        console.log(req.body);
        const user = new User({username, password})
        await user.save()
        res.status(201).json({message: 'Registration Successfully'})
    } catch (error) {
        res.status(500).json({error: 'Resgistration Failed'})
    }
})

app.post('/login', async (req,res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if (!user) {
            res.status(401).json({error: 'Invalid Username or Password'})
        }
        
        if (user.password != password) {
            res.status(401).json({error: 'Invalid Username or Password'})
        }

        res.status(201).json({message: 'Login Successfully'})

    } catch (error) {
        res.status(500).json({error: 'Login Failed'})
    }
})

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})