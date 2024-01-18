const express = require("express");
const router = express.Router();
const prisma = require("../client");
const bcrypt = require("bcrypt");
const saltRounds = 7;
const jwt = require("jsonwebtoken");

// auth/login
router.post("/", async (req, res) => {
  if (!req.body) return res.sendStatus(401);
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(401)
      .send({ message: "Not authorized, incomplete credentials" });

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) return res.status(401).send({ message: "User not found" });

    const isPasswordVerified = await bcrypt.compare(password, user.password);

    // C: A ternary does work here but it is less legible than an if / else statement. May want to refactor
    isPasswordVerified
      ? res.send(
          jwt.sign({ id: user.id, username }, process.env.JWT_SECRET, {
            expiresIn: "2w",
          })
        )
      : res.sendStatus(401);
  } catch (error) {
    return res.status(401).send({
      message:
        "Login failed, invalid username and/or password. Do you need to register?",
    });
  }
});

module.exports = router;
