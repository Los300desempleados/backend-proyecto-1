import { User } from "../models/index.js";
import bcrypt from 'bcrypt';


const register = async (req, res) => {
  try {
    //Encripto contraseña
    const encrypted = await bcrypt.hash(req.body.password, 10);

    //Modifico el body para remplazar el pass con una encriptada
    req.body.password = encrypted;

    //Creamos un usuario
    const user = await User.create(req.body);

    //Borramos el password para no mandarla en la respuesta
    user.password = undefined;

    return res.json({
      msg: 'Usuario registrado exitosamente',
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error al registrar usuario',
      error,
    });
  }
};


export { register };