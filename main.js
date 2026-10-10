let drinksList = [
    {name: "Coca-Cola", price: 500},
    {name: "Coca-Cola Zero", price: 550},
    {name: "Fanta", price: 500},
    {name: "Sprite", price: 500},
    {name: "Jeges tea", price: 600}
];

const table = document.getElementById("italok");

function italHozzaadas(ital) {
    const tr = document.createElement("tr");

    const tdNev = document.createElement("td");
    tdNev.innerText = ital.name;
    tr.appendChild(tdNev);

    const tdAr = document.createElement("td");
    tdAr.innerText = ital.price + " Ft";
    tr.appendChild(tdAr);

    table.appendChild(tr);
}

for (const ital of drinksList) {
    italHozzaadas(ital);
}

const form = document.getElementById("italForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nev = document.getElementById("nev").value;
    const ar = document.getElementById("ar").value;

    const hiba = document.getElementById("hiba");
    const siker = document.getElementById("siker");

    hiba.innerText = "";
    siker.innerText = "";

    if (nev.trim() == "") {
        hiba.innerText = "A név nem lehet üres!";
    }
    else if (ar == "") {
        hiba.innerText = "Az ár megadása kötelező!";
    }
    else if (Number(ar) < 0) {
        hiba.innerText = "Az ár nem lehet negatív!";
    }
    else if (Number(ar) % 10 != 0) {
        hiba.innerText = "Az árnak oszthatónak kell lennie 10-zel!";
    }
    else {
        const ujItal = {
            name: nev,
            price: Number(ar)
        };

        drinksList.push(ujItal);
        italHozzaadas(ujItal);

        siker.innerText = "Az ital sikeresen hozzáadva!";

        form.reset();
    }
});