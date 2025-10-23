# Doubtly

A community-driven doubt-solving platform built with the **MERN stack** (MongoDB, Express, React, Node.js).  
- **Frontend**: `client/`  
- **Backend**: `server/`  

The platform allows students to post doubts, educators to answer them, and a points/leaderboard system to reward active participation.

---

## 📂 Contents

- **Client**: [client/src/App.jsx](client/src/App.jsx), [client/src/main.jsx](client/src/main.jsx)  
- **Server**: [server/index.js](server/index.js)

---

## 🚀 Quickstart

### 1. Clone Repository

```bash
git clone https://github.com/sarthakagarwal2060/doubtly.git
cd doubtly
2. Run Backend Server
bash
Copy code
cd server
npm install
npm run dev
3. Run Frontend Client
bash
Copy code
cd client
npm install
npm run dev
The React app should now run at http://localhost:5173 (or http://localhost:3000), and the backend API runs on http://localhost:5000 (or the port defined in .env).

⚙️ Environment Variables
Create a .env file in the server/ folder with at least the following variables:

env
Copy code
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
ALGOLIA_APPLICATION_ID=<algolia-app-id>
ALGOLIA_API_KEY=<algolia-api-key>
GMAIL=<your-gmail-address>
PASS=<gmail-app-password>
These are used by server/index.js, server/utils/index.js, and server/utils/emailService.js.

🏗️ Backend Overview
Routes
Auth: server/routes/auth.js

POST /api/auth/signup

POST /api/auth/signin

Doubt: server/routes/doubt.js

POST /api/doubt/add

PUT /api/doubt/modify/:doubtId

DELETE /api/doubt/delete/:doubtId

GET /api/doubt/showAll

GET /api/doubt/show/:techStack

Solution: server/routes/solution.js

POST /api/solution/add/:questionId

GET /api/solution/show/:questionId

DELETE /api/solution/delete/:solutionId

Notification: server/routes/notification.js

GET /api/notification

Models
DoubtDB

SolutionDB

UserDB

SolutionsUpVotesDB

NotificationDB

Utilities
formattedSolutions

updateDoubtStatus

Email Service: server/utils/emailService.js

Algolia integration: configured in server/utils/index.js and used in routes

🖥️ Frontend Overview
Entry Points
client/src/main.jsx

client/src/App.jsx

Pages & Components
Dashboard: client/src/pages/Dashboard.jsx

Post Doubt: client/src/pages/PostDoubt.jsx

Solution Page: client/src/pages/SolutionPage.jsx

NavBar: client/src/components/NavBar.jsx

Post Button: client/src/components/PostButton.jsx

Solution Modal: client/src/components/dashboard/SolutionModal.jsx

Hooks
client/src/hooks/fetchUserDetails.js

Styling
Tailwind CSS + Radix UI components

Entry: client/src/styles/App.css

🌐 Deployment
Frontend: "https://doubtly-frontend-flame.vercel.app/"
Backend: Can be deployed on Render / Heroku / Vercel serverless functions

Production Build:

bash
Copy code
cd client
npm run build
Deploy client/build/ folder to your hosting provider.

📝 Useful Notes
Time-based edit/delete windows are enforced server-side (5 minutes) — see server/routes/doubt.js & server/routes/solution.js.

Points/leaderboard logic references user stats in server/routes/userDetails.js.

Frontend interacts with backend via API endpoints listed above.

🛠️ Scripts
Client (client/)
Command	Description
npm run dev	Run development server
npm run build	Build production files

Server (server/)
Command	Description
npm run dev	Run server with nodemon
npm start	Run server without nodemon

🤝 Contributing
Fork the repo

Create a feature branch

Make changes & commit

Push to your branch

Open a Pull Request
