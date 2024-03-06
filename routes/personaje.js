var express = require('express');
var router = express.Router();
const Personaje = require('../models/personaje')
/* GET home page. */

router.get('/listado', async function (req, res, next) {
  try {
    const personajes = await Personaje.find();
    res.render('listado', { personajes });
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});

router.get('/mosaico', async function (req, res, next) {
  try {
    const personajes = await Personaje.find();
    personajes.forEach(personaje => {
      switch (personaje.gender) {
        case "Male":
          personaje.gender = "Masculino";
          break;
        case "Female":
          personaje.gender = "Femenino";
          break;
        case "unknown":
          personaje.gender = "Bicho Raro";
          break;
      }
    });
    res.render("mosaico", { personajes })
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});

/*Como hacer que traduca todos y no solo uno*/
router.get('/guardar', async function (req, res, next) {
  try {
    const personajes = await Personaje.find();
    res.render('guardar', { personajes });
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});

router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) {
      res.redirect("/todos")
  }

  try {
      let personaje = await Personaje.find({ id: id });
      personaje.length === 0 ? res.redirect("/todos") : false;
      personaje = personaje[0];
      switch (personaje.gender) {
          case "Male":
              personaje.gender = "Masculino";
              break;
          case "Female":
              personaje.gender = "Femenino";
              break;
          case "unknown":
              personaje.gender = "Desconocido";
              break;
      }
      res.render("personaje", { personaje });
  } catch {
      res.end();
  }
});

module.exports = router;
