import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import authController from "./controllers/auth-controller.js";
import userController from "./controllers/user-controller.js";
import reviewController from "./controllers/review-controller.js";
// import memeController from "./controllers/meme-controller.js";
// import commentController from "./controllers/comment-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb+srv://james:senior@cluster0.sdb26.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(CONNECTION_STRING);

const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://jungle-market.netlify.app'
];

app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    // Allow requests with no origin, like mobile apps or Postman
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(
  session({
    secret: "SECRETO",
    resave: false, // Don't save session if unmodified
    saveUninitialized: true, // Save uninitialized sessions
    cookie: { secure: false },
  })
);

app.use(express.json());
authController(app);
userController(app);
reviewController(app);

app.get("/", (request, response) => {
  response.send("Welcome to WebDev");
});

app.listen(process.env.PORT || 4000);
