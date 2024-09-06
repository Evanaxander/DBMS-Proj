const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/patient', (req, res) => {
    // Handle patient data
    console.log(req.body);
    res.json({ message: 'Patient data saved successfully!' });
});

const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Route to serve CSV data
app.get('/getPatientData', (req, res) => {
    const results = [];

    fs.createReadStream('/mnt/data/heart.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display patient demographic data from CSV
    document.getElementById("show-patient-data").addEventListener("click", function () {
        fetch('/getPatientData')
            .then(response => response.json())
            .then(data => {
                let output = '<table>';
                output += '<tr><th>Patient ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Diagnosis</th></tr>';

                data.forEach(patient => {
                    output += `
                        <tr>
                            <td>${patient.patient_id}</td>
                            <td>${patient.name}</td>
                            <td>${patient.age}</td>
                            <td>${patient.gender}</td>
                            <td>${patient.diagnosis}</td>
                        </tr>
                    `;
                });

                output += '</table>';
                document.getElementById("patient-data").innerHTML = output;
            })
            .catch(error => console.error('Error fetching patient data:', error));
    });
});


app.post('/api/diagnosis', (req, res) => {
    // Handle diagnosis data
    console.log(req.body);
    res.json({ message: 'Diagnosis data saved successfully!' });
});

app.post('/api/physician', (req, res) => {
    // Handle physician data
    console.log(req.body);
    res.json({ message: 'Physician data saved successfully!' });
});



app.post('/api/facilities', (req, res) => {
    // Handle facilities data
    console.log(req.body);
    res.json({ message: 'Facilities data saved successfully!' });
});

app.post('/api/medicine', (req, res) => {
    // Handle medicine data
    console.log(req.body);
    res.json({ message: 'Medicine data saved successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
