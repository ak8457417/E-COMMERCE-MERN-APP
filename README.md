🛒 MERN Stack eCommerce Website
This is a full-stack eCommerce web application built using the MERN stack – MongoDB, Express.js, React.js, and Node.js. Users can explore products, filter and sort listings, select product variants (like size), add items to cart, and place orders using Cash on Delivery (COD) or Online Payment (via Stripe or Razorpay). An admin dashboard allows easy management of products and orders.

🌐 Live Demo
🔗 https://e-commerce-mern-app-frontend-one.vercel.app/

🚀 Features
👨‍👩‍👧‍👦 User Features
🛍️ Browse products by category

🔍 Filter and sort products

📦 Select product variants (e.g., size, color)

🛒 Add items to Cart

📬 Place order with Delivery Address

💳 Pay using:

Cash on Delivery (COD)

Online Payment via Stripe or Razorpay

📜 View order summary after purchase

🛠️ Admin Features
➕ Add new products

❌ Delete products

📋 View all products and orders

📊 Admin dashboard with controls

🔧 Tech Stack
🔹 Frontend
React.js

TailwindCSS / CSS Modules

Axios

🔹 Backend
Node.js

Express.js

MongoDB (Mongoose)

Stripe & Razorpay Payment Gateways

🔹 Deployment
Frontend deployed on Vercel

Backend deployed on Render / Railway / Cyclic / Vercel functions

📁 Folder Structure
bash
Copy
Edit
ecommerce/
├── client/           # React frontend
├── server/           # Express + MongoDB backend
├── .env              # Environment variables
├── README.md
⚙️ Getting Started
1. Clone the Repository
   bash
   Copy
   Edit
   git clone https://github.com/your-username/ecommerce.git
   cd ecommerce
2. Environment Variables
   Backend (server/.env)
   env
   Copy
   Edit
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   STRIPE_SECRET_KEY=your_stripe_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   Frontend (client/.env)
   env
   Copy
   Edit
   VITE_API_URL=http://localhost:5000
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
3. Install Dependencies
   Backend
   bash
   Copy
   Edit
   cd server
   npm install
   Frontend
   bash
   Copy
   Edit
   cd ../client
   npm install
4. Start the App
   Backend
   bash
   Copy
   Edit
   npm run dev
   Frontend
   bash
   Copy
   Edit
   npm run dev
   📦 Deployment
   🖥️ Frontend deployed on: Vercel

🛠️ Backend can be deployed on:

Render

Railway

Cyclic

Vercel serverless functions

📷 Screenshots (Optional)
Include screenshots for:

🏠 Home Page

🔍 Product Filtering

🛒 Cart Page

🧾 Order Confirmation

🧑‍💼 Admin Dashboard

✅ Future Improvements
Add user profile and order history

Add product ratings & reviews

Inventory and stock management

Email notifications for orders

Admin login and role-based access

🙋‍♂️ Developed By
Abhishek Sunil Kadu

MERN Stack Developer | E-commerce Solutions
📧 abhisheksunilkadu@gmail.com
🔗 LinkedIn | GitHub

