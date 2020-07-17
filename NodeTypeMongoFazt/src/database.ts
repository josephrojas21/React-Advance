import mongoose from 'mongoose';
import { mongo } from './keys'

mongoose.connect(mongo.URI,{
    useNewUrlParser: true
}).then( db => console.log('db is connect'))
  .catch(err => console.log(err))
