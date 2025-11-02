<script>
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("li");

  items.forEach(item => {
    // Hiệu ứng khi rê chuột vào
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#ffd700";
      item.style.transform = "scale(1.05)";
      item.style.transition = "all 0.3s ease";
      item.style.cursor = "pointer";
    });

    // Khi rời chuột ra
    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "#a18686";
      item.style.transform = "scale(1)";
    });

    // Khi click vào cầu thủ
    item.addEventListener("click", () => {
      const playerName = item.querySelector(".item")?.textContent || "Cầu thủ";
      // Gợi ý dùng console.log để test trước khi alert
      console.log("Bạn vừa chọn:", playerName);
      alert(`⚽ Bạn vừa chọn: ${playerName}`);
    });
  });
});
</script>
