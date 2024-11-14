// Hàm tạo bong bóng khí ngẫu nhiên
function createBubbles() {
  const aquarium = document.getElementById("aquarium");

  // Tạo 5 bong bóng khí mỗi lần nhấn nút
  for (let i = 0; i < 5; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Đặt vị trí ngẫu nhiên cho bong bóng khí
    bubble.style.left = `${Math.random() * 100}%`; // Vị trí ngẫu nhiên ngang
    bubble.style.animationDuration = `${Math.random() * 3 + 2}s`; // Thời gian bay ngẫu nhiên từ 2 đến 5 giây

    // Thêm bong bóng vào hồ cá
    aquarium.appendChild(bubble);
  }
}

// Lắng nghe sự kiện khi nhấn nút thêm cá
document.getElementById("addFishBtn").addEventListener("click", () => {
  const aquarium = document.getElementById("aquarium");

  // Thêm cá mới vào hồ cá
  const newFish = document.createElement("img");
  newFish.src = "image/ca1.html.png"; // Đường dẫn ảnh cá mới
  newFish.alt = "New Fish";
  newFish.classList.add("object", "new-fish");
  newFish.style.left = `${Math.random() * 800}px`; // Vị trí ngẫu nhiên trong hồ
  newFish.style.top = `${Math.random() * 400}px`;
  aquarium.appendChild(newFish);

  // Gọi hàm tạo bong bóng khí ngẫu nhiên
  createBubbles();
});
