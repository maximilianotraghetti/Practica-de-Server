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

    if (findedUser.length < 1) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    res.status(200).json(findedUser[0]);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error con la base de datos",
    });
  }
};

// PATCH users/:id
export const updateUserCtrl = async (req, res) => {
  const userId = +req.params.id;
  const { Nombre, Apellido, DNI } = req.body;

  try {
    const [result] = await myPool.execute(
      "UPDATE users SET Nombre=?, Apellido=?, DNI=? WHERE id=?",
      [Nombre, Apellido, DNI, userId]
    );

    if ((result.affectedRows = 0)) {
      return res.status(404).json({
        msg: "User not Found",
      });
    }

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

// DELETE users/:id
export const deleteUserCtrl = async (req, res) => {
  const userId = +req.params.id;
  try {
    const [result] = await myPool.execute("DELETE FROM users WHERE id = ?", [
      userId,
    ]);

    if (result.affectedRows == 0) {
      return res.status(404).json("User not Found");
    }

    res.status(200).json({
      msg: "User successfully deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Hubo un error con la base de datos",
    });
  }
};
