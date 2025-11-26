// dari line 1 sampe 12 itu pokok nya biar js nya ga jalan sebelum html nya ke load dan buat efek fade in
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeEls.forEach((el) => observer.observe(el));
  // ini buat carousel yang di achievement nya
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const track = document.querySelector(".carousel-track");
  const dotsContainer = document.querySelector(".carousel-dots");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const totalSlides = slides.length;
  // buat bikin tombol next sama prev nya sesuai jumlah slide
  if (dotsContainer && slides.length > 0) {
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }
  let dots = document.querySelectorAll(".dot");
  // buat update slide nya kalo di klik next atau prev atau di klik dot nya
  function updateCarousel() {
    if (!track) return;
    track.style.transform = `translateX(-${currentSlide * 100}%)`; // ini translatex tuh buat jajarin horizontal trus dikali 100% biar pas geserannya sesuai lebar slide
    dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }
  // ini gausah dijelasin ya pokok nya buat fungsi next sama prev nya button nya
  function nextSlide() {
    if (totalSlides === 0) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }
  function prevSlide() {
    if (totalSlides === 0) return;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }
  // kalo di klik bakal manggil fungsi next sama prev biar bisa geser slide nya
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  // ini biar carousel nya auto slide setiap 3000ms atau 3 detik
  let autoSlideInterval = null;
  if (totalSlides > 0) {
    autoSlideInterval = setInterval(nextSlide, 3000);
  }
  const carouselContainer = document.querySelector(".carousel-container");
  if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval); // kalo mouse nya hover di sertifkat nya nanti auto slide nya berhenti biar kalo ada yang tertarik bisa baca
    });
    carouselContainer.addEventListener("mouseleave", () => {
      if (totalSlides > 0) autoSlideInterval = setInterval(nextSlide, 3000); // kalo mouse nya udah ga hover lagi di sertifikat nya auto slide nya jalan lagi
    });
  }

  const sendBtn = document.getElementById("sendBtn");
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId); // ini buat nge scroll ke section yang di tuju kalo di klik di nav nya
      // biar scroll nya smooth dan ga instant kaya bawaan browser
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});


const kirimcontact = document.getElementById("kirim");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("msg");

  kirimcontact.addEventListener("click", () => {
    setInterval(() => {
    const nama = (namaInput.value = "");
    const email = (emailInput.value = "");
    const msg = (msgInput.value = "");
  }, 5);
});
