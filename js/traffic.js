const trafficCanvas = document.getElementById('traffic-chart');
let defaultData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
        fill: {
            target: 'origin',
            above: 'rgba(99, 105, 189, 0.4)'
          },
          tension: .4
    }]
};
let hourlyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
        fill: {
            target: 'origin',
            above: 'rgba(99, 105, 189, 0.4)'
          },
          tension: .4
    }]
};
let dataDaily = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [950, 1350, 2000, 1000, 1800, 1350, 1550, 1850, 2050, 1300, 2400],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
        fill: {
            target: 'origin',
            above: 'rgba(99, 105, 189, 0.4)'
          },
          tension: .4
    }]
};
let weeklyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [650, 1050, 3000, 2500, 1200, 1450, 2250, 1850, 1250, 1700, 2000],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
        fill: {
            target: 'origin',
            above: 'rgba(99, 105, 189, 0.4)'
          },
          tension: .4
    }]
};
let monthlyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [1750, 2250, 1000, 2500, 1200, 750, 1850, 1950, 2050, 1300, 1200],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
        fill: {
            target: 'origin',
            above: 'rgba(99, 105, 189, 0.4)'
          },
          tension: .4
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
          beginAtZero: true
        }
    },
    plugins: {
        legend: {
          display: false
        }
    }
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: defaultData,
    options: trafficOptions
});

const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
};

// select button, add active class, remove class from previous button, generate new chart
const trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.className = "active";
    } 
    const liTraffic = document.querySelectorAll('.traffic-nav li');
    for (let i = 0; i < liTraffic.length; i++) {
        const liActive = liTraffic[i];
        if (liActive.className === 'active') {
            liActive.className += ' traffic-active';
            let liName = liActive.textContent;
        if (liName === 'Hourly') {
            updateChart(trafficChart, hourlyData);
        }
        else if (liName === 'Daily') {
            updateChart(trafficChart, dataDaily);
        }
        else if (liName === 'Weekly') {
            updateChart(trafficChart, weeklyData);
        }
        else if (liName === 'Monthly') {
            updateChart(trafficChart, monthlyData);
        }  
        } else {
            liActive.className = 'traffic-nav-link';
        } 
    }
    
});

