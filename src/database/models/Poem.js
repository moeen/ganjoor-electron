import Sequelize from 'sequelize'

const poemModel = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  cat_id: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING(255)
  },
  url: {
    type: Sequelize.STRING(255)
  }
}

export default poemModel
