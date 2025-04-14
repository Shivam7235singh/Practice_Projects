import express from 'express';
import passport from 'passport';
import './auth.js';
import session from 'express-session';



function isLoggedIn(req, res, next){
    req.user? next() : res.sendStatus(401);
}

const app = express();
app.use(session({secret : process.env.SESSION_SECRET, resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());    

app.get('/', (req,res) =>{
    res.send('<a href = "/auth/google">Authenticate With Google</a>');
})

app.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get('/auth/google/callback' ,
    passport.authenticate('google',{
        successRedirect : 'process.env.CLIENT_URI/dashboard',
        failureRedirect: 'process.env.CLIENT_URI/login'
    })
)


app.get('/protected', isLoggedIn,  (req, res)=>{
    res.send(`Hello ${req.user.displayName}, <a href = "/logout">Logout</a>`);
})

app.get('/auth/failure', (req, res)=>{
    res.send('Authentication failed')
})

app.get('/auth/logout', (req, res)=>{
    req.logout(() =>{
        res.redirect('/');
    });
    req.session.destroy(err => {
        if(err) return next(err);
        res.redirect('/');
    });
    res.send('Goodbye!')
})

app.listen(5000 , () =>{ console.log('Server is running on port 5000')});
