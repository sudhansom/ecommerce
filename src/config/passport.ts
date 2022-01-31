import passport from 'passport'
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy } from 'passport-jwt'
import { Request, Response, NextFunction } from 'express'

//const LocalStrategy = passportLocal.Strategy

const googleStrategy = new GoogleTokenStrategy({
  clientId: process.env.GOOGLE_CLIENT_ID,
})
