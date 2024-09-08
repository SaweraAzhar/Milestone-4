// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Select form and resume container elements
    var form = document.getElementById('resumeForm');
    var resumeContainer = document.getElementById('resume');
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        // Collect form inputs
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var educationInput = document.getElementById('education');
        var experienceInput = document.getElementById('experience');
        var skillsInput = document.getElementById('skills');
        // Validate inputs
        if (!nameInput.value || !emailInput.value) {
            alert('Please fill in the required fields');
            return;
        }
        // Generate dynamic resume based on user input with editable content
        resumeContainer.innerHTML = "\n            <h2 contenteditable=\"true\" id=\"resumeName\">".concat(nameInput.value, "</h2>\n            <p contenteditable=\"true\" id=\"resumeEmail\"><strong>Email:</strong> ").concat(emailInput.value, "</p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\" id=\"resumeEducation\">").concat(educationInput.value ? educationInput.value : 'No education details provided.', "</p>\n            <h3>Work Experience</h3>\n            <p contenteditable=\"true\" id=\"resumeExperience\">").concat(experienceInput.value ? experienceInput.value : 'No work experience details provided.', "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\" id=\"resumeSkills\">").concat(skillsInput.value ? skillsInput.value : 'No skills details provided.', "</p>\n            <button id=\"saveButton\">Save Changes</button>\n        ");
        // Enable saving of edited content
        var saveButton = document.getElementById('saveButton');
        saveButton.addEventListener('click', function () {
            var _a;
            // Save updated content back to the form
            nameInput.value = document.getElementById('resumeName').textContent || '';
            emailInput.value = ((_a = document.getElementById('resumeEmail').textContent) === null || _a === void 0 ? void 0 : _a.replace('Email: ', '')) || '';
            educationInput.value = document.getElementById('resumeEducation').textContent || '';
            experienceInput.value = document.getElementById('resumeExperience').textContent || '';
            skillsInput.value = document.getElementById('resumeSkills').textContent || '';
            alert('Changes saved!');
        });
    });
});
