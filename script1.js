async function searchPhones() {
  const query = document.getElementById('searchInput').value;
  const res = await fetch(`/search?q=${query}`);
  const phones = await res.json();

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  phones.forEach(phone => {
    resultsDiv.innerHTML += `
      <div class="product">
        <h3>${phone.name}</h3>
        <p>Brand: ${phone.brand}</p>
        <p>Price: ₹${phone.price}</p>
        <img src="image/${phone.image}" width="120px">
      </div>
    `;
  });
}
