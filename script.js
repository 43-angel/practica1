function generateTicket(event) {
  event.preventDefault();

  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const github = document.getElementById('github').value;
  const avatarFile = document.getElementById('avatar').files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const ticketHTML = `
      <div class="ticket">
        <h2>Conferencia de codificación</h2>
        <p>31 de Enero, 2025 / Austin, TX</p>
        <div style="display: flex; align-items: center; gap: 1rem; margin-top: 1rem;">
          <img src="${e.target.result}" alt="avatar" />
          <div>
            <h3>${fullname}</h3>
            <p>@${github}</p>
          </div>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: #aaa;">
          Hemos enviado tu boleto a <span style="color: #ff5c5c;">${email}</span>
        </p>
      </div>
    `;
    document.getElementById('ticketOutput').innerHTML = ticketHTML;
  };

  if (avatarFile) {
    reader.readAsDataURL(avatarFile);
  } else {
    alert("Por favor, sube una imagen de avatar.");
  }
}
