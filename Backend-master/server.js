const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 3000;
let User = require('./todo.model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


todoRoutes.route('/').get(function(req, res) {   
  //   console.log('request:  ', req);
    User.find( function(err, aa) {
        if (err) {
             console.log("err->", err);
        } else {
            res.json(aa);
           
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

todoRoutes.route('/:id').delete(
    function(req, res) {
        let id = req.params.id;
        console.log(id);
        User.deleteOne({_id: id}, function(err, user) {
            res.json(user);
        })}
);
todoRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else
            user.email = req.body.email;
            user.password = req.body.password;
            
            user.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

todoRoutes.route('/add').post(function(req, res) {

    let user = new User(req.body);
    user.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});


app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});