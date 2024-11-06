// pages/api/preferences.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, templateId, selectedSections } = req.body;
    try {
      const preferences = await prisma.userPreferences.create({
        data: {
          userId,
          templateId,
          selectedSections,
        },
      });
      res.status(200).json(preferences);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save preferences' });
    }
  }
}
