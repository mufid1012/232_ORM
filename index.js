const express = require('express');
const app = express();
const db = require('./models');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server berjalan di http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Gagal konek ke database:', err);
  });

  app.post('/komik', async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.Komik.create(data);
        res.send(komik);
    } catch (error) {
        res.status(500).send(error);q
    }
  });

  app.get('/komik', async (req, res) => {
    try {
        const komiks = await db.Komik.findAll();
        res.send(komik);
    } catch (error) {
        res.send(error);
    }
  });