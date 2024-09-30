import express from 'express'
import { ConnectionController } from './connection.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.const'
const router = express.Router()

router.patch(
  '/follow/:connectionId/:followId',
  auth(USER_ROLE.user, USER_ROLE.admin),
  ConnectionController.updateConnection,
)

export const ConnectionRouter = router
