// Imagens interativas do LIFE RP
const images = [
  { src: "IMAGE_1_URL", caption: "Bandeira LIFE RP" },
  { src: "IMAGE_2_URL", caption: "Personagem Guardião" },
  { src: "IMAGE_3_URL", caption: "Personagem em ação" },
  { src: "IMAGE_4_URL", caption: "Personagem elegante" }
];

function showImages(start = 0, count = 2) {
  const gallery = document.getElementById("imageGallery");
  for (let i = start; i < Math.min(images.length, start+count); i++) {
    const card = document.createElement("div");
    card.className = "image-card";
    const img = document.createElement("img");
    img.src = images[i].src;
    img.alt = images[i].caption;
    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = images[i].caption;
    card.appendChild(img);
    card.appendChild(caption);
    gallery.appendChild(card);

    setTimeout(() => card.classList.add("active"), 400 * (i-start));
  }
}

// Inicialmente mostra 2 imagens, depois mostra todas ao clicar
let shown = 0;
document.addEventListener("DOMContentLoaded", () => {
  showImages(shown, 2);
  shown += 2;
  document.getElementById("verMais").addEventListener("click", () => {
    showImages(shown, images.length-shown);
    shown = images.length;
    document.getElementById("verMais").disabled = true;
    document.getElementById("verMais").textContent = "Todas imagens exibidas!";
  });
});

// Troque IMAGE_X_URL pelos links das imagens do chat:
// Imagem 1: Bandeira LIFE RP
// Imagem 2: Personagem Guardião
// Imagem 3: Personagem em ação
// Imagem 4: Personagem elegante
