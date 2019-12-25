module.exports = (sequelize, DataTypes) => {
    const banks = sequelize.define('banks', {
          name: {
            type: DataTypes.STRING,
            allowNull: false            
          },        
          id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          }
    }, {
      timestamps: false,
      id: false
  });
    return banks;
  };
  