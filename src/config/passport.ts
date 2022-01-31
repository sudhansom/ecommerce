import passport from 'passport'
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy } from 'passport-jwt'
import { Request, Response, NextFunction } from 'express'

const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  (parsedToken: any, googleId: any, done: any) => {
    done(null, parsedToken)
  }
)
