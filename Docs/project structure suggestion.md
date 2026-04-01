# PROJECT STRUCTURE

Project Structure suggested by Claude 

```bash
stitches-by-mona/
├── public/
├── src/
│   ├── assets/              ← images, fonts, icons
│   ├── components/          ← reusable UI pieces
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ChatBox.jsx
│   ├── pages/               ← one file per page/route
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   └── CustomOrder.jsx
│   ├── auth/                ← all authentication logic
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ForgotPassword.jsx
│   ├── admin/               ← admin-only pages
│   │   ├── Dashboard.jsx
│   │   ├── ManageProducts.jsx
│   │   └── ManageOrders.jsx
│   ├── context/             ← global state (auth, cart)
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── hooks/               ← custom React hooks
│   │   └── useAuth.js
│   ├── routes/              ← route protection logic
│   │   ├── AppRoutes.jsx    ← all routes defined here
│   │   ├── PrivateRoute.jsx ← blocks unauthenticated users
│   │   └── AdminRoute.jsx   ← blocks non-admin users
│   ├── services/            ← API calls (auth, products etc.)
│   │   ├── authService.js
│   │   └── productService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                     ← API keys (never commit this)
├── index.html
└── package.json

```