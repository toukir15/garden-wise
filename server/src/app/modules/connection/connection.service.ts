import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../user/user.model'
import { Connection } from './connection.model'

const updateConnectionIntoDB = async (
  connectionId: string,
  followId: string,
  userId: string,
) => {
  // check connection is exist or not
  const findConnection = await Connection.findById(connectionId)
  if (!findConnection) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Connecion does not exist!')
  }

  //check find user exist or not
  const findUser = await User.findById(userId)
  if (!findUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User does not exist!')
  }

  //check find user exist or not
  const followUser = await User.findById(followId)
  if (!followUser) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User does not exist!')
  }

  const followUserConnection = await Connection.findById(followUser.connection)

  let result
  if (findConnection.followings?.includes(findUser._id)) {
    // update followings
    result = await Connection.findByIdAndUpdate(
      findConnection._id,
      {
        $pull: { followings: findUser._id },
      },
      { new: true },
    )

    // // update followers
    await Connection.findByIdAndUpdate(followUserConnection!._id, {
      $pull: { followers: followUser._id },
    })
  } else {
    // update followings
    result = await Connection.findByIdAndUpdate(
      findConnection._id,
      {
        $push: { followings: findUser._id },
      },
      { new: true },
    )

    // update followers
    await Connection.findByIdAndUpdate(followUserConnection!._id, {
      $push: { followers: followUser._id },
    })
  }
  return result
}

export const ConnectionServices = {
  updateConnectionIntoDB,
}
