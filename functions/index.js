const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin with the same configuration as backend
const serviceAccount = require('../backend/config/pet-api-dev-35115-firebase-adminsdk-fbsvc-834051197d.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'pet-api-dev',
  storageBucket: 'pet-api-dev-35115.firebasestorage.app'
});

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Cloud Function to handle email sending
exports.sendWelcomeEmail = functions.firestore
  .document('mail/{mailId}')
  .onCreate(async (snap, context) => {
    const mailData = snap.data();
    
    try {
      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: mailData.to,
        subject: mailData.message.subject,
        html: mailData.message.html
      });
      
      // Delete the mail document after sending
      await snap.ref.delete();
      
      console.log('Email sent successfully to:', mailData.to);
      return null;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  });

// Cloud Function to handle user status updates
exports.updateUserStatus = functions.auth.user().onCreate(async (user) => {
  try {
    // Update the user's status in Firestore
    await admin.firestore().collection('users').doc(user.uid).update({
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    console.log('User status updated for:', user.uid);
    return null;
  } catch (error) {
    console.error('Error updating user status:', error);
    throw new Error('Failed to update user status');
  }
}); 