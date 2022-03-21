module.exports = (sequelize, dataTypes) => {
    const alias = "Noticia";
    const cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        titulo: {
            type: dataTypes.STRING(70),
            allowNull: false,
        }, 
        subtitulo: {
            type: dataTypes.STRING(70),
            allowNull: false,
        },  
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },

        fecha: {
            type: dataTypes.DATE
        },
        imagen: {
            type: dataTypes.STRING(60),
            allowNull: true
        }
        
    }

    const config = {
        tableName: 'noticias',
        timestamps: false

    }

    const Noticia = sequelize.define(alias, cols, config)

    Noticia.associate = models => {
        Noticia.hasMany(models.NoticiaImage, {
            as: "noticiaImages",
            foreignkey: "noticiaId"
        })
    }

    return Noticia
} 