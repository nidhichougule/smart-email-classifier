# 📧 Smart Email Classifier

This is a simple yet powerful web app I built that helps classify email messages into **Spam**, **Promotional**, or **Important**. It uses Google's Natural Language API to analyze the content and figure out what kind of email it is.

🌐 [Live Demo Here](https://smart-email-classifier-8ce32.web.app)

---

## 🚀 What I Used

This project is fully built using Google Cloud and Firebase services. Here's what powers it:

- 🔹 **Firebase Hosting** – To make the website live
- 🔹 **Firebase Cloud Functions** – To handle the classification logic
- 🔹 **Cloud Firestore** – To store the emails and their categories
- 🔹 **Natural Language API** – To detect emotions or intent in the message
- 🔹 **Chart.js** – To show a visual summary of classified emails

---

## 💡 What It Does

Here’s how it works:

1. You paste an email message in the textbox.
2. It sends that message to the backend using a Cloud Function.
3. The backend uses the Natural Language API to figure out the **sentiment** (positive/negative).
4. It also checks for common **keywords** like "offer", "win", "discount", etc.
5. Based on the analysis, it classifies the email as:
   - ✅ Important
   - 🔶 Promotional
   - 🚫 Spam
6. Finally, it saves that result in Firestore and shows the outcome on the page (along with a chart that updates every time).

---

## 🧪 Example Use

| Email Message                                 | What the App Says     |
|----------------------------------------------|------------------------|
| "Congratulations! You've won a gift card!"   | 🚫 Looks like Spam     |
| "Limited-time 30% off sale just for you"     | 🔶 Promotional Offer   |
| "Meeting rescheduled to 11:00 AM tomorrow"   | ✅ Important Message    |

---

## 📁 Project Structure

Here’s a quick overview of how my project files are set up:

