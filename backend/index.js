const express = require('express');
const cors = require('cors');
const pool = require('./db')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// pool();

// API route to fetch properties
app.get('/api/properties', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM properties');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.get('/', (req, res) => {
  res.send('Real Estate Backend Running');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
