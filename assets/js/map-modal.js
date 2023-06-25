(() => {
    const refs = {
        openMapModalBtn: document.querySelector("[data-modal-open]"),
        closeMapModalBtn: document.querySelector("[data-modal-close]"),
        mapModal: document.querySelector("[data-modal]"),
    };

    refs.openMapModalBtn.addEventListener("click", toggleModal);
    refs.closeMapModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.mapModal.classList.toggle("is-hidden");
    }
})();