import Sequelize from 'sequelize'
import path from 'path'
import electron from 'electron'

import poetModel from './models/Poet'
import catModel from './models/Cat'
import poemModel from './models/Poem'
import verseModel from './models/Verse'

const isRenderer = process && process.type === 'renderer'
const userData =  (isRenderer ? electron.remote : electron).app.getPath('userData')

const databaseAddress = path.join(userData, 'ganjoor.s3db')

export const connection = new Sequelize('ganjoor', null, null, {
  dialect: 'sqlite',
  storage: databaseAddress,
  define: {
    timestamps: false
  }
})

const Poet = connection.define('poet', poetModel)

const Cat = connection.define('cat', catModel)

const Poem = connection.define('poem', poemModel)

const Verse = connection.define('verse', verseModel)

export const Models = {
  Poet,
  Cat,
  Poem,
  Verse
}
