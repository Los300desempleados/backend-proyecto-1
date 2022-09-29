import { User } from "../models/index.js";
import bcrypt from 'bcrypt';

const updatePasswordOrEmailById = async (req, res) => {

  try {
    const { id } = req.params;

    const encrypted = await bcrypt.hash(req.body.password, 10);

    req.body.password = encrypted;

    const newPasswordOrEmail = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: `User ${User.name} actualizado`,
      newPasswordOrEmail,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al actualizar el password',
    });
  }
};

export { updatePasswordOrEmailById };
