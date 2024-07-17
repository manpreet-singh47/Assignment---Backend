const express = require("express");
const UserModel = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userNameExist = await UserModel.findOne({ username: username });

    if (userNameExist) {
      return res.status(400).json({ error: "Username already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, "TestingPurpose", {
      expiresIn: "12h",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
    });
    return res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const Logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 } && res.send("Logout success"));
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { Login, Logout };
