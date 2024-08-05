module.exports = app => {

    app.get('/teste', (req, res) =>
      res.send('Get Teste')
    )
  
    app.post('/teste', (req, res) => {
      console.log(req.body);
      res.send('Post Teste')
    })
  
  }