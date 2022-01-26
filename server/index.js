import app from "./server.js"
import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const port = process.env.PORT || 8000;
async function main(){
    const uri = process.env.RESTREVIEWS_DB_URI;

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("database connected");
        app.listen(port, () => {
            console.log(`server listening on port ${port}`);
        })
        // Make the appropriate DB calls
        const databasesList = await (await client.db().admin().listDatabases()).databases;
        console.log(databasesList);
        return client;
 
    } catch (e) {
        console.error(e);
    }
}

const client = main().catch(console.error);




