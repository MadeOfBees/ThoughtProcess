const { Schema,Types, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: function (ObjectID) {
                return new Types.ObjectID()
            }
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
         username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function (date) {
                return (new Date(date))
            }
        },
    }

);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            unique: true,
            required: true,
            minLenght: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function (date) {
                return (new Date(date))
            }
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }

)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
