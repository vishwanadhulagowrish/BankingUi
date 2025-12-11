| Technology                 | Purpose                 |
| -------------------------- | ----------------------- |
| React.js                   | Component-based UI      |
| Tailwind CSS               | Styling & Theme System  |
| Framer Motion              | Animations              |
| Chart.js + react-chartjs-2 | Asset Charts            |
| React Modal                | Transaction Modals      |
| React Icons                | Sidebar Icons           |
| Vite                       | Dev Server & Build Tool |

1. Install all dependencies
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npm install react-icons
    npm install framer-motion
    npm install chart.js react-chartjs-2
    npm install react-modal
2.Run the project
  npm run dev

3.Project_structure
src/
├── components/
│   ├── Sidebar.jsx
│   ├── AccountCard.jsx
│   ├── TransactionButtons.jsx
│   ├── TransactionLog.jsx
│   ├── FraudAlertPanel.jsx
│   ├── AssetChart.jsx
│
└── pages/
    ├── LoginPage.jsx
    ├── DashboardPage.jsx
│
App.jsx
index.jsx
