# Portfolio Contact Form (Full Stack)

This repository contains the full source code for Shiwanshu Chourasia's portfolio website, including a functional backend for the contact form.

## Project Structure
- `index.html`: Fully responsive frontend structure.
- `style.css`: Modern styling with glassmorphism and animations.
- `script.js`: Interactive frontend logic and AJAX form submission.
- `server.js`: Node.js/Express backend that sends emails using Nodemailer.
- `.env`: Configuration for email credentials.

## Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (Version 14 or higher)
- A Gmail account (to send emails)

### 2. Backend Configuration
The backend uses **Nodemailer** to send emails. For security, you should use a Gmail **App Password** instead of your regular password.

1. Go to your [Google Account Settings](https://myaccount.google.com/).
2. Enable **2-Step Verification**.
3. Search for **"App Passwords"** in the search bar.
4. Select "Mail" and "Other (Custom Name: Portfolio)" and generate the password.
5. Open the `.env` file in this project and paste the generated 16-character code into `EMAIL_PASS`.

### 3. Local Installation
1. Open your terminal in the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

### 4. Running the Frontend
Simply open `index.html` in your browser. The contact form is configured to send data to `http://localhost:5000`.

## Security Features
- **Environment Variables**: Sensitive credentials (email/password) are stored in `.env` and never exposed to the client.
- **CORS Support**: Configured to safely allow communication between frontend and backend.
- **Input Validation**: Backend checks for required fields before attempting to send.

## Deployment Tips
- **Backend**: You can deploy the `server.js` and `package.json` to platforms like **Heroku**, **Render**, or **DigitalOcean**.
- **Frontend**: Platforms like **Netlify** or **Vercel** are ideal for the static files.
- Remember to update the `form action` URL in `index.html` to your deployed backend URL once you go live.
