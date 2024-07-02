// Function to display the login form based on user type
function showLoginForm(userType) {
    var loginForm = document.getElementById('login-form');
    var patientForm = document.getElementById('patient-form');
    var doctorForm = document.getElementById('doctor-form');

    // Display the main login form
    loginForm.style.display = 'block';

    // Show the appropriate form based on user type
    if (userType === 'patient') {
        patientForm.style.display = 'block';
        doctorForm.style.display = 'none';
    } else if (userType === 'doctor') {
        doctorForm.style.display = 'block';
        patientForm.style.display = 'none';
    }
}

// Event listener for DOM content loaded to set up profile dropdown and sign-out functionality
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('profile').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('profile-dropdown').classList.toggle('show');
    });
});

// Define doctors for each specialization
const doctorOptions = {
    'Medical Center': {
        'General Dentist': ['Dr. Smith', 'Dr. Johnson'],
        'Pediatric Dentist': ['Dr. Sarah', 'Dr. Mike'],
        'Orthodontist': ['Dr. Lee', 'Dr. Davis'],
        'Periodontist': ['Dr. Brown', 'Dr. White'],
        'Oral Pathologist': ['Dr. Garcia', 'Dr. Martinez']
    },
    'Era Clinic': {
        'General Dentist': ['Dr. Anderson', 'Dr. Cooper'],
        'Pediatric Dentist': ['Dr. Parker', 'Dr. Bailey'],
        'Orthodontist': ['Dr. Wright', 'Dr. Morgan'],
        'Periodontist': ['Dr. Kelly', 'Dr. Bennett'],
        'Oral Pathologist': ['Dr. Reed', 'Dr. Murphy']
    }
};

// Populate specialization dropdown based on selected association
function populateSpecializations() {
    const association = document.getElementById('association').value;
    const specializationSelect = document.getElementById('specialization');

    // Clear previous options
    specializationSelect.innerHTML = '';

    // Get specializations for the selected association
    const specializations = Object.keys(doctorOptions[association]);

    // Create and add options to the select element
    specializations.forEach(specialization => {
        const option = document.createElement('option');
        option.text = specialization;
        specializationSelect.add(option);
    });

    // Show the specialization selection and hide doctor selection
    document.getElementById('specialization-selection').style.display = 'block';
    document.getElementById('doctor-selection').style.display = 'none';
}

// Populate doctor dropdown based on selected specialization
function populateDoctors() {
    const association = document.getElementById('association').value;
    const specialization = document.getElementById('specialization').value;
    const doctorSelect = document.getElementById('doctor');

    // Clear previous options
    doctorSelect.innerHTML = '';

    // Get doctors for the selected association and specialization
    const doctors = doctorOptions[association][specialization];

    // Create and add options to the select element
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.text = doctor;
        doctorSelect.add(option);
    });

    // Show the doctor selection
    document.getElementById('doctor-selection').style.display = 'block';
}

// Confirm appointment function
function confirmAppointment() {
    alert('Appointment confirmed!');
}

// Event listeners for association and specialization change
document.getElementById('association').addEventListener('change', populateSpecializations);
document.getElementById('specialization').addEventListener('change', populateDoctors);

// Close profile dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('#profile')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Function to view appointment details
function viewDetail(appointmentId) {
    const details = document.getElementById(appointmentId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        details.innerHTML = `
            <p>Date: 2024-06-20</p>
            <p>Time: 10:00 AM</p>
            <p>Oral Part Examined: Teeth</p>
            <p>Doctor's Notes: Regular check-up, no issues found.</p>
            <p>Diagnosis: Normal</p>
            <p>Medicine Prescribed: None</p>
        `;
    } else {
        details.style.display = "none";
    }
}

// Another set of doctors (seems redundant)
const doctors = {
    'association1': {
        'general': ['Dr. Smith', 'Dr. Johnson'],
        'pediatric': ['Dr. Brown', 'Dr. White'],
        'orthodontist': ['Dr. Green', 'Dr. Black'],
        'periodontist': ['Dr. Blue', 'Dr. Red'],
        'oral-pathologist': ['Dr. Pink', 'Dr. Grey']
    },
    'association2': {
        'general': ['Dr. Adams', 'Dr. Baker'],
        'pediatric': ['Dr. Clark', 'Dr. Davis'],
        'orthodontist': ['Dr. Evans', 'Dr. Frank'],
        'periodontist': ['Dr. Harris', 'Dr. Irwin'],
        'oral-pathologist': ['Dr. James', 'Dr. Kelly']
    }
};

// Show specialties based on selected association
function showSpecialties() {
    const association = document.getElementById('association').value;
    if (association) {
        document.getElementById('specialty-container').style.display = 'block';
    } else {
        document.getElementById('specialty-container').style.display = 'none';
        document.getElementById('doctor-container').style.display = 'none';
    }
}

// Show doctors based on selected specialty
function showDoctors() {
    const association = document.getElementById('association').value;
    const specialty = document.getElementById('specialty').value;
    const doctorSelect = document.getElementById('doctor');
    
    if (association && specialty) {
        doctorSelect.innerHTML = '<option value="" disabled selected>Select a doctor</option>';
        doctors[association][specialty].forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor;
            option.textContent = doctor;
            doctorSelect.appendChild(option);
        });
        document.getElementById('doctor-container').style.display = 'block';
    } else {
        document.getElementById('doctor-container').style.display = 'none';
    }
}

// Confirm appointment function with form submission logic
function confirmAppointment(event) {
    event.preventDefault();
    alert('Appointment confirmed!');
}

// JavaScript for profile dropdown functionality
document.getElementById('profile').addEventListener('click', function() {
    var dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// JavaScript for sign-out button
document.getElementById('sign-out').addEventListener('click', function() {
    if (confirm('Are you sure you want to sign out?')) {
        window.location.href = 'patient-dashboard.html';
    }
});

// Function to view patient details
function viewDetails(patientId) {
    var detailsDiv = document.getElementById(patientId);
    detailsDiv.style.display = detailsDiv.style.display === 'block' ? 'none' : 'block';
}

// Function to update patient details
function updateDetails(patientId) {
    var detailsDiv = document.getElementById(patientId);
    var currentDetails = detailsDiv.innerHTML;

    var newDetails = prompt("Update patient details:", currentDetails);
    if (newDetails !== null) {
        detailsDiv.innerHTML = newDetails;
    }

    detailsDiv.style.display = 'block';
}

// JavaScript for profile dropdown functionality
document.getElementById('profile').addEventListener('click', function() {
    var dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// JavaScript for sign-out button
document.getElementById('sign-out').addEventListener('click', function() {
    if (confirm('Are you sure you want to sign out?')) {
        window.location.href = 'doctor-dashboard.html';
    }
});

// Function to show the login form based on user type
function showLoginForm(userType) {
    var loginForm = document.getElementById('login-form');
    var patientForm = document.getElementById('patient-form');
    var doctorForm = document.getElementById('doctor-form');

    loginForm.style.display = 'block';

    if (userType === 'patient') {
        patientForm.style.display = 'block';
        doctorForm.style.display = 'none';
    } else if (userType === 'doctor') {
        doctorForm.style.display = 'block';
        patientForm.style.display = 'none';
    }
}

// Function to handle form submission for login
function submitForm(event, userType) {
    event.preventDefault();

    if (userType === 'patient') {
        var patientName = document.getElementById('patient-name').value;
        var patientPassword = document.getElementById('patient-password').value;
        console.log('Patient Name:', patientName);
        console.log('Patient Password:', patientPassword);
        window.location.href = 'patient-dashboard.html';

    } else if (userType === 'doctor') {
        var doctorName = document.getElementById('doctor-name').value;
        var doctorPassword = document.getElementById('doctor-password').value;
        console.log('Doctor Name:', doctorName);
        console.log('Doctor Password:', doctorPassword);
        window.location.href = 'doctor-dashboard.html';
    }
    
    alert(userType.charAt(0).toUpperCase() + userType.slice(1) + ' login submitted!');
}
