const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    },

    username: { type: String },
    weight: { type: Number },
    height: { type: Number },
    age: { type: Number },
    goal: { type: String },
    diary: [
        {
            date: { type: Date, default: Date.now },
            meals: [
                {
                    type: { type: String },
                    fat: { type: Number },
                    carbs: { type: Number },
                    protein: { type: Number },
                    calories: { type: Number },
                }
            ]
        }
    ]
});

module.exports = mongoose.model('User', UserSchema)
