var modal = document.getElementById("modal");

    function openModal() {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };
