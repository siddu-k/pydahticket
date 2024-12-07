import { db } from './firebaseConfig.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

document.getElementById('ticketForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const subject = document.getElementById('subject').value;

  // Check if the subject is selected
  if (!subject) {
    alert('Please select a subject.');
    return;
  }

  const ticket = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    pin: document.getElementById('pin').value,
    problem: document.getElementById('problem').value,
    subject: subject,  // Capturing the selected subject
  };

  try {
    await addDoc(collection(db, 'tickets'), ticket);
    alert('Ticket submitted successfully!');
    document.getElementById('ticketForm').reset();
  } catch (error) {
    console.error('Error submitting ticket:', error);
    alert('Failed to submit the ticket. Try again later.');
  }
});
