const functions = require("firebase-functions");
const admin = require("firebase-admin");
const language = require("@google-cloud/language");

admin.initializeApp();
const db = admin.firestore();
const client = new language.LanguageServiceClient();

exports.classifyEmail = functions.https.onRequest(async (req, res) => {
  const {emailText} = req.body;
  if (!emailText) return res.status(400).send("No content");

  const [result] = await client.analyzeSentiment({
    document: {content: emailText, type: "PLAIN_TEXT"},
  });
  const sentimentScore = result.documentSentiment.score;

  let category = "Important";
  const lower = emailText.toLowerCase();

  if (
    lower.includes("prize") ||
    lower.includes("win") ||
    lower.includes("free")
  ) {
    category = "Spam";
  } else if (
    lower.includes("offer") ||
    lower.includes("discount") ||
    lower.includes("sale")
  ) {
    category = "Promotional";
  } else if (sentimentScore < -0.4) {
    category = "Spam";
  }

  const emailEntry = {
    emailText,
    category,
    sentimentScore,
    timestamp: new Date(),
  };

  await db.collection("emails").add(emailEntry);
  res.status(200).json(emailEntry);
});
