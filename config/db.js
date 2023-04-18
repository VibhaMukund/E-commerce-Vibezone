import mongoose from 'mongoose';
import colors from 'colors';

const dbConnect = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongo db ${connection.connection.host}`.bgBlue.white);
    }catch(error){
        console.log(`Error in Mongodb ${error}`.bgMagenta.white);
    }
};
export default dbConnect;