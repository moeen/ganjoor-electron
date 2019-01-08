import Sequelize from 'sequelize'

const poetModel = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(20)
  },
  cat_id: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  }
}

export default poetModel
