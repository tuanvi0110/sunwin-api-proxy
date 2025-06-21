const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Nếu chạy trên server cần thêm

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/du-doan', async (req, res) => {
  try {
    const response = await fetch('https://sunwin-api-vanwnhat.up.railway.app/api/du-doan');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Không lấy được dữ liệu từ nguồn gốc.' });
  }
});

app.listen(port, () => {
  console.log(`✅ API đang chạy tại http://localhost:${port}`);
});
