import mongoose from "mongoose";

export const db = async() => {

    try {
        const db = await mongoose.connect('mongodb+srv://root:root@cluster0.vo8b0ts.mongodb.net/?retryWrites=true&w=majority')
        
        console.log('Se conecto a la db correctamente')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}