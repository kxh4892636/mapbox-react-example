/*
 * @file: server index.ts
 * @Author: xiaohan kong
 * @Date: 2023-02-24
 * @LastEditors: xiaohan kong
 * @LastEditTime: 2023-02-24
 *
 * Copyright (c) 2023 by xiaohan kong, All Rights Reserved.
 */
import cors from 'cors'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'

const app = express()
const port = 4321

// cors
app.use(cors())
// helmet
app.use(helmet())
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }))
// parse application/json
app.use(json())
// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('4321')
})
