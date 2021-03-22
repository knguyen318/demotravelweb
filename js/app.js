/** Handle Block reveal landing page-Jquery */
const t1 = new TimelineMax({ paused: true });

t1.to(".block", 1.1, {
  width: "25%",
  ease: Power4.easeInOut,
});

t1.staggerFrom(
  ".menu ul li",
  0.8,
  { y: 40, opacity: 0, ease: Power2.easeOut },
  0.2
);

t1.reverse();
$(document).on("click", ".menu-btn", function () {
  t1.reversed(!t1.reversed());
});

/** Handle modal */
const modalBg = document.querySelector(".modal-bg");

// Handle Adding tour modal
const addBtnModal = document.querySelector(".add-btn");

addBtnModal.addEventListener("click", () => {
  modalBg.classList.add("modal-bg-active");
});
// Handle Closing Adding tour modal
const addModalClose = document.querySelector(".add-modal-close");
addModalClose.addEventListener("click", () => {
  modalBg.classList.remove("modal-bg-active");
});


