// EmailJS Configuration
// Get these values from your EmailJS account: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (found in Account > API Keys)
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Your EmailJS Service ID (found in Email Services)
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // Your EmailJS Template ID (found in Email Templates)
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  
  // Recipient email (your email where form submissions will be sent)
  TO_EMAIL: 'arslanmukhtar.dev@gmail.com'
};

