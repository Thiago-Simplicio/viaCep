import jwt from "jsonwebtoken";
const mysecret = "@mysecret";

class authenticateService {
  public generateToken(name: any) {
    let data: any[] = [];

    if (!name) {
      return `Digite pelo menos um nome para gerar o token 😉`;
    }

    const playload = { name };

    const token = jwt.sign(playload, mysecret, {
      expiresIn: "24h",
    });

    data.push({
      auth: true,
      token: token,
      user: name,
    });

    return data;
  }
}

export { authenticateService };
