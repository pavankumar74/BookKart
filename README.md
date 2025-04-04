﻿# BookKart
BookKart: E-commerce Website for Selling Books
BookKart is an e-commerce platform designed for buying and selling books. Built using modern web technologies like React.js, Node.js, Express.js, and MySQL, it offers a seamless user experience with a focus on performance, security, and ease of use. This platform enables users to browse, search for, and purchase books online with ease, while providing an intuitive interface for managing product listings, inventory, and orders on the backend.

Key Features
1. User-Friendly Interface
A responsive front-end built using React.js, ensuring a smooth experience across devices (desktops, tablets, and mobile phones).
Clean, intuitive design with easy navigation for searching and filtering books by category, author, and title.
Display of book details, including author, description, price, availability, and user ratings.
2. Authentication & Authorization
Secure user authentication and session management using JSON Web Tokens (JWT).
User roles:
Customer: Browse, add books to cart, checkout, view order history.
Admin: Manage book listings, inventory, orders, and user accounts.
Password encryption using bcrypt.js to ensure security of user credentials.
3. Product Listing & Inventory Management
Admin Dashboard to add, update, or delete book listings.
Real-time inventory management, ensuring the availability of books is updated based on orders.
Product images, descriptions, pricing, and stock are easily manageable from the back-end interface.
4. Shopping Cart & Checkout
Users can add or remove books from their shopping cart.
The shopping cart persists even if the user leaves the page, utilizing local storage.
A comprehensive checkout process, with options for delivery addresses and payment method selection.
Dynamic calculation of order total, including shipping and taxes (if applicable).
5. Payment Integration
Payment Gateway Integration (e.g., Stripe, Razorpay) for seamless and secure online transactions.
Users can view their payment status and receive confirmation via email upon successful payment.
6. Order Management
Users can view their order history, including the status of each order (pending, shipped, delivered).
Admin view of all orders, including filtering by status and the ability to update order statuses.
7. Database Design
Built on MySQL, leveraging relational data modeling to efficiently manage user information, book inventory, and order data.
Optimized queries for fast retrieval of product listings and order information.
Data integrity is ensured using constraints like foreign keys, triggers, and transactions.
8. Responsive Design
Mobile-first design philosophy, ensuring the website is fully responsive and accessible on all devices.
CSS Flexbox and Grid are used extensively to ensure a consistent layout across different screen sizes.
9. Search and Filter Functionality
Full-text search functionality for users to find books by title, author, or description.
Multiple filtering options, including by category, price range, and popularity.
Tech Stack
Frontend
React.js: For building a fast and responsive user interface with reusable components.
CSS/SCSS: For custom styling and responsive design.
Axios: For making HTTP requests to the backend API.
Backend
Node.js: JavaScript runtime to handle server-side logic.
Express.js: Lightweight framework for building RESTful APIs.
JWT (JSON Web Tokens): For secure user authentication and authorization.
bcrypt.js: For hashing passwords and ensuring security.
Database
MySQL: A relational database to store user data, book listings, orders, and inventory.
Sequelize ORM: For easy database operations and migrations.
Payment Gateway (Optional)
Stripe/Razorpay: For handling secure payments and transactions.


Setup Instructions

1. Clone the Repository:
bash
Copy code
git clone https://github.com/pavankumar74/BookKart.git
2. Install Dependencies:
Navigate to both frontend and backend directories and install necessary dependencies:

bash
Copy code
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install

3. Setup MySQL Database:
Create a new database in MySQL (e.g., bookkart_db).
Run the SQL scripts found in the /backend/sql directory to set up tables and schema.
4. Configure Environment Variables:
Create a .env file in the backend directory and add your MySQL credentials, JWT secret, and payment gateway keys:
bash

Copy code
Add database info in the database.js file
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=bookkart_db

JWT_SECRET=yourjwtsecret
STRIPE_SECRET_KEY=yourstripekey

5. Run the Application:
bash
Copy code
# Backend
cd backend
npm start

# Frontend
cd frontend
cd myapp
npm start

The application should now be running on http://localhost:5000.
