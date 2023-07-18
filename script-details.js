document.addEventListener("DOMContentLoaded", function () {
    const productDetailsContainer = document.getElementById("productDetails");
    
    // Função para obter o parâmetro da URL
    function getUrlParam(param) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get(param);
    }
    
    // Obtendo o objeto do produto da URL
    const productString = getUrlParam("product");
    if (productString) {
      const product = JSON.parse(productString);
      if (product) {
        displayProductDetails(product);
      } else {
        productDetailsContainer.innerHTML = "<p>Produto não encontrado.</p>";
      }
    } else {
      productDetailsContainer.innerHTML = "<p>Nenhum produto selecionado.</p>";
    }
    
    // Função para exibir as informações do produto na página de detalhes
    function displayProductDetails(product) {
      const html = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <p>${product.author}</p>
        <p>${product.details}</p>
      `;
      productDetailsContainer.innerHTML = html;
    }
  });
  