import { Injectable } from '@nestjs/common';
import { runMigration } from './migration.handler';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async runMigrations(): Promise<void> {
    await runMigration();
    console.log('Migrations completed successfully!');
  }
}
