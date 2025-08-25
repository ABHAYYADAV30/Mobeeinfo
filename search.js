// search.js
document.getElementById("search-input").addEventListener("keyup", function () {
  const query = this.value;
  if (query.length > 1) {
    fetch("search.php?q=" + encodeURIComponent(query))
      .then((res) => res.json())
      .then((data) => {
        const resultDiv = document.getElementById("search-results");
        resultDiv.innerHTML = "";
        data.forEach((phone) => {
          const phoneDiv = document.createElement("div");
          phoneDiv.classList.add("phone-result");
          phoneDiv.innerHTML = `<strong>${phone.name}</strong><br>Price: ₹${phone.price}<br>Offers: ${phone.offers}`;
          resultDiv.appendChild(phoneDiv);
        });
      });
  } else {
    document.getElementById("search-results").innerHTML = "";
  }
});
