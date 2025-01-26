const errorMiddleware = (err, req, res, next) => {
    console.log('Error:', err.message);
    res.status(500).json({error: 'Ha ocurrido un error en el servidor'})
}

 module.exports = { errorMiddleware }