module.exports = (sequelize, dataTypes) => {
    let alias = "NoticiaImage";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        noticiaId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    }
    let config = {
        tableName: "noticias_images",
        timestamps: false
    }

    const NoticiaImage = sequelize.define(alias, cols, config)

    NoticiaImage.associate = models => {
        NoticiaImage.belongsTo(models.Noticia, {
            as: "noticia",
            foreignKey:"noticiaId"
        })
    }

    return NoticiaImage;
}