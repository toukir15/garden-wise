'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.ConnectionServices = void 0
const http_status_1 = __importDefault(require('http-status'))
const AppError_1 = __importDefault(require('../../errors/AppError'))
const user_model_1 = require('../user/user.model')
const connection_model_1 = require('./connection.model')
const updateConnectionIntoDB = (connectionId, followId, userId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a
    // check connection is exist or not
    const findConnection =
      yield connection_model_1.Connection.findById(connectionId)
    if (!findConnection) {
      throw new AppError_1.default(
        http_status_1.default.BAD_REQUEST,
        'Connecion does not exist!',
      )
    }
    //check find user exist or not
    const findUser = yield user_model_1.User.findById(userId)
    if (!findUser) {
      throw new AppError_1.default(
        http_status_1.default.BAD_REQUEST,
        'User does not exist!',
      )
    }
    //check find user exist or not
    const followUser = yield user_model_1.User.findById(followId)
    if (!followUser) {
      throw new AppError_1.default(
        http_status_1.default.BAD_REQUEST,
        'User does not exist!',
      )
    }
    const followUserConnection = yield connection_model_1.Connection.findById(
      followUser.connection,
    )
    let result
    if (
      (_a = findConnection.followings) === null || _a === void 0
        ? void 0
        : _a.includes(findUser?._id)
    ) {
      // update followings
      result = yield connection_model_1.Connection.findByIdAndUpdate(
        findConnection?._id,
        {
          $pull: { followings: findUser?._id },
        },
        { new: true },
      )
      // // update followers
      yield connection_model_1.Connection.findByIdAndUpdate(
        followUserConnection?._id,
        {
          $pull: { followers: followUser?._id },
        },
      )
    } else {
      // update followings
      result = yield connection_model_1.Connection.findByIdAndUpdate(
        findConnection?._id,
        {
          $push: { followings: findUser?._id },
        },
        { new: true },
      )
      // update followers
      yield connection_model_1.Connection.findByIdAndUpdate(
        followUserConnection?._id,
        {
          $push: { followers: followUser?._id },
        },
      )
    }
    return result
  })
exports.ConnectionServices = {
  updateConnectionIntoDB,
}
