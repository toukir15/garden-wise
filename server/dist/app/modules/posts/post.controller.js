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
exports.PostControllers = void 0
const http_status_1 = __importDefault(require('http-status'))
const sendResponse_1 = __importDefault(require('../../utils/sendResponse'))
const catchAsync_1 = require('../../utils/catchAsync')
const post_service_1 = require('./post.service')
const createPost = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const post = JSON.parse(req.body.data)
    const files = req.files
    const postImages =
      files === null || files === void 0 ? void 0 : files.map(file => file.path)
    const result = yield post_service_1.PostServices.createPostIntoDB(
      post,
      postImages,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Created post successfully!',
      data: result,
    })
  }),
)
const createComment = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body
    const postId = req.params.postId
    const result = yield post_service_1.PostServices.createCommentIntoDB(
      data,
      postId,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Created comment successfully!',
      data: result,
    })
  }),
)
const createCommentReply = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body
    const commentId = req.params.commentId
    const result = yield post_service_1.PostServices.createCommentReplyIntoDB(
      data,
      commentId,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Created comment reply successfully!',
      data: result,
    })
  }),
)
const updateUpvote = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const voteId = req.params.voteId
    const userId = req.user?._id
    const result = yield post_service_1.PostServices.updateUpvoteIntoDB(
      userId,
      voteId,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Upvoted comment successfully!',
      data: result,
    })
  }),
)
const updateDownvote = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const voteId = req.params.voteId
    const userId = req.user?._id
    const result = yield post_service_1.PostServices.updateDownvoteIntoDB(
      userId,
      voteId,
    )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Downvote comment successfully!',
      data: result,
    })
  }),
)
exports.PostControllers = {
  createPost,
  createComment,
  createCommentReply,
  updateUpvote,
  updateDownvote,
}
