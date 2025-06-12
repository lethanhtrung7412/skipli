const ownerService = require("../services/owner.service");

async function createUser(req, res) {
  const {name, email, phone} = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Name, email, and phone are required" });
  }
  const user = {
    name: name,
    email: email,
    phone: phone
  }
  const userId = await ownerService.userCreation(user)
  return res.status(200).json({
    message: "User created successfully",
    userId: userId,
  });
}

async function createAccessCode(req, res) {
  const { phoneNumber } = req.body;
  if (!phoneNumber) {
    return res.status(400).json({ message: "Phone number is required" });
  }
  try {
    await ownerService.createAccessCode(phoneNumber);
    return res.status(200).json({
      message: "Access code created successfully",
    });
  } catch (error) {
    console.error("Error creating access code:", error);
    return res.status(500).json({ message: "Internal server error" });
  }  
}

async function validateAccessCode(req, res) {
  const { phoneNumber, accessCode } = req.body;
  if (!phoneNumber || !accessCode) {
    return res.status(400).json({ message: "Phone number is required" });
  }
  try {
    const isValid = await ownerService.validateAccessCode(phoneNumber, accessCode);
    if (isValid) {
      return res.status(200).json({ message: "Access code is valid" });
    } else {
      return res.status(400).json({ message: "Invalid access code" });
    }
  } catch (error) {
    console.error("Error validating access code:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createUser,
  createAccessCode,
  validateAccessCode
};
