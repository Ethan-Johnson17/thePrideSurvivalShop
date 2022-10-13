import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ExerciseSchema } from '../models/Exercise';
import { ProductSchema } from '../models/Product';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Product = mongoose.model('Product', ProductSchema);
  Exercises = mongoose.model('Exercise', ExerciseSchema)
}

export const dbContext = new DbContext()
