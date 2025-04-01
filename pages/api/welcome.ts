import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }
  
  res.status(200).json({ 
    message: '¡Bienvenido a nuestra API!',
    description: 'Esta es una API básica creada con Next.js',
    endpoints: [
      '/api/welcome',
      '/api/support?name=TuNombre'
    ],
    status: 'operational'
  });
}