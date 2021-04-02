import * as mongoose from 'mongoose';

export const ConnectorSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    privacy: String,
    baseUrl: String,
    logoUrl: String,
    category: String,
    description: String,
    status: Boolean,
  },
  { versionKey: false },
);
