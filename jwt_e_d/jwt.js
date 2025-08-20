import jwt from "jsonwebtoken";

const secretKey = "12345"; // ⚠️ In production, store in .env

// Function to encrypt data into JWT
function encryptData() {

  const data = { name: "nandhini",  age: 16 };

  const token = jwt.sign(data, secretKey, { expiresIn: "10m" });

  console.log("Encrypted Token:", token);

}

encryptData() 

// Function to decrypt JWT back to original data
function decryptData()
{
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmFuZGhpbmkiLCJhZ2UiOjE2LCJpYXQiOjE3NTU3MDcyMzIsImV4cCI6MTc1NTcwNzgzMn0.5wVstXiUI7_o91gN1Ohugc-rAvSxaGYPzpX5agefWc8"
const decoded = jwt.verify(token, secretKey);
  console.log("Decrypted Data:", decoded);

}

decryptData();


