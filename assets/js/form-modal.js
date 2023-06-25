(() => {
    const refs = {
        openFormModalBtn: document.querySelector("[data-form-open]"),
        closeFormModalBtn: document.querySelector("[data-form-close]"),
        formModal: document.querySelector("[data-form]"),
    };

    refs.openFormModalBtn.addEventListener("click", toggleModal);
    refs.closeFormModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.formModal.classList.toggle("is-hidden");
    }
})();