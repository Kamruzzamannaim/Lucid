const scriptURL =
  "https://script.google.com/macros/s/AKfycbwYnWlIsnlfExgfjDuLzA_cKibGQFV3Fg3lZJkcBn88NQGRRsZQhNsddp1z7KSEwp7T_g/exec";

const form = document.forms["sale-form"];
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
