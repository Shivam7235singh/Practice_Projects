import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import User from './models/user.js'; // ✅ Your user model

dotenv.config();

// ✅ Register Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true, // Optional
    },
    async function (req, accessToken, refreshToken, profile, done) {
      try {
        // 🔍 Check for existing user
        let existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser); // ✅ Return existing user
        }

        // 🆕 If user doesn't exist, create one
        const newUser = new User({
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value,
        });

        await newUser.save(); // ✅ Save new user
        return done(null, newUser);
      } catch (error) {
        return done(error, null); // ❗ Error goes in first param
      }
    }
  )
);

// ✅ Serialize user (store user ID in session)
passport.serializeUser(function (user, done) {
  done(null, user.id); 
})

passport.deserializeUser(function(user, done){
  done(null , user)
})