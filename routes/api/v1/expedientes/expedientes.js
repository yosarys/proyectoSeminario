const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        endpoint: 'expedientes',
        updates: new Date(2022, 0, 19, 18, 41, 00)
    });
}); //GET /

router.post('/new', async(req, res) => {
    const { identidad, fecha, descripcion, observacion, registros } = req.body;

    res.status(200).json({
        status: 'ok',
        recieved: {
            identidad,
            fecha,
            descripcion,
            observacion,
            registros,
            UltimaActualizacion: `${fecha}${'12:10:00'}`,
        }
    });
});
module.exports = router;