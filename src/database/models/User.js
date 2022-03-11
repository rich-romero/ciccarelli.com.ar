module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(60),
            allowNull: false,
            unique: true
        }, 
        pass: {
            type: dataTypes.STRING(70),
            allowNull: false,
        },  
        rol: {
            type: dataTypes.INTEGER(2).UNSIGNED,
            allowNull: false
        }
    }

    const config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    return User
} 