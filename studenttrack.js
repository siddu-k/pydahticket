import { db } from './firebaseConfig.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Track tickets by PIN
document.getElementById('trackButton').addEventListener('click', async () => {
  const pin = document.getElementById('trackPin').value;
  
  if (pin) {
    const ticketsCollection = collection(db, 'tickets');
    const ticketQuery = query(ticketsCollection, where("pin", "==", pin));
    const ticketSnapshot = await getDocs(ticketQuery);
    
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = ''; // Clear previous results
    
    ticketSnapshot.forEach(doc => {
      const ticket = doc.data();
      const ticketItem = document.createElement('div');
      ticketItem.classList.add('ticket');
      ticketItem.innerHTML = `
      <p><strong>Subject:</strong> ${ticket.subject}</p>
      <p><strong>Status:</strong> ${ticket.status || 'On Hold'}</p>
      <p><strong>Problem:</strong> ${ticket.problem}</p>
      <p><strong>Name:</strong> ${ticket.name}</p>
      <p><strong>Email:</strong> ${ticket.email}</p>
      <p><strong>Phone:</strong> ${ticket.phone}</p>
    `;
    
      ticketList.appendChild(ticketItem);
    });
  } else {
    alert('Please enter a PIN.');
  }
});
