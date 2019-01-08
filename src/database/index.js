import Sequelize from 'sequelize'
import path from 'path'

import poetModel from './models/Poet'
import catModel from './models/Cat'
import poemModel from './models/Poem'
import verseModel from './models/Verse'

const databaseAddress = path.join(__static, 'ganjoor.s3db')

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
