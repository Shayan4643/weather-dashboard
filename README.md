# 🌤️ Weather Dashboard

A sleek and responsive **Weather Dashboard** web application built using **HTML5, Tailwind CSS v4, and Vanilla JavaScript**. This app fetches real-time weather data using the OpenWeatherMap API with features like debounced live searching, keyboard support, and instant error handling.

---

## 🚀 Features

* **Real-Time Weather Search:** Get live weather data (Temperature, Humidity, Wind Speed, and Description) for any city worldwide.
* **Debounced Live Search:** Automatically fetches weather data as you type (when 3 or more characters are entered), optimized with debouncing to prevent excessive API calls.
* **Responsive UI:** Built with **Tailwind CSS v4** for a clean, modern, and mobile-friendly design featuring a glassmorphism card effect.
* **Error Handling:** Gracefully hides weather cards and displays user-friendly error messages for invalid city inputs.
* **Keyboard Support:** Press the `Enter` key to search instantly.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic document structure.
* **Tailwind CSS (v4 CDN):** Fast styling and responsive utility classes.
* **Vanilla JavaScript (ES6+):** Core logic, DOM manipulation, timers (`setTimeout`/`clearTimeout`), and asynchronous API calls (`async/await`, `fetch`).
* **OpenWeatherMap API:** External weather data provider.

---

## 📁 Project Structure

```text
weather-dashboard/
│
├── index.html       # Main HTML file containing the UI layout
├── script.js        # JavaScript logic, event listeners, and API handling
└── README.md        # Project documentation


🛠️ How to Run This Project Locally
If you want to download, setup, and run this Weather Dashboard project on your own machine, follow these simple steps:

Step 1: Clone or Download the Repository
Using Git: Open your terminal or command prompt and run the following command:

Bash
git clone https://github.com/Shayan4643/weather-dashboard.git

Manual Download: Click the green <> Code button at the top of the repository page, click Download ZIP, extract the files, and open the extracted folder.

Step 2: Open in a Code Editor
Open your preferred code editor (such as VS Code).

Go to File > Open Folder... and select the weather-dashboard project folder.

Step 3: Get a Free OpenWeatherMap API Key
Since the repository contains a placeholder for security reasons, you will need your own free API key to fetch weather data:

Go to OpenWeatherMap and sign up for a free account.

Go to your account profile dropdown and click on My API Keys.

Generate a new free API key and copy it.

Step 4: Configure Your API Key
Open the script.js file inside your project folder.

Find the apiKey variable at the very top of the file:

JavaScript
const apiKey = "YOUR_API_KEY_HERE";
Replace "YOUR_API_KEY_HERE" with your actual OpenWeatherMap API key inside the quotation marks and Save the file.

Step 5: Run the Application
You can run the app using either of the following methods:

Method A: Using VS Code "Live Server" (Recommended)

Install the Live Server extension from the VS Code extensions marketplace.

Open the index.html file.

Click on the "Go Live" button located at the bottom-right corner of VS Code to launch the app in your browser.

Method B: Direct Browser Open

Go to your computer's file explorer and open the project folder.

Double-click on index.html to open it directly in your default web browser (Chrome, Edge, Firefox, etc.).
