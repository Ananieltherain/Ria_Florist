feather.replace();

// toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// click di luar side bar untuk close nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}





const FAQData = [
  {
    question: "Apakah Ria Florist menerima pesanan bunga untuk acara tertentu?",
    answer: [
      "Tentu saja, kami menerima pesanan bunga untuk berbagai acara seperti pernikahan, ulang tahun, acara perusahaan, dan lainnya."
    ],
  },
  {
    question: "Berapa lama proses pengerjaan hingga proses pengiriman?",
    answer: [
      "Waktu pengiriman bervariasi tergantung pada jarak dan jenis pesanan. Namun, kami berusaha untuk melakukan pengiriman sesuai permintaan dengan sebaik mungkin.Tidak, ini contoh jawaban hanya satu poin, kita hanya perlu memperhatikan bagaimana tanda koma digunakan memisahkan poin jawaban.",
    ],
  },
  {
    question: "Apakah Ria Florist memiliki opsi bunga segar lain?",
    answer: [
      "Untuk jenis bunga lain bisa ditanyakan via Whatsapp, Anda dapat menghubungi kontak yang sudah tersedia di website ini."
    ],
  },
  {
    question: "Apakah ada jaminan bunga akan aman dan tepat waktu?",
    answer: [
      'Kami menjamin bahwa bunga yang kami kirimkan akan tiba dalam kondisi prima dan sesuai dengan standar kualitas yang tinggi.',
    ],
  },
  {
    question: "Apakah bisa memesan bunga diluar jam operasional toko?",
    answer: [
      'Kami dengan senang hati untuk menerima pesanan bunga kapan saja.',
    ],
  },
];

const FAQContainer = document.querySelector(".faq-container");

const removeAllExpanded = () => {
  const questionContainers = document.querySelectorAll(
    ".faq-container .question-container"
  );

  questionContainers.forEach((q) => {
    q.classList.remove("expanded");
    const answerContainer = q.querySelector(".answer-container");
    answerContainer.style.maxHeight = "0";
  });
};

const displayFAQ = () => {
  FAQData.forEach((q) => {
    const answerHTML = q.answer
      .map(
        (a) => `<div class="answer">
        <span class="answer-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        ${a}
      </div>`
      )
      .join("");

    const html = `<div class="question">
          ${q.question}
          <span class="question-icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <div class="answer-container">
          ${answerHTML}
        </div>`;

    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");
    questionContainer.innerHTML = html;

    FAQContainer.appendChild(questionContainer);

    const question = questionContainer.querySelector(".question");

    question.addEventListener("click", () => {
      if (!questionContainer.classList.contains("expanded")) {
        removeAllExpanded();
      }

      questionContainer.classList.toggle("expanded");
      const isExpanded = questionContainer.classList.contains("expanded");

      const answerContainer =
        questionContainer.querySelector(".answer-container");
      const contentHeight = answerContainer.scrollHeight;
      answerContainer.style.maxHeight = isExpanded ? `${contentHeight}px` : "0";
    });
  });
};

displayFAQ();
