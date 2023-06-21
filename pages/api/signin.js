import { Client } from 'pg';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { username, password } = req.body;

  // Configuracion DB
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'practicas2023',
    password: 'root',
    port: 5432,
  });

  try {
    await client.connect();
    const query = 'SELECT * FROM public."Users" WHERE username = $1 AND password = crypt($2, password)';
    const result = await client.query(query, [username, password]);

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      // Devuelve un mensaje genérico sin revelar información específica sobre las credenciales inválidas
      res.status(401).json({ error: 'Inicio de sesión fallido' });
    }
  } catch (error) {
    console.error('Error al realizar el inicio de sesión:', error);
    res.status(500).json({ error: 'Error al realizar el inicio de sesión' });
  } finally {
    await client.end(); 
  }
}
