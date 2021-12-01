module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("usuario", {
        nombre: {
            type: Sequelize.STRING
        },

        paterno: {
            type: Sequelize.STRING
        },

        materno: {
            type: Sequelize.STRING
        },

        fecha: {
            type: Sequelize.DATEONLY
        },

        correo: {
            type: Sequelize.STRING
        },

        password: {
            type: Sequelize.STRING
        },

        genero: {
            type: Sequelize.STRING
        },

        pais: {
            type: Sequelize.STRING
        },

        estatus: {
            type: Sequelize.BOOLEAN
        },

        sesion: {
            type: Sequelize.BOOLEAN
        }

    });

    return User;
};