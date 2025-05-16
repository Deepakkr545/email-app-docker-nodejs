document.getElementById('emailForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.email.value;

  fetch('/save-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email })
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    this.reset();
  })
  .catch(err => alert('Failed to save email'));
});

document.getElementById('showEmails').addEventListener('click', function () {
  fetch('/emails')
    .then(res => res.json())
    .then(data => {
      const list = data.emails.map(e => `<li>${e}</li>`).join('');
      document.getElementById('emailList').innerHTML = `<ul>${list}</ul>`;
    });
});
