export default function handler(req, res) {
    res.json([
      { id: 1, username: 'usuario1', password: 'contraseña1' },
      { id: 2, username: 'usuario2', password: 'contraseña2' },
      { id: 3, username: 'usuario3', password: 'contraseña3' }
    ]);
  }
  