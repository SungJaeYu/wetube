import passport from "passport";
import GithubStrategy from "passport-github";
import { facebookLoginCallback, githubLoginCallback } from "./controllers/userController";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStartegy());

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`,
    profileFields: ["id", "displayName", "photos","email"],
    scope: ["public_profile", "email"]
    },
    githubLoginCallback)
);

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: `http://localhost:4000${routes.facebookCallback}`
    },
    facebookLoginCallback)
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());