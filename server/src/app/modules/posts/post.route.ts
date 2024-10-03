import express from 'express'
import { multerUpload } from '../../config/multer.config'
import { PostControllers } from './post.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.const'

const router = express.Router()

router.post(
  '/',
  multerUpload.array('file'),
  auth(USER_ROLE.user, USER_ROLE.admin),
  // validateRequest(AuthValidation.registerValidationSchema),
  PostControllers.createPost,
)
router.post('/comment/:postId', PostControllers.createComment)
router.post('/comment/reply/:commentId', PostControllers.createCommentReply)
router.patch(
  '/comment/upvote/:voteId',
  auth(USER_ROLE.user, USER_ROLE.admin),
  PostControllers.updateUpvote,
)
router.patch(
  '/comment/downvote/:voteId',
  auth(USER_ROLE.user, USER_ROLE.admin),
  PostControllers.updateDownvote,
)

export const PostRouter = router
