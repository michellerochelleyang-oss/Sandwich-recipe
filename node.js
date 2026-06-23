const sandwichData = [
  {
    nama: "Classic Sandwich",
    gambar: "Img/images (3).jpg",
    deskripsi: "Sandwich sederhana dengan keju, selada, dan tomat.",
    bahan: [
      "2 lembar roti tawar",
      "1 lembar keju",
      "2 lembar selada",
      "2 iris tomat",
      "mayones secukupnya"
    ],
    langkah: [
      "Panggang roti sebentar.",
      "Oleskan mayones pada roti.",
      "Susun selada, keju, dan tomat.",
      "Tutup dengan roti kedua.",
      "Potong menjadi dua bagian."
    ]
  },
  {
    nama: "Chicken Sandwich",
    gambar: "Img/images (3).jpg",
    deskripsi: "Sandwich ayam simpel, lebih variatif namun efisien. Cocok buat sarapan cepat.",
    bahan: [
      "2 lembar roti tawar",
      "1 lembar keju",
      "2 lembar selada",
      "2 potong ayam panggang dada",
      "mayones secukupnya"
    ],
    langkah: [
      "Panggang roti sebentar.",
      "Oleskan mayones pada roti.",
      "Susun selada, keju, dan ayam panggang.",
      "Tutup dengan roti kedua.",
      "Potong menjadi dua bagian.",
      "Lalu sajikan."
    ]
  },
  {
    nama: "Egg Sandwich",
    gambar: "Img/images (3).jpg",
    deskripsi: "Sandwich telur simpel, lebih variatif namun efisien. Cocok buat sarapan cepat.",
    bahan: [
      "2 lembar roti tawar",
      "3 potong telur rebus yang telah ditumbuk",
      "mayones secukupnya",
      "Saus tomat dan sambal seperlunya"
    ],
    langkah: [
      "Panggang roti sebentar.",
      "Oleskan mayones pada roti.",
      "Susun telur rebus dan mayones.",
      "Tutup dengan roti kedua.",
      "Potong menjadi dua bagian.",
      "Lalu sajikan."
    ]
  }
];

const recipeCard = document.getElementById("recipe-card");

function bringTheRecipe(index) {
  const sandwich = sandwichData[index];

  recipeCard.innerHTML = `
    <img src="${sandwich.gambar}" alt="${sandwich.nama}">
    <h2>${sandwich.nama}</h2>
    <p>${sandwich.deskripsi}</p>

    <h3>Bahan</h3>
    <ul>
      ${sandwich.bahan.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <h3>Cara Membuat</h3>
    <ol>
      ${sandwich.langkah.map(item => `<li>${item}</li>`).join("")}
    </ol>
  `;
}

bringTheRecipe(0);