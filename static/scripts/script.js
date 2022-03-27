/*  Show privacy policy with JS Modal    */

// Get the modal
/* var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}; */

/*  -----------  CONTACT FORM  -----------  */
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = JSON.stringify({
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  });

  fetch("/mail.php", {
    method: "POST",
    body: data,
  }).then((response) => {
    if (response.ok) {
      nimi = document.getElementById("name-field").value;
      document.getElementById("contact-form").reset();

      document.getElementById(
        "message"
      ).innerHTML = `<h3>Aitäh <b>${nimi}</b>, võtame teiega peatselt ühendust!</h3>`;
      console.log("Email sent");
    }
  });
});
