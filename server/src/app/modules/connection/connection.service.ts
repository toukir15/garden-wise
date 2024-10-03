import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../user/user.model'
import { Connection } from './connection.model'

const updateConnectionIntoDB = async (
  followingUserId: string,
  userId: string,
) => {
  //check find user exist or not
  const findUser = await User.findById(userId)
  if (!findUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User does not exist!')
  }

  //check following user exist or not
  const followingUser = await User.findById(followingUserId)
  if (!followingUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User does not exist!')
  }

  //check already follow or not
  const followUserConnection = await Connection.findOne({
    _id: findUser.connection,
    followings: { $in: [followingUser._id] },
  })
  const followingUserConnection = await Connection.findOne({
    _id: followingUser.connection,
    followers: { $in: [findUser._id] },
  })

  if (followUserConnection || followingUserConnection) {
    throw new AppError(httpStatus.BAD_REQUEST, 'You already follow this user')
  }

  // update following user connection
  await Connection.findByIdAndUpdate(followingUser.connection, {
    $push: { followers: findUser._id },
  })
  // update follow user connection
  await Connection.findByIdAndUpdate(findUser.connection, {
    $push: { followings: followingUser._id },
  })
}

export const ConnectionServices = {
  updateConnectionIntoDB,
}
