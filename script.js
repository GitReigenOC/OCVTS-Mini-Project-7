const animeList = [
    {
        id: 1,
        title: "Frieren: Beyond Journey's End",
        category: "Fantasy",
        rating: 9.3,
        year: 2023,
        studio: "Madhouse",
        episodes: 28,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzSfPG18jtPvkS-Ujpey0c_y6h4UEPMa47KS_Evv4BQ&s=10",
        description: "An elven mage reflects on mortality and human connections after her adventuring party defeats the Demon King.",
        synopsis: "After a ten-year quest alongside the hero Himmel, the nearly immortal elf Frieren embarks on a new journey to fulfill old promises and truly understand the fleeting lives of the friends she once traveled with."
    },
    {
        id: 2,
        title: "Jujutsu Kaisen",
        category: "Action",
        rating: 8.7,
        year: 2020,
        studio: "MAPPA",
        episodes: 47,
        image: "https://images.squarespace-cdn.com/content/v1/5d9d1703d9e421160e641007/eb893437-a35e-4612-9da2-deaa22e1bbb0/Andris1.jpg",
        description: "A high schooler swallows a cursed talisman and joins a secret organization of Jujutsu Sorcerers.",
        synopsis: "Yuji Itadori becomes the host of Ryomen Sukuna, the King of Curses. To protect others and control his newfound powers, he enrolls at Tokyo Jujutsu High to hunt down the remaining cursed fingers."
    },
    {
        id: 3,
        title: "Steins;Gate",
        category: "Sci-Fi",
        rating: 9.1,
        year: 2011,
        studio: "White Fox",
        episodes: 24,
        image: "https://m.media-amazon.com/images/M/MV5BYzczNzdhYWItNmJhZi00NmMxLTk4ZWQtMzdhYjZmYzk3NWUyXkEyXkFqcGc@._V1_.jpg",
        description: "An eccentric scientist accidentally invents a microwave capable of sending text messages into the past.",
        synopsis: "Rintaro Okabe and his lab members discover time-altering technology in Akihabara, only to attract the attention of a shadowy organization and trigger devastating butterfly effects across timelines."
    },
    {
        id: 4,
        title: "Bocchi the Rock!",
        category: "Slice of Life",
        rating: 8.8,
        year: 2022,
        studio: "CloverWorks",
        episodes: 12,
        image: "https://a.storyblok.com/f/178900/1280x1280/0fbe374367/bocchi-the-rock-2nd-anniversary-illustration.jpg/m/filters:quality(95)format(webp)",
        description: "An extremely anxious introvert dreams of playing guitar in a band and gets recruited into Kessoku Band.",
        synopsis: "Hitori Gotoh spent middle school practicing guitar alone in her closet. When she is spontaneously invited to fill in for a live show, she must overcome severe social anxiety to perform on stage."
    },
    {
        id: 5,
        title: "Attack on Titan",
        category: "Action",
        rating: 9.1,
        year: 2013,
        studio: "Wit Studio / MAPPA",
        episodes: 94,
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg",
        description: "Humanity fights for survival behind massive walls against gigantic man-eating humanoids.",
        synopsis: "After his hometown is breached and his mother is killed, Eren Yeager vows to eradicate every Titan alongside Mikasa Ackerman and Armin Arlert, uncovering dark secrets about the world outside the walls."
    },
    {
        id: 6,
        title: "Cyberpunk: Edgerunners",
        category: "Sci-Fi",
        rating: 8.6,
        year: 2022,
        studio: "Studio Trigger",
        episodes: 10,
        image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Cyberpunk_Edgerunners_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        description: "A street kid in a technology-obsessed metropolis becomes a mercenary outlaw known as an edgerunner.",
        synopsis: "After losing everything in a drive-by shooting, David Martinez installs military-grade cyberware and joins a crew of mercenaries navigating the dangerous underworld of Night City."
    },
    {
        id: 7,
        title: "Dungeon Meshi (Delicious in Dungeon)",
        category: "Fantasy",
        rating: 8.6,
        year: 2024,
        studio: "Studio Trigger",
        episodes: 24,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj91xla8hqRC4_qHvZFeDCWH29k7TtlKBnIBph6hLwVg&s=10",
        description: "A broke party of adventurers survives a perilous dungeon crawl by cooking and eating the monsters.",
        synopsis: "To rescue their teammate from a red dragon before she is digested, Laios and his companions team up with a dwarf chef to turn slimes, basilisks, and mimics into gourmet meals."
    },
    {
        id: 8,
        title: "Spy x Family",
        category: "Slice of Life",
        rating: 8.5,
        year: 2022,
        studio: "Wit Studio / CloverWorks",
        episodes: 37,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJfTdjIoahdzddfGvYZ711G26eyJLy795feRsA7xTl-JDVzurkAT-TVtd&s=10",
        description: "A master spy, an assassin, and a telepathic child form a fake family while hiding their secret identities.",
        synopsis: "Agent Twilight must infiltrate an elite private school to maintain peace between rival nations, unaware that his adoptive daughter can read minds and his pretend wife is a deadly operative."
    }
];

const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const detailsModal = document.getElementById("detailsModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModal");

let currentCategory = "All";
let currentSearch = "";
let currentSort = "default";

function renderGallery(items) {
    galleryGrid.innerHTML = "";

    if (items.length === 0) {
        galleryGrid.innerHTML = `<p class="empty-message">No anime matched your filter or search criteria.</p>`;
        return;
    }

    items.forEach((anime) => {
        const card = document.createElement("article");
        card.className = "anime-card";

        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}" class="card-img">
            <div class="card-body">
                <div class="card-meta">
                    <span class="category-tag">${anime.category}</span>
                    <span class="rating">★ ${anime.rating}</span>
                </div>
                <h2 class="card-title">${anime.title}</h2>
                <p class="card-desc">${anime.description}</p>
                <button class="details-btn" data-id="${anime.id}">View Details</button>
            </div>
        `;

        const btn = card.querySelector(".details-btn");
        btn.addEventListener("click", () => openDetailsModal(anime));

        galleryGrid.appendChild(card);
    });
}

function updateGallery() {
    let filtered = animeList.filter((anime) => {
        const matchesCategory = currentCategory === "All" || anime.category === currentCategory;
        const matchesSearch =
            anime.title.toLowerCase().includes(currentSearch) ||
            anime.description.toLowerCase().includes(currentSearch) ||
            anime.studio.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });

    if (currentSort === "az") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSort === "rating-high") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === "newest") {
        filtered.sort((a, b) => b.year - a.year);
    }

    renderGallery(filtered);
}

function openDetailsModal(anime) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${anime.image}" alt="${anime.title}">
            <div>
                <span class="category-tag">${anime.category}</span>
                <h2 style="margin-top: 0.4rem;">${anime.title}</h2>
                <p class="rating" style="margin-top: 0.2rem;">★ ${anime.rating} / 10</p>
            </div>
        </div>
        <ul class="modal-specs">
            <li><span>Studio:</span> <strong>${anime.studio}</strong></li>
            <li><span>Release Year:</span> <strong>${anime.year}</strong></li>
            <li><span>Episodes:</span> <strong>${anime.episodes}</strong></li>
            <li><span>Genre:</span> <strong>${anime.category}</strong></li>
        </ul>
        <p style="color: #d5d9ea; line-height: 1.7;">${anime.synopsis}</p>
    `;
    detailsModal.classList.add("open");
}

// 6. Event Listeners
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        currentCategory = button.dataset.category;
        updateGallery();
    });
});

searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    updateGallery();
});

sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    updateGallery();
});

closeModalBtn.addEventListener("click", () => {
    detailsModal.classList.remove("open");
});

detailsModal.addEventListener("click", (e) => {
    if (e.target === detailsModal) {
        detailsModal.classList.remove("open");
    }
});

renderGallery(animeList);