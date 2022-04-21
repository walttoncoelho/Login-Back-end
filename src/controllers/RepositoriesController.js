import User from "../models/User";
import Repository from "../models/Repository";

class RepositoriesController {
  async index(req, res) {
    try {
      const { user_id } = req.params;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const repositories = await Repository.find({ userId: user_id });

      return res.json(repositories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
  async create(req, res) {
    try {
      const { user_id } = req.params;
      const { name, url } = req.body;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const repository = await Repository.findOne({ userId: user_id, name });

      if (repository) {
        return res
          .status(422)
          .json({ message: `Repository ${name} already exists` });
      }

      const newRepository = await Repository.create({
        userId: user_id,
        name,
        url
      });

      return res.status(201).json(newRepository);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { user_id, id } = req.params;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json({ error: "Repository not found" });
      }

      const repository = await Repository.findById({ id });

      if (!repository) {
        return res.status(404).json({ error: "Repository not found" });
      }

      await repository.deleteOne();

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new RepositoriesController();
