import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import prisma from 'lib/prisma';
import bycrypt from 'bcrypt';

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req, res) {
  const { email = '', password = '' } = await req.body;

  try {
    let user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || (user && !bycrypt.compareSync(password, user.password)))
      return res.status(400).json({
        success: false,
        message: 'Percobaan masuk gagal, Silahkan coba lagi!',
      });

    user = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    req.session.user = user;
    await req.session.save();
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
