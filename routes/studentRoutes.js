    const {Router} = require('express');
    const { getStudents, createStudent, getStudentById } = require('../controllers/studentControllers');

    const router = Router();

    router.get('/students', getStudents);
    router.get('/students/:id', getStudentById);
    router.post('/create-student', createStudent);

    module.exports = router;