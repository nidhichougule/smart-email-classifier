async function classifyEmail() {
  const email = document.getElementById("emailInput").value;
  const res = await fetch("/classifyEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ emailText: email })
  });

  const data = await res.json();
  document.getElementById("result").innerHTML = `
    <p><b>Category:</b> ${data.category}</p>
    <p><b>Sentiment Score:</b> ${data.sentimentScore}</p>
  `;
  loadChart();
}

async function loadChart() {
  const res = await fetch("https://firestore.googleapis.com/v1/projects/smart-email-classifier-8ce32/databases/(default)/documents/emails");
  const json = await res.json();
  const counts = { Spam: 0, Promotional: 0, Important: 0 };

  json.documents.forEach(doc => {
    const cat = doc.fields.category.stringValue;
    counts[cat]++;
  });

  new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: ["Spam", "Promotional", "Important"],
      datasets: [{
        label: "Email Count",
        data: [counts.Spam, counts.Promotional, counts.Important],
        backgroundColor: ["red", "orange", "green"]
      }]
    }
  });
}
