import Sequelize from 'sequelize'

const catModel = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  poet_id: {
    type: Sequelize.INTEGER
  },
  text: {
    allowNull: false,
    type: Sequelize.STRING(100)
  },
  parent_id: {
    type: Sequelize.INTEGER
  },
  url: {
    type: Sequelize.STRING(255)
  }
}

export default catModel
