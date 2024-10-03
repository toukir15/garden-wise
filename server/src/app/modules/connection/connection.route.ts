import express from 'express'
import { ConnectionController } from './connection.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.const'
const router = express.Router()

router.patch(
  '/follow/:followingUserId',
  auth(USER_ROLE.user, USER_ROLE.admin),
  ConnectionController.updateConnection,
)

router.patch(
  '/unfollow/:connectionId/:followId',
  auth(USER_ROLE.user, USER_ROLE.admin),
  ConnectionController.updateConnection,
)

export const ConnectionRouter = router
