import { exec } from 'child_process';

export const runMigration = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    exec('npx sequelize-cli db:migrate', (error, stdout, stderr) => {
      if (error) {
        console.error('Migration error:', stderr);
        reject(error);
        return;
      }
      console.log('Migration successful:', stdout);
      resolve();
    });
  });
};

export const handler = async (): Promise<void> => {
  try {
    console.log('Starting migrations...');
    await runMigration();
    console.log('Migrations completed successfully!');
  } catch (error) {
    console.error('Migrations failed:', error);
    throw error;
  }
};
