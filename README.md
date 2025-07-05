# Hotel Miranda Dashboard 🏨

A modern and responsive hotel management dashboard built with React, TypeScript, and Redux Toolkit. This application provides a comprehensive interface for managing hotel operations including bookings, rooms, users, and customer contacts.

## 📸 Screenshots

![Hotel Miranda Dashboard - Room Management](https://github.com/user-attachments/assets/your-screenshot-id)
*Room Management Interface - View and manage all hotel rooms with detailed information*

## 🚀 Features

- **Dashboard Overview**: Real-time statistics and metrics for hotel operations
- **Room Management**: Complete CRUD operations for hotel rooms with amenities selection
- **Booking System**: Manage reservations and booking details
- **User Management**: Handle staff and customer user accounts
- **Contact Management**: Track and respond to customer inquiries
- **Authentication**: Secure login system with protected routes
- **Responsive Design**: Modern UI built with Material-UI and styled-components
- **State Management**: Centralized state management using Redux Toolkit
- **Testing**: Comprehensive testing suite with Cypress E2E tests

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM v6
- **UI Framework**: Material-UI (MUI)
- **Styling**: Styled-components + Emotion
- **Animations**: Animate.css
- **Drag & Drop**: React DND
- **Testing**: Jest, React Testing Library, Cypress
- **Build Tool**: Create React App with Webpack
- **Development**: TypeScript, ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FedericoIglesias/dashboard-hotel-miranda.git
   cd dashboard-hotel-miranda
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your configuration:
   ```env
   REACT_APP_API_URL=your_api_url_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`.

## 📋 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Deploys the application to GitHub Pages

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── booking/        # Booking management components
│   ├── contact/        # Contact management components
│   ├── dashboard/      # Dashboard overview components
│   ├── room/           # Room management components
│   ├── root/           # Root layout components
│   └── user/           # User management components
├── context/            # React Context providers
├── features/           # Redux slices (RTK)
├── pages/              # Page components
├── reducer/            # Redux reducers
├── store/              # Redux store configuration
├── assets/             # Static assets (images, icons)
└── types.d.ts          # TypeScript type definitions
```

## 🎯 Core Functionality

### Dashboard
- Real-time hotel statistics
- Key performance indicators
- Quick overview of bookings and occupancy

### Room Management
- Add, edit, and delete rooms
- Manage room amenities and features
- Room availability tracking
- Photo gallery management

### Booking System
- Create and manage reservations
- Booking calendar view
- Guest information management
- Payment and status tracking

### User Management
- Staff account management
- Customer profile management
- Role-based access control
- User authentication

### Contact Management
- Customer inquiry tracking
- Response management
- Contact information database

## 🔐 Authentication

The application includes a secure authentication system with:
- Login/logout functionality
- Protected routes for authenticated users
- Context-based user state management
- Persistent login sessions

## 🧪 Testing

### Unit & Integration Tests
```bash
npm test
```

### End-to-End Tests
```bash
npx cypress open
```

The project includes comprehensive testing with:
- Jest and React Testing Library for unit tests
- Cypress for E2E testing
- Component testing utilities

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive interface
- **Responsive Layout**: Works seamlessly on desktop and mobile
- **Material Design**: Consistent UI components with Material-UI
- **Smooth Animations**: Enhanced user experience with Animate.css
- **Drag & Drop**: Interactive components for better usability

## 📊 Data Management

The application uses JSON files for development data:
- `public/json/bookings.json` - Sample booking data
- `public/json/contacts.json` - Sample contact data
- `public/json/rooms.json` - Sample room data
- `public/json/users.json` - Sample user data

## 🌐 Deployment

The project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 📞 Support

For support and questions, please contact the development team.

---

**Built with ❤️ for efficient hotel management**