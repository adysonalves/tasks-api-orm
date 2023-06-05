const express = require('express');
const router = express.Router();
const TaskController = require('./src/controllers/TaskController.js');
const UserController = require('./src/controllers/UserController.js');
const AuthController = require('./src/controllers/AuthController.js');
const Auth = require('./src/functions/Auth.js');

// Tasks

router.get('/tasks', Auth.protected, TaskController.getAll);

router.post('/task', Auth.protected, TaskController.addTask);

router.put('/task/:id', Auth.protected, TaskController.updateTask);

router.delete('/task/:id', Auth.protected, TaskController.deleteTask);

//Users
router.get('/users', Auth.protected, UserController.getAll);
router.post('/user', UserController.createUser);
router.put('/user/:id', Auth.protected, UserController.updateUser);
router.delete('/user/:id', Auth.protected, UserController.deleteUser);

// Authentication
router.post('/auth', AuthController.login)
module.exports = router;