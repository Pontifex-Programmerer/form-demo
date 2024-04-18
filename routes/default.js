const router = require('express').Router();
const {
    get_index,
    post_index
} = require('../controllers/default');

router.get('/', get_index)
router.post('/', post_index)

module.exports=router;