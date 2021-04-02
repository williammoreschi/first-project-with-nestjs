import { Document } from 'mongoose';
export class Connector extends Document {
  name: string;
  type: string;
  privacy: string;
  baseUrl: string;
  logoUrl: string;
  category: string;
  description: string;
  status: boolean;
}
