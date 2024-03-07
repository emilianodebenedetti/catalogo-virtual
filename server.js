const express = require("express");
const path = require("path");
const knex = require("knex");
knexConfig = require("./db")

const app = express();
const database = knex(knexConfig.development)

app.use(express.static(path.join(__dirname, "/build")));

// Traigo tabla_productos desde la base de datos
app.get('/api/productos', async (req, res) => {
  try {
    const dataProducts = await database.select().from('tabla_productos');/* nombre de la tabla a ingresar */    
    res.json(dataProducts);
} catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Traigo tabla_categorias desde la base de datos
app.get('/api/categorias', async (req, res) => {
  try {
    const dataCategory = await database.select().from('tabla_categorias');
    res.json(dataCategory); 
} catch(error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}); 

// Obtener productos por categoría
app.get('/api/productos/:categoriaId', async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const dataProducts = await database.select().from('tabla_productos').where('idCategoria', categoriaId);
    res.json(dataProducts);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    
    // Ordeno los datos el nombre
    /* data.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    }); */