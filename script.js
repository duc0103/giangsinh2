const showButton = document.getElementById("showButton");
const christmasMessage = document.getElementById("as");

showButton.addEventListener("click", function () {
  if (christmasMessage.style.display === "none") {
    christmasMessage.style.display = "block";
  } else {
    var audio = document.getElementById("background-music");
    audio.play();
    christmasMessage.style.display = "none";
  }
});
document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("as").style.display = "block";
});

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  // Khi bắt đầu ấn chuột
  card.addEventListener('mousedown', function (e) {
    e.preventDefault(); // Ngừng hành động mặc định như bôi đen

    // Thêm lớp 'active' để kích hoạt các hành động khi giữ chuột
    this.classList.add('active');
  });

  // Khi thả chuột
  card.addEventListener('mouseup', function () {
    this.classList.remove('active');
  });

  // Nếu chuột di chuyển mà không thả (dành cho tình huống di chuyển chuột)
  card.addEventListener('mouseleave', function () {
    this.classList.remove('active');
  });
});

document.getElementById("showButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  button.classList.add("hidden");

  guideInfo.classList.remove("hidden");
  guideInfo.classList.add("show");
});

document.getElementById("showButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  button.classList.add("hidden");

  guideInfo.classList.remove("hidden");
  guideInfo.classList.add("show");
});

document.getElementById("closeButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  guideInfo.classList.remove("show");
  setTimeout(function () {
    guideInfo.classList.add("hidden");
    button.classList.remove("hidden");
  }, 500);
});

const treeIcon = document.querySelector(".tree-icon");

treeIcon.addEventListener("mouseenter", function () {
  treeIcon.classList.add("shake-animation");

  treeIcon.addEventListener("animationend", function () {
    treeIcon.classList.remove("shake-animation");
  });
});

function createSnowflakes() {
  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add("snowflakes");
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");


    const size = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 3}s`;
    snowflake.style.animationDelay = `${Math.random() * 20}s`;
    snowflake.style.setProperty("--random-x", Math.random());

    snowflakesContainer.appendChild(snowflake);
  }
}
document.getElementById("startMusic").addEventListener("click", function () {
  var audio = document.getElementById("background-music");
  audio.play(); // Phát nhạc khi người dùng nhấn nút
});

window.onload = function() {
  var audio = document.getElementById('background-music');
  audio.play(); // Phát nhạc nền
  createSnowflakes(); // Khởi tạo hiệu ứng tuyết
};
