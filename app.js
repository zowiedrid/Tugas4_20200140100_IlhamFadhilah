// Data Pokemon
const pokemonData = [
  {
    name: "Pikachu",
    type: "Listrik",
    element: "Elektrik",
    image: "black-white/1.png",
  },
  {
    name: "Charizard",
    type: "Api / Terbang",
    element: "Api / Terbang",
    image: "black-white/2.png",
  },
  {
    name: "Squirtle",
    type: "Air",
    element: "Air",
    image: "black-white/100.png",
  },
  {
    name: "Bulbasaur",
    type: "Rumput",
    element: "Rumput",
    image: "black-white/4.png",
  },
];

// Fungsi untuk menampilkan data Pokemon ke dalam tabel
function displayPokemon(data) {
  const tbody = $("#pokemonTable");
  tbody.empty();
  data.forEach((pokemon) => {
    tbody.append(`
            <tr>
                <td class="border-t-2 border-gray-200 px-4 py-3">${pokemon.name}</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">${pokemon.type}</td>
                <td class="border-t-2 border-gray-200 px-4 py-3">${pokemon.element}</td>
                <td class="border-t-2 border-gray-200 px-4 py-3"><img src="${pokemon.image}" alt="${pokemon.name}" class="w-10 h-10"></td>
            </tr>
        `);
  });
}

// Fungsi untuk menangani filter
function handleFilter() {
  const search = $("#search");
  search.on("input", function () {
    const value = $(this).val().toLowerCase();
    const filteredData = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    displayPokemon(filteredData);
  });
}

// Menampilkan data Pokemon ke dalam tabel saat halaman dimuat
displayPokemon(pokemonData);

// Menangani filter
handleFilter();
