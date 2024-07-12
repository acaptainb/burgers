import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { burgerSchema } from '../models/burgers.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Burgers = mongoose.model('Burger',burgerSchema)
}

export const dbContext = new DbContext()
