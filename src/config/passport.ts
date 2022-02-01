import passport from 'passport'
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import { Request, Response, NextFunction } from 'express'
import { JWT_SECRET } from '../util/secrets'

const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  (parsedToken: any, googleId: any, done: any) => {
    const email = parsedToken.payload.email
    const role = 'admin'
    const user = { email: email, role: role }
    done(null, user)
  }
)

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  (payload: any, done: any) => {
    done(null, payload)
  }
)
