import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'

import cors from 'cors'

import movieRouter from './routers/movie'
import userRouter from './routers/users'
import logInRouter from './routers/login'
import productRouter from './routers/product'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import compression from 'compression'
import passport from 'passport'
import { googleStrategy, jwtStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

app.use(cors())

// Express configuration
app.set('port', process.env.PORT || 5000)
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

// use google  and jwt Strategy
passport.use(googleStrategy)
passport.use(jwtStrategy)

// Use movie router
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/login', logInRouter)
app.use('/api/v1/products', productRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
