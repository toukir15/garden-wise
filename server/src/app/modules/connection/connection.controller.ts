import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { catchAsync } from '../../utils/catchAsync'
import { ConnectionServices } from './connection.service'

const updateConnection = catchAsync(async (req, res) => {
  const followingUserId = req.params.followingUserId
  const userId = req.user._id

  const result = await ConnectionServices.updateConnectionIntoDB(
    followingUserId,
    userId,
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update connection successfully!',
    data: result,
  })
})

export const ConnectionController = {
  updateConnection,
}
