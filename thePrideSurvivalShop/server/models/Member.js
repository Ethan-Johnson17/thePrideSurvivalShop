import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MemberSchema = new Schema(
  {
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    membershipLevel: { type: String, required: true, default: 'free' },
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
    profile: {}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

MemberSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

MemberSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
