import mongoose from "mongoose";
import colors from 'colors'

export const db = async() => {

    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log(db.connection)
        const url  = `$(db.connection.host):$(db.connection.port)`
        console.log(colors.america(url))
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}