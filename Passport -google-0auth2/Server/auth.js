import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'; // ✅ Correct way to import the Strategy
import dotenv from 'dotenv';

dotenv.config();

// ✅ Register Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true, // optional
    },
    function (request, accessToken, refreshToken, profile, done) {
      // You can store the user in DB here if needed
      return done(null, profile);
    }
  )
);

// ✅ Serialize and deserialize for session management
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
