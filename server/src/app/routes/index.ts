import express from 'express'
import { AuthRoutes } from '../modules/Auth/auth.route'
import { ProfileRoutes } from '../modules/Profile/profile.route'
import { PostRouter } from '../modules/posts/post.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/posts',
    route: PostRouter,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
