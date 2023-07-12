document.addEventListener("DOMContentLoaded", function() {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");

  openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});
