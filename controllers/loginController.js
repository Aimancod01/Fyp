import User from "../models/UserModel.js";

export const login = async (req, res) => {
  res.send("Login");
};

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.send({ user });
};
