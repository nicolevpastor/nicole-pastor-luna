const today = new Date();
const thisYear = today.getFullYear();

// Create/select <footer> and append to <body> if missing
let footer = document.querySelector('footer');
if (!footer) {
  footer = document.createElement('footer');
  document.body.appendChild(footer);
}

// Avoid duplicates on live-reload
const old = footer.querySelector('.copyright');
if (old) old.remove();

const copyright = document.createElement('p');
copyright.className = 'copyright';
copyright.innerHTML = `&copy; ${thisYear} Nicole Pastor`; // change name if you want
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "React", "Supabase", "Git", "Figma"];

// Your HTML already has <section id="Skills"> (capital S)
const skillsSection = document.querySelector('#Skills');
if (skillsSection) {
  // Find existing <ul> or create one
  let skillsList = skillsSection.querySelector('ul');
  if (!skillsList) {
    skillsList = document.createElement('ul');
    skillsSection.appendChild(skillsList);
  }
  skillsList.classList.add('skills-list');

  // Clear any old items if re-running
  skillsList.innerHTML = '';

  // Populate <li> items
  for (const s of skills) {
    const li = document.createElement('li');
    li.textContent = s;
    skillsList.appendChild(li);
  }
}
