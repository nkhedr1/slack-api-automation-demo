Slack API Automation Demo 🚀

This project demonstrates a simple workflow automation built with Node.js, the Cat Facts API, and optional Slack integration.
It shows how APIs can be orchestrated into a workflow and exposed as a self-serve endpoint — a lightweight example of the type of automation used in enterprise environments.

✨ Features

Fetches a random fact from the Cat Facts API 🐱 (no API key required).

Formats the fact and posts it to Slack (via Incoming Webhook).

Works even without Slack — messages are logged to the console.

Demonstrates workflow automation, API integration, and self-serve endpoints.

🛠️ Setup Instructions
1. Clone the repo
git clone https://github.com/nkhedr1/slack-api-automation-demo.git
cd slack-api-automation-demo

2. Install dependencies
npm install

3. Configure environment

Copy .env.example to .env and (optionally) set your Slack webhook URL:

cp .env.example .env


If no Slack URL is provided, messages will just be logged locally.

4. Run the server
npm start


You should see:

🚀 Workflow server running on port 3000

▶️ Usage
Call the workflow endpoint:
curl -X POST http://localhost:3000/workflow

Example JSON response:
{
  "success": true,
  "sent": "🐱 Fun Cat Fact: Cats sleep 70% of their lives."
}


If Slack is configured, you’ll see the message in your Slack channel.

📌 Why this project matters

This demo reflects real-world automation patterns:

API integration (external service → Slack).

Workflow orchestration (multi-step automation).

Self-serve access (endpoint usable by technical & non-technical users).

It’s a simplified example of the kind of AI/automation tooling I build professionally — integrating APIs, ensuring reliability, and making workflows accessible across teams.

📜 Tech Stack

Node.js / Express

Axios (HTTP requests)

dotenv (environment variables)

Slack Incoming Webhooks (optional)
