function changeMatrixOrder() {
    clearMatrix();
    var order = document.getElementById("matrix-order").value;
    if (order === "2") {
        document.getElementById("matrix-input-2").style.display = "block";
        document.getElementById("matrix-input-3").style.display = "none";

    } else if (order === "3") {
        document.getElementById("matrix-input-2").style.display = "none";
        document.getElementById("matrix-input-3").style.display = "block";
    }
}

function calculateDeterminant() {
    var order = document.getElementById("matrix-order").value;
    if (order === "2") {
        var a = parseInt(document.getElementById("a").value);
        var b = parseInt(document.getElementById("b").value);
        var c = parseInt(document.getElementById("c").value);
        var d = parseInt(document.getElementById("d").value);

        var determinant = (a * d) - (b * c);

        document.getElementById("result").innerHTML = "Determinan: " + determinant;
        var stepsDiv = document.getElementById('steps');
stepsDiv.innerHTML = `
    <h3>Steps:</h3>
    <p>${a}.${d} - ${b}.${c} = ${determinant}</p>
`;


    } else if (order === "3") {
        var a1 = parseInt(document.getElementById("a1").value);
        var a2 = parseInt(document.getElementById("a2").value);
        var a3 = parseInt(document.getElementById("a3").value);
        var b1 = parseInt(document.getElementById("b1").value);
        var b2 = parseInt(document.getElementById("b2").value);
        var b3 = parseInt(document.getElementById("b3").value);
        var c1 = parseInt(document.getElementById("c1").value);
        var c2 = parseInt(document.getElementById("c2").value);
        var c3 = parseInt(document.getElementById("c3").value);

        var determinant = a1 * b2 * c3 + a2 * b3 * c1 + a3 * b1 * c2 - a3 * b2 * c1 - a1 * b3 * c2 - a2 * b1 * c3;

        document.getElementById("result").innerHTML = "Determinan: " + determinant;
        var stepsDiv = document.getElementById('steps1');
stepsDiv.innerHTML = `
    <h3>Steps:</h3>
    <p>${a1}.${b2}.${c3} + ${a2}.${b3}.${c1} + ${a3}.${b1}.${c2} - ${a3}.${b2}.${c1} - ${a1}.${b3}.${c2} - ${a2}.${b1}.${c3} = ${determinant}</p>
`;


    }
}

function clearMatrix() {
    if (document.getElementById("matrix-order").value === "2") {
        document.getElementById("a").value = "";
        document.getElementById("b").value = "";
        document.getElementById("c").value = "";
        document.getElementById("d").value = "";
    } else if (document.getElementById("matrix-order").value === "3") {
        document.getElementById("a1").value = "";
        document.getElementById("a2").value = "";
        document.getElementById("a3").value = "";
        document.getElementById("b1").value = "";
        document.getElementById("b2").value = "";
        document.getElementById("b3").value = "";
        document.getElementById("c1").value = "";
        document.getElementById("c2").value = "";
        document.getElementById("c3").value = "";
    }

    document.getElementById("result").innerHTML = "";
    document.getElementById("steps").innerHTML = "";
    document.getElementById("steps1").innerHTML = "";

}


// Function to add smooth scroll behavior to anchor links
function addSmoothScrolling() {
const links = document.querySelectorAll('nav a, #startButton'); // Sisipkan #startButton di sini

links.forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          // Scroll smoothly to the target element
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block:'start'
          });
      }
  });
});
}


// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
addSmoothScrolling();
});

document.addEventListener('DOMContentLoaded', function() {
addSmoothScrolling();
});

// animasi zoom
document.addEventListener('DOMContentLoaded', function() {
var profiles = document.querySelectorAll('.profile');

profiles.forEach(function(profile) {
  profile.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
  });

  profile.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
  });
});
});

document.addEventListener('DOMContentLoaded', function() {
  var profileShelva = document.querySelector('.profile-shelva');

  profileShelva.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
  });

  profileShelva.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
  });
});


function kirimData() {
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var pesanInput = document.getElementById("pesan");

if (
  nameInput.value.trim() === "" ||
  emailInput.value.trim() === "" ||
  pesanInput.value.trim() === ""
) {
  document.getElementById("statusPesan").textContent =
    "Harap lengkapi semua bidang.";
  return;
}

if (!validateEmail(emailInput.value.trim())) {
  document.getElementById("statusPesan").textContent =
    "Format email tidak valid.";
  return;
}

var xhr = new XMLHttpRequest();
var url =
  "https://script.google.com/macros/s/AKfycbwV1FAt-db3_pY23rjbENZBa5HTEIF7a2X8PrU-sC0jylbTuIKca7-fy6QYH0-owKgh-g/exec";
var formData = new FormData(document.getElementById("formfeedback"));

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      document.getElementById("statusPesan").textContent =
        "Pesan Anda Berhasil Terkirim, Terimakasih :)";
      document.getElementById("formfeedback").reset(); // Reset form setelah berhasil terkirim
    } else {
      document.getElementById("statusPesan").textContent =
        "Terjadi kesalahan. Silakan coba lagi.";
    }
  }
};

xhr.open("POST", url, true);
xhr.send(formData);
}

function validateEmail(email) {
var re = /\S+@\S+\.\S+/;
return re.test(email);
}
window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector('nav');
var sticky = navbar.offsetTop;

function stickyNavbar() {
if (window.pageYOffset >= sticky) {
navbar.classList.add('sticky');
} else {
navbar.classList.remove('sticky');
}
}

AOS.init({
once: true,
});

// teks-1
function animateText() {
  const h3 = document.querySelector('.profile h3');
  h3.classList.remove('hidden');
}

// teks-1