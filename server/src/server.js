import app from './app.js';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Function to create admin user if it doesn't exist
async function createAdminUser() {
  try {
    const adminExists = await prisma.user.findUnique({
      where: { email: 'admin@srms.com' }
    });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await prisma.user.create({
        data: {
          email: 'admin@srms.com',
          password: hashedPassword,
          firstName: 'System',
          lastName: 'Administrator',
          role: 'ADMIN',
          isActive: true
        }
      });
      console.log('✅ Admin user created automatically!');
    } else {import app from './app.js';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Function to run migrations
async function runMigrations() {
  try {
    console.log('🔄 Running database migrations...');
    const { stdout, stderr } = await execPromise('npx prisma migrate deploy');
    if (stderr) console.error('Migration stderr:', stderr);
    console.log('Migration stdout:', stdout);
    console.log('✅ Migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    // Don't crash the server, just log the error
  }
}

// Function to create admin user if it doesn't exist
async function createAdminUser() {
  try {
    console.log('🔍 Checking for admin user...');
    
    const adminExists = await prisma.user.findUnique({
      where: { email: 'admin@srms.com' }
    });

    if (!adminExists) {
      console.log('👤 Admin not found, creating...');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await prisma.user.create({
        data: {
          email: 'admin@srms.com',
          password: hashedPassword,
          firstName: 'System',
          lastName: 'Administrator',
          role: 'ADMIN',
          isActive: true
        }
      });
      console.log('✅ Admin user created automatically!');
    } else {
      console.log('✅ Admin user already exists');
    }
  } catch (error) {
    console.error('❌ Error creating admin:', error);
  }
}

// Start server and run migrations + create admin
app.listen(PORT, async () => {
  console.log(`🚀 SRMS Server running on port ${PORT}`);
  console.log(`📚 API available at http://localhost:${PORT}/api`);
  console.log(`🔑 Auth endpoints at http://localhost:${PORT}/api/auth`);
  
  // Run migrations first
  await runMigrations();
  
  // Then create admin user
  await createAdminUser();
});