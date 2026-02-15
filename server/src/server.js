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
    } else {
      console.log('✅ Admin user already exists');
    }
  } catch (error) {
    console.error('❌ Error creating admin:', error);
  }
}

// Start server and create admin
app.listen(PORT, async () => {
  console.log(`🚀 SRMS Server running on port ${PORT}`);
  console.log(`📚 API available at http://localhost:${PORT}/api`);
  console.log(`🔑 Auth endpoints at http://localhost:${PORT}/api/auth`);
  
  // Create admin user on startup
  await createAdminUser();
});