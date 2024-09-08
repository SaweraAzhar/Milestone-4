// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select form and resume container elements
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeContainer = document.getElementById('resume') as HTMLElement;

    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload
        
        // Collect form inputs
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const educationInput = document.getElementById('education') as HTMLInputElement;
        const experienceInput = document.getElementById('experience') as HTMLInputElement;
        const skillsInput = document.getElementById('skills') as HTMLInputElement;

        // Validate inputs
        if (!nameInput.value || !emailInput.value) {
            alert('Please fill in the required fields');
            return;
        }

        // Generate dynamic resume based on user input with editable content
        resumeContainer.innerHTML = `
            <h2 contenteditable="true" id="resumeName">${nameInput.value}</h2>
            <p contenteditable="true" id="resumeEmail"><strong>Email:</strong> ${emailInput.value}</p>
            <h3>Education</h3>
            <p contenteditable="true" id="resumeEducation">${educationInput.value ? educationInput.value : 'No education details provided.'}</p>
            <h3>Work Experience</h3>
            <p contenteditable="true" id="resumeExperience">${experienceInput.value ? experienceInput.value : 'No work experience details provided.'}</p>
            <h3>Skills</h3>
            <p contenteditable="true" id="resumeSkills">${skillsInput.value ? skillsInput.value : 'No skills details provided.'}</p>
            <button id="saveButton">Save Changes</button>
        `;

        // Enable saving of edited content
        const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
        saveButton.addEventListener('click', () => {
            // Save updated content back to the form
            nameInput.value = (document.getElementById('resumeName') as HTMLElement).textContent || '';
            emailInput.value = (document.getElementById('resumeEmail') as HTMLElement).textContent?.replace('Email: ', '') || '';
            educationInput.value = (document.getElementById('resumeEducation') as HTMLElement).textContent || '';
            experienceInput.value = (document.getElementById('resumeExperience') as HTMLElement).textContent || '';
            skillsInput.value = (document.getElementById('resumeSkills') as HTMLElement).textContent || '';

            alert('Changes saved!');
        });
    });
});
