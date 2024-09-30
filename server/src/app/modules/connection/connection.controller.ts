import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { catchAsync } from '../../utils/catchAsync'
import { ConnectionServices } from './connection.service'

const updateConnection = catchAsync(async (req, res) => {
  const connectionId = req.params.connectionId
  const followId = req.params.followId
  const userId = req.user._id
  const result = await ConnectionServices.updateConnectionIntoDB(
    connectionId,
    followId,
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
