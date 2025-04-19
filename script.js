fetch('data.json')
  .then(response => response.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = product.name;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error loading products:', error);
  });