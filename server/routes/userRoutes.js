const {Router} = require('express');
const router = Router();
const {registerController, loginController} = require('../controllers/userControllers.js')

router.post('/register',registerController);
router.get('/register',(req,res)=>{res.send('in get of api/register')});
router.post('/login',loginController);
router.get('/login',(req,res)=>{res.send('in the get for api/login')});

module.exports = router;