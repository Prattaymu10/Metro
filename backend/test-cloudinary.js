require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log('=== ENVIRONMENT CHECK ===');
console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY);
console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? 'EXISTS' : 'MISSING');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Test the connection
async function testCloudinary() {
  try {
    console.log('\n=== TESTING CONNECTION ===');
    const result = await cloudinary.api.ping();
    console.log('✅ SUCCESS! Cloudinary is working:', result);
  } catch (error) {
    console.error('❌ FAILED! Error:', error.message);
    console.error('Full error:', error);
  }
}

testCloudinary();