class Hellocontroller {
  async index(req, res) {
    return res.json({ hello: 'Olá Waltton' });
  }
}

export default new Hellocontroller();
