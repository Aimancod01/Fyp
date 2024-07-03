import { verifyJwt } from "../utils/token";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const { userId, role } = verifyJwt(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new Error("Authentication Invalid");
  }
};
