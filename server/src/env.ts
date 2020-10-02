import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd(), process.env.NODE_ENV === 'development' ? '.env.local' : '.env'),
});
