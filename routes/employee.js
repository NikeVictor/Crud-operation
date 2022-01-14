const express = require ('express')
const routers = express.Router()

const {
    index,
    show,
    store,
    update,
    destroy
} = require ('../controller/employee')

routers.route('/').get(index);
routers.route('/show/:id').get(show);
routers.route('/store').post(store);
routers.route('/update/:id').put(update);
routers.route('/destroy/:id').delete(destroy);


module.exports = routers