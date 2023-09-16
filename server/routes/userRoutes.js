const {Router} = require('express');
const router = Router();
const {registerController} = require('../controllers/userControllers.js')

router.post('/register',registerController)
router.get('/register',(req,res)=>{res.send('in get of api/register')})

module.exports = router;