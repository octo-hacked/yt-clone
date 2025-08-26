// require('dotenv').config({path:'./.env'})
import dotenv from 'dotenv'

import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})

connectDB()






























/*
import express from "express";
const app = express()

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log('ERR',error)
            throw error
        })
        app.listen(`App is listening on${process.env.PORT}`)

    } catch (error) {
        console.error('EERROR',error)
        throw error
    }
})()
*/