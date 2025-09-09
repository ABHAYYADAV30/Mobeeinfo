let phonesData = [];

fetch("compare.json")
  .then(res => res.json())
  .then(data => {
    phonesData = data;
    populateDropdowns();
  });

function populateDropdowns() {
  const select1 = document.getElementById("phone1");
  const select2 = document.getElementById("phone2");

  phonesData.forEach(phone => {
    const option1 = new Option(phone.name, phone.id);
    const option2 = new Option(phone.name, phone.id);
    select1.add(option1);
    select2.add(option2);
  });
}

function comparePhones() {
  const id1 = document.getElementById("phone1").value;
  const id2 = document.getElementById("phone2").value;

  const phone1 = phonesData.find(p => p.id === id1);
  const phone2 = phonesData.find(p => p.id === id2);

  document.getElementById("comparison").innerHTML = `
    <div class="phone-card">
      <h2>${phone1.name}</h2>
      <img src="${phone1.image}" alt="${phone1.name}">
      <p><strong>Price:</strong> ${phone1.price}</p>
      <p><strong>Display:</strong> ${phone1.display}</p>
      <p><strong>Processor:</strong> ${phone1.processor}</p>
      <p><strong>Camera:</strong> ${phone1.camera}</p>
      <p><strong>Battery:</strong> ${phone1.battery}</p>
      <p><strong>OS:</strong> ${phone1.os}</p>
    </div>

    <div class="phone-card">
      <h2>${phone2.name}</h2>
      <img src="${phone2.image}" alt="${phone2.name}">
      <p><strong>Price:</strong> ${phone2.price}</p>
      <p><strong>Display:</strong> ${phone2.display}</p>
      <p><strong>Processor:</strong> ${phone2.processor}</p>
      <p><strong>Camera:</strong> ${phone2.camera}</p>
      <p><strong>Battery:</strong> ${phone2.battery}</p>
      <p><strong>OS:</strong> ${phone2.os}</p>
    </div>
  `;
}