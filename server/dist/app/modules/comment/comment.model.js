"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
// Define the Reply schema
const ReplySchema = new mongoose_1.Schema({
    commentReplyUser: { type: String, required: true },
    replyTo: { type: String, required: true },
    votes: { type: mongoose_1.Schema.ObjectId, required: true, default: null },
    text: { type: String, required: true },
}, {
    timestamps: true,
});
// Define the Comment schema
const CommentSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    replyTo: { type: String, required: true },
    text: { type: String, required: true },
    votes: { type: mongoose_1.Schema.ObjectId, required: true, default: null },
    replies: { type: [ReplySchema], default: [] },
}, { timestamps: true });
// Create the model
exports.Comment = (0, mongoose_1.model)('Comment', CommentSchema);
