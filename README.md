# Food Delivery Fullstack Project

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Setup & Installation](#setup--installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Admin Panel Setup](#admin-panel-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Tech Stack](#tech-stack)
- [Credits](#credits)

---

## Project Overview
This is a fullstack food delivery application with a React + Vite frontend, a React + Vite admin panel, and a Node.js/Express/MongoDB backend. It supports user authentication, food menu management, cart, order placement (with Stripe and COD), and admin order management.

## Features
- User registration & login
- Browse food menu by category
- Add/remove items to cart
- Place orders (Stripe payment or Cash on Delivery)
- View order history
- Admin panel for managing food items and orders
- Responsive UI

## Project Structure
```
food-del/
├── backend/      # Node.js/Express API & MongoDB
├── frontend/     # User-facing React app
├── admin/        # Admin dashboard React app
```

## Screenshots
Add screenshots of the UI here (e.g. frontend/public/header_img.png, etc.)

![Frontend Home](frontend/public/header_img.png)

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) (v16+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (for cloud DB)

### Backend Setup
1. Open the `backend` folder in VS Code.
2. Open the integrated terminal.
3. Run:
   ```bash
   npm install
   ```
4. Setup MongoDB:
   - Create a MongoDB Atlas account and cluster.
   - Create a database user (avoid `@` in password).
   - Whitelist IP `0.0.0.0/0`.
   - Get your connection string and update `config/db.js`.
5. Create a `.env` file in `backend/`:
   ```env
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
6. Start the backend server:
   ```bash
   npm run server
   ```
   The server runs on [http://localhost:4000](http://localhost:4000)

### Frontend Setup
1. Open the `frontend` folder in VS Code.
2. Open the integrated terminal.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
   The app runs on [http://localhost:5173](http://localhost:5173)

### Admin Panel Setup
1. Open the `admin` folder in VS Code.
2. Open the integrated terminal.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
   The admin panel runs on [http://localhost:5174](http://localhost:5174)

## Environment Variables
Example for `backend/.env`:
```
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## API Endpoints
- `/api/user/register` - Register user
- `/api/user/login` - Login user
- `/api/food/list` - List all food
- `/api/food/add` - Add food (admin)
- `/api/food/remove` - Remove food (admin)
- `/api/cart/get` - Get user cart
- `/api/cart/add` - Add to cart
- `/api/cart/remove` - Remove from cart
- `/api/order/place` - Place order (Stripe)
- `/api/order/placecod` - Place order (COD)
- `/api/order/userorders` - Get user orders
- `/api/order/list` - List all orders (admin)
- `/api/order/status` - Update order status (admin)
- `/api/order/verify` - Verify payment

## Tech Stack
- **Frontend:** React, Vite, Axios, React Router, React Toastify
- **Admin:** React, Vite, Axios, React Number Format
- **Backend:** Node.js, Express, MongoDB, Mongoose, Stripe, JWT, Bcrypt

## Credits
- [GreatStackDev YouTube](https://www.youtube.com/@GreatStackDev/videos) for video tutorials

---

For more details, see the [How To Run Project.pdf](How%20To%20Run%20Project.pdf) or the extracted [how_to_run_project.txt](how_to_run_project.txt).
