<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Wardrobe Shuffle</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation Bar -->
    <nav>
        <div class="logo">👗 Smart Wardrobe</div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My Closet</a></li>
            <li><a href="#">Trends</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Sell/Swap</a></li>
        </ul>
    </nav>

    <div id="container">
        <!-- Left Side: Sell or Swap Clothes -->
        <div id="sellSection">
            <h2>Sell or Swap Clothes</h2>
            <button id="sellButton">List Your Clothes</button>
        </div>

        <!-- Center: Outfit Shuffler -->
        <div id="app">
            <h1>Smart Wardrobe Shuffle</h1>
            <button id="shuffleButton">Shuffle Outfit</button>
            <div id="outfitSection">
                <h2>Your Random Outfit:</h2>
                <div id="outfitDisplay">
                    <div id="topDisplay" class="outfitItem"></div>
                    <div id="bottomDisplay" class="outfitItem"></div>
                    <div id="shoesDisplay" class="outfitItem"></div>
                </div>
            </div>
        </div>

        <!-- Right Side: Suggested Shopping Items -->
        <div id="shopSection">
            <h2>Suggested Items to Complete Your Outfit:</h2>
            <div id="suggestedItems"></div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
