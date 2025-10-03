import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());


app.post("/workflow", async (req, res) => {
  try {

    const factRes = await axios.get("https://catfact.ninja/fact");
    const fact = factRes.data.fact;

    const message = `🐱 Fun Cat Fact: ${fact}`;

    // Send to Slack if webhook is configured
    if (process.env.SLACK_WEBHOOK_URL) {
      await axios.post(process.env.SLACK_WEBHOOK_URL, { text: message });
    } else {
      console.log("Slack webhook not set. Message:", message);
    }

    res.json({ success: true, sent: message });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Workflow failed", details: err.message });
  }
});

app.listen(3000, () => console.log("🚀 Workflow server running on port 3000"));
