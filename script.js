const revealButton = document.querySelector(".reveal-button");
const surpriseSection = document.querySelector("#surprise");
const heroVideos = document.querySelectorAll(".hero-video");

const revealSurprise = () => {
  surpriseSection.classList.remove("hidden");
  surpriseSection.scrollIntoView({ behavior: "smooth", block: "center" });
};

revealButton.addEventListener("click", revealSurprise);

const revealAfterDelay = () => {
  if (surpriseSection.classList.contains("hidden")) {
    revealSurprise();
  }
};

setTimeout(revealAfterDelay, 12000);

heroVideos.forEach((video) => {
  video.addEventListener("ended", revealAfterDelay, { once: true });
});
