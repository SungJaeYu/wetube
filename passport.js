import passport from "passport";
import User from "./models/User";

passport.use(User.createStartegy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());