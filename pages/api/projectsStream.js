import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req, res) => {
  res.status(200).json("Hello there sneaky");
});

export default handler;
