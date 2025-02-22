// Function to update time
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Simulate realistic weather data for Kathmandu
function simulateWeatherData() {
    // Get current hour to simulate temperature variations throughout the day
    const hour = new Date().getHours();
    
    // Base temperature range for Kathmandu (20-30°C during day, 15-20°C at night)
    let baseTemp;
    if (hour >= 6 && hour <= 18) {
        // Daytime temperatures
        baseTemp = 20 + Math.random() * 10;
    } else {
        // Nighttime temperatures
        baseTemp = 15 + Math.random() * 5;
    }
    
    // Add some random variation
    const temperature = Math.round(baseTemp * 10) / 10;
    
    // Humidity typically ranges from 60-80% in Kathmandu
    const humidity = Math.round(60 + Math.random() * 20);
    
    // Update the DOM
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('humidity').textContent = `${humidity}%`;
}

// Update weather data every 5 minutes
simulateWeatherData(); // Initial call
setInterval(simulateWeatherData, 5 * 60 * 1000);

// Function to simulate real-time soil moisture and pH values
function simulateSoilData() {
    // Simulate soil moisture (10-30% is typical for Nepal)
    const soilMoisture = (10 + Math.random() * 20).toFixed(2);
    document.getElementById('soil-irrigation').textContent = `${soilMoisture}%`;

    // Simulate pH value (5.5-7.0 is optimal for maize)
    const pHValue = (5.5 + Math.random() * 1.5).toFixed(1);
    document.getElementById('ph-value').textContent = pHValue;

    // Check for notifications
    let notificationText = '';

    if (soilMoisture < 15 || soilMoisture > 25) {
        notificationText += 'Warning: Soil moisture is outside the optimal range!\n';
    }

    if (pHValue < 5.5 || pHValue > 7.0) {
        notificationText += 'Warning: pH value is not ideal for maize growth!\n';
    }

    // Simulate disease notification based on random chance
    if (Math.random() > 0.8) { // 20% chance of disease notification
        notificationText += 'Alert: Conditions may lead to Maize Streak Virus. Consider preventive measures.';
    }

    // Display notification
    const notificationElement = document.getElementById('notification');
    if (notificationText) {
        notificationElement.textContent = notificationText;
        notificationElement.style.display = 'block';
    } else {
        notificationElement.style.display = 'none';
    }
}

// Update soil data every 10 seconds
simulateSoilData(); // Initial call
setInterval(simulateSoilData, 10000);

// Add smooth transitions for hover effects
document.querySelectorAll('.card, .info-box').forEach(element => {
    element.addEventListener('mouseover', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});
