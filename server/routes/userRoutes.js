const {Router} = require('express');
const router = Router();
const {registerController, loginController, userPageController} = require('../controllers/userControllers.js');
const { verifyToken } = require('../middlewares/authentications.js');

router.post('/register',registerController);
router.get('/register',(req,res)=>{res.send('in get of api/register')});
router.post('/login',loginController);
router.get('/login',(req,res)=>{res.send('in the get for api/login')});
router.get('/userPage',verifyToken,userPageController);

module.exports = router;