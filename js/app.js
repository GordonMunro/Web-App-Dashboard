// Alert Banner
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML =
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have unread messages</p>
    <p class="alert-banner-close">x</p>
</div>
`;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = 'none';
    }
});
// Chart Widgets

// Bar Graph
const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
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
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Donut Chart 
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};
const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Messaging Section
const user = document.querySelector('#userSearch');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to ${user.value}`);
    }
});

// Alert Banner
// following dropdown code adapted from https://www.w3schools.com/howto/howto_js_dropdown.asp
const bell = document.querySelector('.bell-svg');
const bellAlert = document.querySelector('#myDropdown');
bell.addEventListener('click', () => {
    bellAlert.className += " show";
});
bellAlert.addEventListener('click', e => {
    const element = e.target;
    let a = bellAlert.first
    if (element.classList.contains("close-note")) {
        element.parentNode.style.display = 'none';
    }
});


// Local Storage
// get the buttons, get the selects
const checkboxes = document.querySelectorAll('input[type="checkbox"');
const emailBox = document.getElementById('email-box');
const profileBox = document.getElementById('profile-box');
const select = document.querySelector('select');
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');

// Following local storage code adapted from Lisa Woodson's youtube video
// https://www.youtube.com/watch?v=BftgdwADR0k&t=990s

const save = () =>{

    for (let i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);    
    }
    localStorage.setItem('timezone', select.value);

}
const load = () => {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true';
    }
    if (localStorage.getItem('timezone')) {
    select.value = localStorage.getItem('timezone');
    }
}
const remove = () => {
    for (let i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked=false);    
    }
    localStorage.removeItem('timezone');
    select.value = '3';
}
saveButton.addEventListener('click', () => {
    save();
    saveButton.style.backgroundColor = "lightgrey";
    cancelButton.style.backgroundColor = "grey";
});
cancelButton.addEventListener('click', () => {
    remove();
    cancelButton.style.backgroundColor = "lightgrey";
    saveButton.style.backgroundColor = "rgb(99, 105, 189)";
});
load();
