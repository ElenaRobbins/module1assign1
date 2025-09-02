// Function to create a new support ticket
function createSupportTicket(name, issue) {
  // Make a simple ticket object
  var ticket = {
    number: generateTicketNumber(), // create a number
    name: name,
    issue: issue
  };
  return ticket; // give back the ticket object
}

// Function to display ticket info
function showTicket(ticket) {
  alert("Ticket Number: " + ticket.number + "\n" +
        "Name: " + ticket.name + "\n" +
        "Issue: " + ticket.issue);
}

// Function to search for a ticket by name
function searchTicketByName(name, ticketList) {
  for (var i = 0; i < ticketList.length; i++) {
    if (ticketList[i].name === name) {
      return ticketList[i]; // found the matching ticket
    }
  }
  return null; // not found
}

// Function to generate a simple ticket number
function generateTicketNumber() {
  // Generate a random number
  return Math.floor(Math.random() * 10000);
}