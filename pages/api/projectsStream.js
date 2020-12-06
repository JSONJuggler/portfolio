import nextConnect from 'next-connect';

import projects from '../../projects/projects.json';

const handler = nextConnect();

handler.get(async (req, res) => {
  res.status(200).json(projects);
});

export default handler;
