// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form with Success Message
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // 🚀 prevents redirect
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xqalrzbq", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      statusMsg.innerText = "✅ Thank you! I’ll reply soon.";
      statusMsg.className = "status success";
      statusMsg.style.display = "block";
      form.reset();
    } else {
      statusMsg.innerText = "❌ Oops! Something went wrong.";
      statusMsg.className = "status error";
      statusMsg.style.display = "block";
    }
  } catch (error) {
    statusMsg.innerText = "⚠️ Network error. Try again later.";
    statusMsg.className = "status error";
    statusMsg.style.display = "block";
  }
});

