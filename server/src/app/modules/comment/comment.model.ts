import { model, Schema } from 'mongoose'
import { TComments, TReply } from './comment.interface'

// Define the Reply schema
const ReplySchema = new Schema<TReply>(
  {
    commentReplyUser: { type: String, required: true },
    replyTo: { type: String, required: true },
    votes: { type: Schema.ObjectId, required: true, default: null },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

// Define the Comment schema
const CommentSchema = new Schema<TComments>(
  {
    userId: { type: String, required: true },
    replyTo: { type: String, required: true },
    text: { type: String, required: true },
    votes: { type: Schema.ObjectId, required: true, default: null },
    replies: { type: [ReplySchema], default: [] },
  },
  { timestamps: true },
)

// Create the model
export const Comment = model('Comment', CommentSchema)
