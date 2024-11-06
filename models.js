import mongoose from 'mongoose'

let models = {}

console.log("connecting to mongodb")

//TODO: put your connection string below
await mongoose.connect('mongodb+srv://harmanzhang60:HarmanInfo441Zhang@cluster0.ktcnj.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');

//mongodb+srv://websharerUser:pa55w0rd@cluster0.4pad9.mongodb.net/userDemo?retryWrites=true&w=majority&appName=Cluster0
//            password here:  ^^^^^^^^      Database name here:   ^^^^^^^^

console.log("successfully connected to mongodb!")

const newPost = new mongoose.Schema({
    username: String,
    url: String,
    description: String,
    created_date: String
})

models.Post = mongoose.model('post', newPost)

console.log("mongoose models created")

export default models