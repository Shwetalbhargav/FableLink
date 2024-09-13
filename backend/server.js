// /backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection setup
const { notFound, errorHandler } = require('./middleware/errorMiddleware'); // Custom error handlers

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Body parser for JSON data
app.use(cors()); // Allow cross-origin requests

// Import Routes
const userRoutes = require('./routes/userRoutes');
const agentRoutes = require('./routes/agentRoutes');
const connectionRoutes = require('./routes/connectionRoutes');
const messageRoutes = require('./routes/messageRoutes'); // Optional
const testRoutes = require('./routes/testRoutes');

// Use Routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/agents', agentRoutes); // AI Agent routes
app.use('/api/connections', connectionRoutes); // User connection routes
app.use('/api/messages', messageRoutes); // Optional: Messaging routes
app.use('/api/test', testRoutes); 

// Error Handling Middleware
app.use(notFound); // Handle 404 errors
app.use(errorHandler); // Custom error handling

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

