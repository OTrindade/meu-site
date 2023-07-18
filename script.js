document.addEventListener("DOMContentLoaded", function () {
  const productList = [
    {
      name: "Produto A",
      image: "files/1.png",
      author: "Thiago",
      details: "Detalhes do Produto A...",
    },
    {
      name: "Produto B",
      image: "files/2.png",
      author: "Joao",
      details: "Detalhes do Produto B...",
    },
    {
      name: "Produto C",
      image: "files/3.png",
      author: "Carlos",
      details: "Detalhes do Produto C...",
    },
    // Adicione mais produtos aqui, se necessário
  ];

  const searchInput = document.getElementById("searchInput");
  const productListContainer = document.getElementById("productList");
  const qrcodeContainer = document.getElementById("qrcode-container");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredProducts = productList.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
    generateQRCode();
  });

  function displayProducts(products) {
    const html = products.map(product => `
      <li>
        <a href="product-details.html?product=${encodeURIComponent(JSON.stringify(product))}">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <div>
            <h3>${product.name}</h3>
          </div>
        </a>
      </li>
    `).join("");
    productListContainer.innerHTML = html;
  }

  function generateQRCode() {
    // Obtém o URL da página atual (index.html)
    const url = window.location.href;

    // Cria a URL da API do Google Charts para gerar o QR code
    const qrCodeUrl = `https://chart.googleapis.com/chart?chs=128x128&cht=qr&chl=${encodeURIComponent(url)}`;

    // Cria o código HTML para exibir o código QR
    const qrCodeImg = document.createElement("img");
    qrCodeImg.src = qrCodeUrl;
    qrCodeImg.alt = "Código QR do site";
    qrcodeContainer.innerHTML = "";
    qrcodeContainer.appendChild(qrCodeImg);

    // Cria o link para baixar o código QR
    const downloadLink = document.createElement("a");
    downloadLink.href = qrCodeUrl;
    downloadLink.download = "qrcode.png";
    downloadLink.textContent = "Baixar QR Code";
    qrcodeContainer.appendChild(downloadLink);
  }

  // Exibindo todos os produtos e gerando o QR code ao carregar a página inicialmente
  displayProducts(productList);
  generateQRCode();
});