class Hellocontroller {
  async index(req, res) {
    return res.json({ hello: 'Waltton Coelho' });
  }
}

export default new Hellocontroller();
