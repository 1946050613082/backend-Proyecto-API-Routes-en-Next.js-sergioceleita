import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ 
      message: 'Por favor proporciona un nombre como parámetro de consulta',
      example: '/api/support?name=Sergioceleita'
    });
  }

  const supportMessages = [
    `¡Tú puedes lograrlo, ${name}! Sigue adelante.`,
    `${name}, cada pequeño paso cuenta. ¡Sigue así!`,
    `No te rindas, ${name}. Los mejores están por venir.`,
    `¡Ánimo, ${name}! Tienes todo lo necesario para triunfar.`,
    `${name}, recuerda: los obstáculos son oportunidades disfrazadas.`
  ];

  const randomMessage = supportMessages[Math.floor(Math.random() * supportMessages.length)];

  res.status(200).json({
    message: randomMessage,
    nameProvided: name,
    timestamp: new Date().toISOString()
  });
}