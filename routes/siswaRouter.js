const express = require('express')

const siswaController = require('../controller/siswaController')

const router = express.Router()

router.get('/', siswaController.getUsers)
router.post('/', siswaController.insertUser)
router.put('/:id', siswaController.updateUser)
router.delete('/:id', siswaController.deleteUser)

module.exports = router