import "./style.css";
const apiUrl = "https://fedskillstest.coalitiontechnologies.workers.dev";
const username = "coalition";
const password = "skills-test";
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

// Fetch the data
fetch(apiUrl, {
  method: "GET",
  headers: {
    Authorization: authHeader,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const patient = data.find((person) => person.name === "Jessica Taylor");
    if (patient) {
      displayPatientInfo(patient);
      renderChart(patient.diagnosis_history); // Pass the history to renderChart
    }
  })
  .catch((error) => console.error("Error:", error));

function displayPatientInfo(patient) {
  document.getElementById("profile-picture").src = patient.profile_picture;
  document.getElementById("age").textContent = patient.age;
  document.getElementById("phone").textContent = patient.phone_number;
  document.getElementById("emergency-contact").textContent =
    patient.emergency_contact;
  document.getElementById("insurance").textContent = patient.insurance_type;

  const latestDiagnosis = patient.diagnosis_history[0]; // Get the latest month
  document.getElementById("systolic").textContent =
    latestDiagnosis.blood_pressure.systolic.value +
    " (" +
    latestDiagnosis.blood_pressure.systolic.levels +
    ")";
  document.getElementById("diastolic").textContent =
    latestDiagnosis.blood_pressure.diastolic.value +
    " (" +
    latestDiagnosis.blood_pressure.diastolic.levels +
    ")";
}

function renderChart(diagnosisHistory) {
  const months = diagnosisHistory.map((item) => item.month);
  const systolicData = diagnosisHistory.map(
    (item) => item.blood_pressure.systolic.value
  );
  const diastolicData = diagnosisHistory.map(
    (item) => item.blood_pressure.diastolic.value
  );

  document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("bp-chart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Systolic",
            data: [120, 130, 140, 135, 125],
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            fill: true,
          },
          {
            label: "Diastolic",
            data: [80, 85, 90, 85, 80],
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
}
