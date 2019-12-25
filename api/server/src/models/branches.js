module.exports = (sequelize, DataTypes) => {
    const branches = sequelize.define('branches', {
          ifsc: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
          },        
          bankId: {
            field: 'bank_id',
            allowNull: false,
            type: DataTypes.BIGINT
          },          
          branch: {
            type: DataTypes.STRING,
            allowNull: false,
          },  
          address: {
            type: DataTypes.STRING,
            allowNull: false
          },     
          city: {            
            allowNull: false,
            type: DataTypes.STRING
          },
          district: {            
            allowNull: false,
            type: DataTypes.STRING
          },
          state: {
            type: DataTypes.STRING,
            allowNull: false,
          }

    }, {
      timestamps: false,      
  });
    return branches;
  };
  