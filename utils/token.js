import jwt from "jsonwebtoken";

export const createJwt = (payload) => {
  const token = jwt.sign(payload, "secret", {
    expiresIn: "1d",
  });
  return token;
};

export const verifyJwt = (token) => {
  const decode = jwt.verify(token, "secret");
  return decode;
};
