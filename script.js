// Imagens para mostrar
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a6ff40bdf0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
];

document.getElementById("showImages").addEventListener("click", () => {
  const container = document.getElementById("imageContainer");
  container.innerHTML = ""; // Limpa antes de mostrar

  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Imagem ${i+1}`;
    img.className = "image-appear";
    img.style.width = "200px";
    img.style.borderRadius = "12px";
    container.appendChild(img);

    // Efeito de aparição animada
    setTimeout(() => {
      img.classList.add("active");
    }, 300 * i);
  });
});
