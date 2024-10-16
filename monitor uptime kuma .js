const axios = require('axios');

// Replace with your Uptime Kuma credentials and endpoint
const UPTIME_KUMA_URL = "http://localhost:3001/api/monitor";
const API_KEY = "your-api-key-here";

const newMonitor = {
    name: "My Domain Monitor",
    type: "http",
    url: "https://domain.tld",
    method: "GET",
    interval: 60, // 60 seconds
    expectStatus: 200
};

async function addMonitor() {
    try {
        const response = await axios.post(UPTIME_KUMA_URL, newMonitor, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        console.log("Monitor added successfully:", response.data);
    } catch (error) {
        console.error("Error adding monitor:", error.response ? error.response.data : error.message);
    }
}

addMonitor();
