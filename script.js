<script>
let lastScroll = 0;
const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scrolling down -> hide header
    header.style.top = "-120px";  // move header up
  } else {
    // scrolling up -> show header
    header.style.top = "0";
  }

  lastScroll = currentScroll;
});
</script>


