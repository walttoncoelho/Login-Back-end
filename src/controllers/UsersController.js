import User from "../models/User";

class UsersController {
  async index(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {}

  async create(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
    const newUser = await User.create(email, password);
    return res.status(201).json(newUser);
  }
  async update(req, res) {}
  async destroy(req, res) {}
}

export default new UsersController();
