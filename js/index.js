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
const messageForm = document.forms['leave_message']; // select by form name


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


  if (messageForm) {
  messageForm.addEventListener('submit', (event) => {
   
    event.preventDefault();

    // grab values
    const usersName = event.target.usersName.value.trim();
    const usersEmail = event.target.usersEmail.value.trim();
    const usersMessage = event.target.usersMessage.value.trim();

    console.log({ usersName, usersEmail, usersMessage });

   
    const messageSection = document.querySelector('#messages');
    if (messageSection) {
      // find the <ul> inside #messages
      let messageList = messageSection.querySelector('ul');
      if (!messageList) {
        messageList = document.createElement('ul');
        messageSection.appendChild(messageList);
      }

      const newMessage = document.createElement('li');

    
      newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>:
        <span>${usersMessage}</span>
      `;

      // "remove" button
      const removeButton = document.createElement('button');
      removeButton.type = 'button';
      removeButton.textContent = 'remove';

      // when clicked it will remove this list item
      removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode; // parent <li>
        entry.remove();
      });

      // attach button to the <li> and the <li> to the list
      newMessage.appendChild(removeButton);
      messageList.appendChild(newMessage);
    }

   
    messageForm.reset();
  });     



  }




}
