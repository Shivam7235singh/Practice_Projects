import express from 'express';
import passport from 'passport';
import './passport.js';
import session from 'express-session';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URI, // e.g., http://localhost:3000
    credentials: true,
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate With Google</a>');
});

// app.get('/auth/google', isLoggedIn, (req, res) => {
//     res.send(req.user);
// });

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: `${process.env.CLIENT_URI}/dashboard`,
        failureRedirect: `${process.env.CLIENT_URI}/login`
    })
);

app.get('/auth/failure', (req, res) => {
    res.send('Authentication failed');
});

app.get('/auth/logout', (req, res) => {
    req.logout(() => {
        req.session.destroy(err => {
            if (err) return res.status(500).send('Logout error');
            res.redirect('/');
        });
    });
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
