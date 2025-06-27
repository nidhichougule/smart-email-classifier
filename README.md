# 📧 Smart Email Classifier (GCP-Based)  
An easy-to-understand, beginner-friendly web application that classifies emails as **Spam**, **Promotional**, or **Important** using Google Cloud Platform (GCP) services like Natural Language API, Cloud Functions, Firestore, and Firebase Hosting.

---

## 🚀 Features  

📥 Paste email content on the website  
⚙️ Triggers a Cloud Function to analyze content  
🧠 Uses Google NLP to detect **sentiment** and **keywords**  
🗂️ Classifies emails as Spam / Promotional / Important  
📊 Stores results in Firestore and shows visual summary with Chart.js  

---

## 🔧 GCP Services Used  

| GCP Service               | Description                                                             |
|---------------------------|-------------------------------------------------------------------------|
| ☁️ Firebase Hosting        | Hosts the frontend (HTML + JS)                                          |
| ⚙️ Cloud Functions         | Backend API to process email and perform sentiment + keyword analysis   |
| 🧠 Natural Language API    | Detects sentiment score of the email                                    |
| 📂 Cloud Firestore         | Stores classification result and user email input                      |

---

## 📝 Submission Note  

All services used in this project — **Hosting, Functions, Firestore, NLP API** — are implemented and tested.  
Frontend is deployed and working live via Firebase Hosting.  
GitHub contains the complete source code with configuration, function logic, and screenshots of successful classification and visualization.

🌐 **Live App:**  
[https://smart-email-classifier-8ce32.web.app](https://smart-email-classifier-8ce32.web.app)

---

## 🛠️ Setup Instructions  

### 📌 Prerequisites  

✅ Firebase CLI  
✅ Node.js & npm  
✅ GCP Billing enabled (free tier is enough)  

---

### 🔨 Clone the repository  

```bash
git clone https://github.com/nidhichougule/smart-email-classifier.git
cd smart-email-classifier
```

---

### 🔨 Deploy Firebase Services  

```bash
# Login and initialize Firebase
firebase login
firebase init

# Deploy hosting and cloud function
firebase deploy
```

---

## 📂 Project Structure  

```
smart-email-classifier/
├── public/
│   ├── index.html          # Web interface for pasting emails
│   └── main.js             # JS to call Cloud Function & draw Chart.js bar chart
│
├── functions/
│   └── index.js            # Cloud Function to classify email using NLP API
│
├── firestore.rules         # Firestore access rules
├── firebase.json           # Firebase deploy config
├── .firebaserc             # Firebase project ID + alias
└── README.md               # Project overview & setup
```

---

## 🙋‍♀️ Made by  
**Nidhi Chougule**  
🎓 Electronics & Computer Science Student    
📬 [nidhichougule20@gmail.com](mailto:nidhichougule20@gmail.com)
