import { myPool } from "../database/connection.js";

//GET /users
export const allUsersCtrl = async (_req, res) => {
  try {
    const [users] = await myPool.query("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({
      msg: "error con la base de datos",
    });
  }
};

//POST /users
export const createUserCtrl = async (req, res) => {
  const { Nombre, Apellido, DNI } = req.body;

  try {
    const [result] = await myPool.execute(
      "INSERT INTO users (Nombre, Apellido, DNI) values (?, ?, ?)",
      [Nombre, Apellido, DNI]
    );

    const [userFinded] = await myPool.execute(
      "SELECT * FROM users WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(userFinded[0]);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error con la base de datos",
    });
  }
};

// GET users/:id
export const findUserByIdCtrl = async (req, res) => {
  const userId = +req.params.id;

  try {
    const [findedUser] = await myPool.execute(
      "SELECT * FROM users WHERE id = ?",
      [userId]
    );

    res.status(200).json(findedUser[0]);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error con la base de datos",
    });
  }
};
