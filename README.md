# SpendSense 💸 Personal Finance Tracker

## 🌟 Overview

SpendSense is a powerful, intuitive personal finance tracking application designed to help you understand and manage your financial journey. Track your expenses, visualize your spending patterns, and make smarter financial decisions.

## 🚀 Features

- 🔐 Secure User Authentication
- 💰 Transaction Management
- Add, edit, and delete transactions
- Categorize transactions (Saving, Expense, Investment)
- 📊 Dynamic Financial Insights
- Real-time spending category visualization
- Comprehensive transaction history
- 📱 Responsive Design
- 🌈 Modern, Clean User Interface

## 🛠 Tech Stack

### Frontend
- React
- Vite
- TailwindCSS
- Apollo Client
- Chart.js

### Backend
- Node.js
- Express
- GraphQL
- MongoDB
- Passport.js

## 🔧 Prerequisites

- Node.js (v18+)
- npm
- MongoDB

## 🏁 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/haridevkambam/SpendSense.git
cd SpendSense
```

### 2. Install Dependencies
<!-- Install backend dependencies -->
```bash
npm install
```
<!-- Install frontend dependencies -->
```bash
cd frontend
npm install
```

### 3. Set Up Environment Variables
<!-- Set up backend environment variables -->
Backend .env file
```bash
MONGO_URI=your-mongodb-uri
SESSION_SECRET=your-session-secret
```
Frontend .env file
```bash
VITE_NODE_ENV=development
```

### 4. Start the Application
<!-- Start backend server -->
```bash
npm run dev
```
<!-- Start frontend server -->
```bash
cd frontend
npm run dev
```