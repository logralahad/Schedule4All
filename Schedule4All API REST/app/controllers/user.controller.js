const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo usuario
exports.create = (req, res) => {
    // Validar request
    if(!req.body.nombre && !req.body.paterno && !req.body.materno && !req.body.correo && !req.body.password){
        res.status(400).send({
            message: "El contenido no puede ser vacio, nombre = " + req.body.nombre + " , " + 
            "apellido paterno = " + req.body.paterno + ", apellido materno = " + req.body.materno
            + ", correo = " + req.body.correo
        });
        return;
    }

    // Crear un usuario
    const user = {
        nombre: req.body.nombre,
        paterno: req.body.paterno,
        materno: req.body.materno,
        fecha: req.body.fecha,
        correo: req.body.correo,
        password: req.body.password,
        genero: req.body.genero,
        pais: req.body.pais,
        estatus: req.body.estatus,
        sesion: req.body.sesion
    };

    // Guardar Usuario en la base de datos
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Ocurrio un error al registrar el usuario."
            });
        });

};

// Recuperar todos los Usuarios de la base de datos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al recuperar todos los usuarios."
        });
      });
};

// Encontrar Usuario por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar usuario con id = " + id
            });
        });
};

// Actualizar Usuario por id
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Usuario se actualizo con exito."
                });
            } else{
                res.send({
                    message: `No se encontro al usuario con id = ${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar usuario con id = " + id
            });
        });
};

// Eliminar un Usuario por id
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Usuario eliminado con exito!"
                });
                //db.sequelize.query("ALTER SEQUENCE \"users_id_seq\" RESTART; UPDATE public.\"users\" SET id = DEFAULT;");
            } else{
                res.send({
                    message: `No se encontro el usuario con id = ${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar Usuario con id = " + id
            });
        });
};

// Eliminar todos los Usuarios de la base de datos
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Usuarios fueron eliminados con exito!` })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || ""
            });
        });
};

// Encontrar todos los Usuarios por correo
exports.findByEmails= (req, res) => {
    const correo = req.params.correo;
    var condition = correo ? { correo: { [Op.eq]: correo } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar usuarios por correo."
            });
        });
};