// pages/api/generate-pdf.ts
import { NextApiRequest, NextApiResponse } from 'next';
import pdf from 'html-pdf';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { htmlContent } = req.body;

    pdf.create(htmlContent).toBuffer((err, buffer) => {
      if (err) return res.status(500).send('Failed to generate PDF');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
      res.send(buffer);
    });
  }
}
