// Clothing data: Tops, Bottoms, and Shoes with colors & weather suitability
const tops = [
    { img: "clothes/top1.jpg", color: "warm", weather: "hot" },
    { img: "clothes/top2.jpg", color: "cool", weather: "cold" },
    { img: "clothes/top3.webp", color: "neutral", weather: "hot" },
    { img: "clothes/top4.webp", color: "warm", weather: "cold" },
    { img: "clothes/top5.jpg", color: "cool", weather: "hot" }
];

const bottoms = [
    { img: "clothes/pants1.jpg", color: "neutral", weather: "hot" },
    { img: "clothes/pants2.webp", color: "cool", weather: "cold" },
    { img: "clothes/pants3.jpg", color: "warm", weather: "hot" },
    { img: "clothes/pants4.webp", color: "neutral", weather: "cold" },
    { img: "clothes/pants5.jpg", color: "cool", weather: "hot" }
];

const shoes = [
    { img: "clothes/shoe1.webp", color: "neutral", weather: "hot" },
    { img: "clothes/shoe2.webp", color: "cool", weather: "cold" },
    { img: "clothes/shoe3.jpg", color: "neutral", weather: "hot" },
    { img: "clothes/shoe4.webp", color: "neutral", weather: "cold" },
    { img: "clothes/shoe5.webp", color: "neutral", weather: "hot" }
];

// Function to simulate real-time weather ("hot" or "cold")
async function getWeather() {
    return "hot"; // Placeholder, replace with actual API call if needed
}

// Function to get a random clothing item from a filtered list
function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

// Function to shuffle outfits with independent selection
async function shuffleOutfit() {
    const weather = await getWeather(); // Get current weather

    // Filter clothes based on weather condition
    const filteredTops = tops.filter(item => item.weather === weather);
    const filteredBottoms = bottoms.filter(item => item.weather === weather);
    const filteredShoes = shoes.filter(item => item.weather === weather);

    let top, bottom, shoe;
    let attempts = 0;

    do {
        // Pick random items
        top = getRandomItem(filteredTops);
        bottom = getRandomItem(filteredBottoms);
        shoe = getRandomItem(filteredShoes);
        attempts++;
    } while (attempts < 10 && new Set([top.color, bottom.color, shoe.color]).size > 2);

    // Update the UI with the selected outfit
    document.getElementById("topDisplay").innerHTML = `<img src="${top.img}" alt="Top">`;
    document.getElementById("bottomDisplay").innerHTML = `<img src="${bottom.img}" alt="Bottom">`;
    document.getElementById("shoesDisplay").innerHTML = `<img src="${shoe.img}" alt="Shoes">`;
}

// Event listener for shuffle button
document.getElementById("shuffleButton").addEventListener("click", shuffleOutfit);

// Suggested shopping items
const suggestedItems = [
    { img: "clothes/jacket1.jpg", name: "Stylish Jacket", link: "https://fashionstore.com/jacket1" },
    { img: "clothes/hat1.jpg", name: "Cool Hat", link: "https://fashionstore.com/hat1" },
    { img: "clothes/belt1.jpg", name: "Trendy Belt", link: "https://fashionstore.com/belt1" }
];

function suggestItems() {
    const suggestedDiv = document.getElementById("suggestedItems");
    suggestedDiv.innerHTML = "";

    suggestedItems.forEach(item => {
        suggestedDiv.innerHTML += `
            <div class="suggestedItem">
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}</p>
                <a href="${item.link}" target="_blank">Buy Similar</a>
            </div>
        `;
    });
}

// Trigger item suggestions on page load
window.onload = function() {
    suggestItems();
    shuffleOutfit(); // Shuffle an outfit on page load
};

// Sell Clothes Button Alert (Placeholder)
document.getElementById("sellButton").addEventListener("click", function() {
    alert("Feature coming soon! You'll be able to list your clothes for sale.");
});
