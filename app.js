// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (target) {
      const targetPosition = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Form submission handling with enhanced feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    country: document.getElementById("country").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    company: document.getElementById("company").value,
    investmentAmount: document.getElementById("investmentAmount").value,
    message: document.getElementById("message").value,
    service: document.querySelector('input[name="service"]:checked')?.value,
    minInvestmentAware: document.getElementById("minInvestment").checked,
  };

  // Basic validation
  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!formData.service) {
    alert("Please select a service option.");
    return;
  }

  // Simulate form submission
  const submitBtn = document.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin me-2"></i>Submitting...';
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    submitBtn.classList.add("submit-success");
    submitBtn.innerHTML =
      '<i class="fas fa-check me-2"></i>Submitted Successfully!';

    setTimeout(() => {
      alert(
        `Thank you ${formData.name}! We have received your inquiry and will get back to you within 24-48 hours. A confirmation email will be sent to ${formData.email}.`
      );

      // Reset form
      document.getElementById("contactForm").reset();

      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.classList.remove("submit-success");

      // Clear radio button selections
      document.querySelectorAll('input[name="service"]').forEach((input) => {
        input.checked = false;
      });
    }, 1000);
  }, 2000);
});

// Add navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Enhanced form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\+]?[1-9][\d]{0,15}$/;
  return re.test(phone.replace(/\s/g, ""));
}

// Real-time validation
document.getElementById("email").addEventListener("blur", function () {
  if (this.value && !validateEmail(this.value)) {
    this.style.borderColor = "#dc3545";
    this.style.backgroundColor = "#fff5f5";
  } else {
    this.style.borderColor = "#E5E7EB";
    this.style.backgroundColor = "";
  }
});

document.getElementById("mobile").addEventListener("blur", function () {
  if (this.value && !validatePhone(this.value)) {
    this.style.borderColor = "#dc3545";
    this.style.backgroundColor = "#fff5f5";
  } else {
    this.style.borderColor = "#E5E7EB";
    this.style.backgroundColor = "";
  }
});
