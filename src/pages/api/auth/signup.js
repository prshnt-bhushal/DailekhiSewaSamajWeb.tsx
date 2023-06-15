import User from '../../../../models/User';
import db from '../../../../utils/db';
import bcryptjs from 'bcryptjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: 'Invalid Input' });
    return;
  }

  await db.dbConnect();
  // existing user
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: 'email already exists' });
    db.dbDisconnect();
    return;
  }
  const newUser = new User({
    name: name,
    email: email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  });

  const user = await newUser.save();
  await db.dbDisconnect();
  res.status(201).json({ message: 'User created', user: user });
}

export default handler;
