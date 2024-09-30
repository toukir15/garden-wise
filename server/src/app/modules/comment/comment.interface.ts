import { Types } from 'mongoose'

export type TReply = {
  commentReplyUser: string
  replyTo: string
  votes: Types.ObjectId
  text: string
}

export type TComments = {
  userId: string
  replyTo: string
  text: string
  votes: Types.ObjectId
  replies: TReply[]
}
