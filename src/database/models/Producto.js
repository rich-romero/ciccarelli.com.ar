module.exports = (sequelize, dataTypes) => {
    const alias = "Producto";
    const cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        nombre: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },  

        marca: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },  
        modelo: {
            type: dataTypes.STRING(70),
            allowNull: false,
        },
        motor: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },
        cilindradas: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },
        piezas: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING(60),
            allowNull: true
        }
    }

    const config = {
        tableName: 'productos',
        timestamps: true
    }

    const Producto = sequelize.define(alias, cols, config)

    return Producto
} 