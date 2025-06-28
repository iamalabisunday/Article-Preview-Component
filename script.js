// Elements section
const shareBtn = document.querySelector(`.share`);

// Logics Section
shareBtn.addEventListener(`click`, () => {
  // for desktop view
  const btn = shareBtn.closest(`.overlay-share-container`).querySelector(`.overlay-position`);

  //toggle: it on and off the hidden class
  btn.classList.toggle(`hidden`);
});

// //////////////////Mobile Section/////////////////////

const mobileShareBtn = document.querySelector(".mobile-share-btn");

mobileShareBtn.addEventListener("click", () => {
  const profileSection = document.querySelector(".profile-share");
  const overlayShareView = document.querySelector(".overlay-share-mobile-view");

  if (profileSection.classList.contains("overlayHidden")) {
    overlayShareView.classList.add("overlayHidden");
    profileSection.classList.remove("overlayHidden");
  } else {
    profileSection.classList.add("overlayHidden");
    overlayShareView.classList.remove("overlayHidden");
  }
});
