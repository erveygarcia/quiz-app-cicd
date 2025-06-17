import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        if (!model?.db?.db) {
            throw new Error(`Model ${modelName} does not have a valid db connection`);
        }
        const collections = await model.db.db.listCollections({
            name: collectionName
        }).toArray();
        if (collections.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
