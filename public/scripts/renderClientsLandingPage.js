const renderClientsLandingPage = function(data) {
  $('#clients-landing').empty();

  const newTemplateString = `
  <div id='clientsLanding'>
    <h2 id='clients-landing-text'>WELCOME TO TAKEOUT</h2>
  </div>
  `;
  $("#clients-landing").append(newTemplateString);
};
