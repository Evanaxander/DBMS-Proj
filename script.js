document.addEventListener("DOMContentLoaded", function() {
    // Helper function to send form data to the backend
    function sendData(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    }

    // Patient Form Submission
    document.getElementById("patient-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const data = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value
        };
        sendData('/api/patient', data).then(() => {
            alert("Patient demographic data saved successfully!");
        });
    });

    // Diagnosis Form Submission
    document.getElementById("diagnosis-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const data = {
            diagnosis: document.getElementById("diagnosis").value
        };
        sendData('/api/diagnosis', data).then(() => {
            alert("Patient diagnosis data saved successfully!");
        });
    });

    // Physician Form Submission
    document.getElementById("physician-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const data = {
            name: document.getElementById("physician-name").value,
            specialization: document.getElementById("specialization").value
        };
        sendData('/api/physician', data).then(() => {
            alert("Physician information saved successfully!");
        });
    });

    // Facilities Form Submission
    document.getElementById("facilities-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const data = {
            name: document.getElementById("facility-name").value,
            location: document.getElementById("location").value
        };
        sendData('/api/facilities', data).then(() => {
            alert("Facilities information saved successfully!");
        });
    });

    // Medicine Tracker Form Submission
    document.getElementById("medicine-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const data = {
            medicineName: document.getElementById("medicine-name").value,
            dosage: document.getElementById("dosage").value
        };
        sendData('/api/medicine', data).then(() => {
            alert("Medicine tracking data saved successfully!");
        });
    });

    function toggleDropdown(id) {
        var content = document.getElementById(id);
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    }
    document.querySelectorAll('.dropdown-btn').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });
        

    document.addEventListener("DOMContentLoaded", function() {
        const dropdowns = document.querySelectorAll(".dropdown-btn");
    
        dropdowns.forEach(btn => {
            btn.addEventListener("click", function() {
                const content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        });
    });
    

    // Login Form Submission
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "admin@cadiot.com" && password === "password123") {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid login credentials!");
        }
    });
});
