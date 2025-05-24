import express from 'express'
import { userLogin, userSignUp } from './controller.js'

const router = express.Router()

router.get('/login', userLogin)
router.get('/signup', userSignUp)

export default router