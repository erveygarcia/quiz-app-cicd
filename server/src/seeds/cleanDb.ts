import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];

    if (!model || !model.db || !model.db.db) {
      throw new Error(`Missing db connection in model "${modelName}"`);
    }

    const collections = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (collections.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
