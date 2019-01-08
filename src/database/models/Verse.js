import Sequelize from 'sequelize'

const verseModel = {
  poem_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  vorder: {
    type: Sequelize.INTEGER
  },
  position: {
    type: Sequelize.INTEGER
  },
  text: {
    type: Sequelize.TEXT
  }
}

export default verseModel
