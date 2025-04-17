import express from "express";
import { Resend } from "resend";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/email-verification", verifyToken, async (req, res) => {
//   const { email } = req.user;

  try {
    const resend = new Resend("");
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ["anshu.singh.10471@gmail.com"], // dynamic now
      cc:["anshu.singh.10471@gmail.com"],
      subject: 'Hello World',
      html: `<div>
      <a href="https://www.yourstore.com/shop" style="padding: 10px 20px; background-color: #ff66b2; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify your Email</a>
  
    <footer style="font-size: 12px; color: #777; text-align: center; margin-top: 20px;">Don’t worry, we’ll always keep the sparks flying. 🔥</footer><div/>`,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    res.json({ message: "Verification email sent", data });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
