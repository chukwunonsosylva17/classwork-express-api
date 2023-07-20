const router = require('express').Router();
const teacherRoute = require('./teacher.routes');

router.use('/teacher', teacherRoute);

module.exports = router;