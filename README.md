### README.md

# Patient Data Dashboard

This project is a single-page application that displays patient information and a blood pressure chart based on an Adobe XD template. The data is fetched from the **Coalition Technologies Patient Data API**.

---

## Features
- Displays personal information for Jessica Taylor.
- Dynamically renders a blood pressure chart using **Chart.js**.
- Follows responsive design for better user experience.

---

## Technologies Used
- **HTML**, **CSS**, **JavaScript**
- **Chart.js** for rendering the chart
- **Fetch API** for making HTTP requests

---

## How to Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-directory
   ```
2. Open `index.html` in your browser.

---

## API Integration
The data is fetched from the Coalition Technologies Patient Data API using Basic Auth:
- **Username:** `coalition`
- **Password:** `skills-test`

---

## Troubleshooting
- Ensure Chart.js is loaded correctly via the CDN.
- Check the browser console for API response errors or network issues.

---

## Demo
![Screenshot](screenshot.png)

Feel free to modify and extend the project as needed!