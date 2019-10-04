const moongose = require("mongoose");
const Schema = moongose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  followers: [
    {
      username: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true
      },
      messages: {
        username: {
          type: String,
          required: true
        },
        avatar: {
          type: String,
          required: true
        },
        message: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    }
  ],
  following: [
    {
      username: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true
      },
      messages: {
        username: {
          type: String,
          required: true
        },
        avatar: {
          type: String,
          required: true
        },
        message: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    }
  ],
  matches: [
    {
      opponent: {
        type: String,
        required: true
      },
      amount: {
        type: String,
        required: true
      },
      winner: {
        type: String,
        required: true
      },
      game: {
        type: String,
        required: true
      }
    }
  ],
  status: {
    type: String,
    required: true
  },
  notification: [
    {
      messages: {
        type: String
      }
    }
  ],
  fund: {
    type: String,
    required: true
  }
});

module.exports = Profile = moongose.model("profile", ProfileSchema);
