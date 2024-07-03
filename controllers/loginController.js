import User from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import { createJwt } from "../utils/token.js";
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.json({ error: "Invalid Credenatials" });
  }
  const comparePassword = await bcryptjs.compare(
    req.body.password,
    user.password
  );
  if (!comparePassword) {
    return res.json({ error: "Invalid Credenatials" });
  }
  const oneDay = 1000 * 60 * 60 * 24;
  const token = createJwt({ userId: user._id, role: user.role });
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.json({ msg: "User logged in!" });
  console.log(req.user);
};

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res.send({ user });
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.json({ msg: "Logged Out" });
};
