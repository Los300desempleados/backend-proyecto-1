import express from 'express';

const api = express();

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando',
  });
});

export default api;
