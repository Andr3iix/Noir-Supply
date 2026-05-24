// script.js
// Datos de productos, menu movil, render del catalogo y detalle de producto.

const INSTAGRAM_DM_URL = 'https://ig.me/m/noirsupply0';

const products = [
  {
    id: 1,
    name: 'Jorts denim tribal',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-01-a.jpg',
    hoverImage: '/img/instagram/product-01-b.jpg',
    description: 'Jorts denim con bordado posterior y silueta ancha. Pieza rescatada del drop de Instagram.'
  },
  {
    id: 2,
    name: 'Black denim pocket piece',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-02-a.jpg',
    hoverImage: '/img/instagram/product-02-b.jpg',
    description: 'Denim oscuro de presencia pesada, bolsillos protagonistas y mood Y2K para outfits amplios.'
  },
  {
    id: 3,
    name: 'Grey washed baggy',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-03-a.jpg',
    hoverImage: '/img/instagram/product-03-b.jpg',
    description: 'Baggy gris lavado con caida amplia, textura marcada y energia dark archive.'
  },
  {
    id: 4,
    name: 'Navy tribal denim',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-04-a.jpg',
    hoverImage: '/img/instagram/product-04-b.jpg',
    description: 'Denim azul amplio con bordados traseros y vibra tribal 2000s.'
  },
  {
    id: 5,
    name: 'Blue flare embroidery',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-05-a.jpg',
    hoverImage: '/img/instagram/product-05-b.jpg',
    description: 'Denim azul con bordado de alto contraste, pensado para siluetas baggy y zapatillas chunky.'
  },
  {
    id: 6,
    name: 'Black wide leg denim',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-06-a.jpg',
    hoverImage: '/img/instagram/product-06-b.jpg',
    description: 'Pieza negra amplia, sobria y facil de combinar con hoodies graficos.'
  },
  {
    id: 7,
    name: 'Light wash baggy denim',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-07-a.jpg',
    hoverImage: '/img/instagram/product-07-b.jpg',
    description: 'Denim claro con lavado irregular, volumen amplio y look directo de archivo 2000s.'
  },
  {
    id: 8,
    name: 'Blue cargo denim',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-08-a.jpg',
    hoverImage: '/img/instagram/product-08-b.jpg',
    description: 'Denim azul con bolsillos y detalle grafico, seleccionado para looks baggy.'
  },
  {
    id: 9,
    name: 'Long denim shorts',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-09-a.jpg',
    hoverImage: '/img/instagram/product-09-b.jpg',
    description: 'Short denim largo con silueta relajada y detalles de bolsillo.'
  },
  {
    id: 10,
    name: 'Black graphic hoodie',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-10-a.jpg',
    hoverImage: '/img/instagram/product-10-b.jpg',
    description: 'Hoodie negro con grafica de espalda, energia Y2K oscura y fit oversized.'
  },
  {
    id: 11,
    name: 'South Pole zip hoodie',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-11-a.jpg',
    hoverImage: '/img/instagram/product-11-b.jpg',
    description: 'Zip hoodie con vibra street 2000s. Consulta medidas y disponibilidad por DM.'
  },
  {
    id: 12,
    name: 'Yellow graphic zip',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-12-a.jpg',
    hoverImage: '/img/instagram/product-12-b.jpg',
    description: 'Zip amarillo con grafica fuerte, una pieza de acento para romper outfits oscuros.'
  },
  {
    id: 13,
    name: 'Patterned zip jacket',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-13-a.jpg',
    hoverImage: '/img/instagram/product-13-b.jpg',
    description: 'Jacket con textura y grafica, ideal para capas con denim ancho.'
  },
  {
    id: 14,
    name: 'Black racing jersey',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-14-a.jpg',
    hoverImage: '/img/instagram/product-14-b.jpg',
    description: 'Jersey negro con grafica frontal, aire racing y contraste rojo.'
  },
  {
    id: 15,
    name: 'Dark graphic hoodie',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-15-a.jpg',
    hoverImage: '/img/instagram/product-15-b.jpg',
    description: 'Hoodie oscuro con graficos de alto impacto, seleccionada para el archivo Noir.'
  },
  {
    id: 16,
    name: 'Black minimal zip',
    brand: 'Noir archive',
    price: 'Consultar',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Consultar por DM',
    image: '/img/instagram/product-16-a.jpg',
    hoverImage: '/img/instagram/product-16-b.jpg',
    description: 'Zip hoodie negro de lectura mas limpia, para equilibrar prendas con denim cargado.'
  }
];

const productUpdates = {
  1: {
    name: 'Ecko Unltd jort baggy',
    brand: 'Ecko Unltd',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '32',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'Ecko Unltd jort fit baggy con grafica lateral, largo amplio y lectura 2000s.'
  },
  2: {
    name: 'Coogi jean multicolor pocket',
    brand: 'Coogi',
    price: 'Consultar por DM',
    status: 'Vendido',
    size: '42/35',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'Coogi jean fit baggy con bolsillos multicolor. Pieza vendida del drop.'
  },
  3: {
    name: 'Akademiks baggy jean',
    brand: 'Akademiks',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '38',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'Akademiks fit baggy en lavado claro, bolsillo bordado y caida amplia.'
  },
  4: {
    name: 'Southpole premium baggy',
    brand: 'Southpole',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '34',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'Southpole premium baggy fit con grafica posterior grande y presencia 2000s.'
  },
  5: {
    name: 'Evolution bow pocket jean',
    brand: 'Evolution',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '36',
    condition: '9/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'Evolution jeans fit baggy con bordado azul en bolsillos posteriores.'
  },
  6: {
    name: 'Recyclaje baggy jean',
    brand: 'Recycled',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '34',
    condition: '9/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'Recyclaje jean fit baggy en negro, bolsillos con etiqueta y contraste de costuras.'
  },
  7: {
    name: 'True Religion fit recto',
    brand: 'True Religion',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '32',
    condition: '9/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'True Religion fit recto con costura naranja marcada y lavado medio.'
  },
  8: {
    name: 'FUBU carpenter baggy',
    brand: 'FUBU',
    price: 'Consultar por DM',
    status: 'Vendido',
    size: '38/40',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'FUBU jeans estilo carpintero, fit baggy. Pieza vendida del drop.'
  },
  9: {
    name: 'Raw Blue jort baggy',
    brand: 'Raw Blue',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '38',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    description: 'Raw Blue jort baggy con aplicaciones graficas y largo tipo oversized.'
  },
  10: {
    name: 'Zip gothic type MMA Elite',
    brand: 'Noir archive',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: 'M',
    condition: '9/10',
    measures: 'Largo, ancho, pecho y mangas por DM',
    description: 'Zip negro gothic type con grafica posterior, silueta oscura y detalles de archivo.'
  },
  15: {
    name: 'Red tribal graphic zip',
    brand: 'Noir archive',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Largo, ancho, pecho y mangas por DM',
    description: 'Zip hoodie negro con grafica roja tribal al frente, una pieza fuerte para capas.'
  },
  16: {
    name: 'Black cleaver zip hoodie',
    brand: 'Noir archive',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Largo, ancho, pecho y mangas por DM',
    description: 'Zip hoodie negro con grafica blanca frontal, sobria pero con presencia Y2K.'
  }
};

const extraProducts = [
  {
    id: 17,
    name: 'True Religion fit relax',
    brand: 'True Religion',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '34',
    condition: '9/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    image: '/img/instagram/product-02-b.jpg',
    description: 'True Religion fit relax en azul profundo, costura contrastada y silueta amplia.'
  },
  {
    id: 18,
    name: 'Southpole grey baggy',
    brand: 'Southpole',
    price: 'Consultar por DM',
    status: 'Vendido',
    size: '38',
    condition: '9/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    image: '/img/instagram/product-03-b.jpg',
    description: 'Southpole jean gris con bolsillos posteriores oscuros. Pieza vendida del drop.'
  },
  {
    id: 19,
    name: 'Raw Blue fleur baggy',
    brand: 'Raw Blue',
    price: 'Oferta / ultima 380',
    status: 'Disponible',
    size: '40',
    condition: '8.5/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    image: '/img/instagram/product-04-b.jpg',
    description: 'Raw Blue fit baggy con parches flor de lis y detalles rojos en denim gris.'
  },
  {
    id: 20,
    name: 'Rocawear side embroidery',
    brand: 'Rocawear',
    price: '150 soles',
    status: 'Disponible',
    size: '36/34',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    image: '/img/instagram/product-05-b.jpg',
    description: 'Rocawear fit baggy con bordado lateral amarillo y lavado azul medio.'
  },
  {
    id: 21,
    name: 'Southpole tag baggy',
    brand: 'Southpole',
    price: '150 soles',
    status: 'Disponible',
    size: '32/34',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    image: '/img/instagram/product-07-b.jpg',
    description: 'Southpole jeans coleccion tag, fit baggy, lavado azul con paneles claros.'
  },
  {
    id: 22,
    name: 'Rocawear baggy jean',
    brand: 'Rocawear',
    price: '150 soles',
    status: 'Disponible',
    size: '36/34',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    image: '/img/instagram/product-08-b.jpg',
    description: 'Rocawear fit baggy de lavado claro, bolsillos amplios y logo posterior discreto.'
  },
  {
    id: 23,
    name: 'Kikwear black baggy jean',
    brand: 'Kikwear',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: '34',
    condition: '10/10',
    measures: 'Largo, ancho, cintura y basta por DM',
    image: '/img/instagram/product-06-b.jpg',
    description: 'Kikwear jean fit baggy en negro, logo posterior discreto y silueta amplia.'
  },
  {
    id: 24,
    name: 'Ed Hardy tiger zip',
    brand: 'Ed Hardy',
    price: 'Consultar por DM',
    status: 'Vendido',
    size: 'XXL Fit XL',
    condition: '10/10',
    measures: 'Largo, ancho, pecho y mangas por DM',
    image: '/img/instagram/product-11-b.jpg',
    description: 'Ed Hardy zip con grafica tiger y fit amplio. Pieza vendida del drop.'
  },
  {
    id: 25,
    name: 'Ecko Root of All Evil jersey',
    brand: 'Ecko Unltd',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Largo, ancho, pecho y mangas por DM',
    image: '/img/instagram/product-13-b.jpg',
    description: 'Ecko Unltd jersey negro con grafica Root of All Evil en espalda y acabado dorado.'
  },
  {
    id: 26,
    name: 'True Religion black hoodie',
    brand: 'True Religion',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Largo, ancho, pecho y mangas por DM',
    image: '/img/instagram/product-14-b.jpg',
    description: 'True Religion hoodie negro con grafica posterior dorada y fit relajado.'
  },
  {
    id: 27,
    name: 'Desmon graphic jacket',
    brand: 'Desmon',
    price: 'Consultar por DM',
    status: 'Disponible',
    size: 'Consultar',
    condition: 'Second hand',
    measures: 'Largo, ancho, pecho y mangas por DM',
    image: '/img/instagram/product-12-b.jpg',
    description: 'Jacket negra con grafica posterior de alto contraste, costuras amarillas y mood de colaboracion.'
  }
];

const catalogProducts = [
  ...products.map((product) => ({ ...product, ...(productUpdates[product.id] || {}) })),
  ...extraProducts
];

const getProductById = (id) => catalogProducts.find((product) => String(product.id) === String(id));

const getProductCategory = (product) => {
  const text = `${product.name} ${product.description}`.toLowerCase();

  if (text.includes('jort') || text.includes('short')) return 'jorts';
  if (text.includes('hoodie') || text.includes('zip')) return 'hoodies';
  if (text.includes('jacket') || text.includes('jersey')) return 'jackets';
  return 'denim';
};

const getCatalogProduct = (product) => ({
  ...product,
  category: product.category || getProductCategory(product),
  collection: 'drop',
  isSold: product.status.toLowerCase().includes('vendid')
});

const catalogState = {
  collection: 'all',
  status: 'all',
  category: 'all',
  query: ''
};

const readCatalogStateFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const status = params.get('status');
  const category = params.get('category');
  const query = params.get('q');

  if (['all', 'available', 'sold'].includes(status)) catalogState.status = status;
  if (['all', 'jorts', 'denim', 'hoodies', 'jackets'].includes(category)) catalogState.category = category;
  if (query) {
    catalogState.query = query;
    catalogState.status = 'all';
  }
};

const updateCatalogUrl = () => {
  if (!document.querySelector('[data-catalog-filters]')) return;

  const params = new URLSearchParams(window.location.search);

  if (catalogState.status === 'all') params.delete('status');
  else params.set('status', catalogState.status);

  if (catalogState.category === 'all') params.delete('category');
  else params.set('category', catalogState.category);

  if (catalogState.query.trim()) params.set('q', catalogState.query.trim());
  else params.delete('q');

  const nextUrl = `${window.location.pathname}${params.toString() ? `?${params}` : ''}${window.location.hash}`;
  window.history.replaceState({}, '', nextUrl);
  return nextUrl;
};

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const renderProductCard = (product) => `
  <div
    class="catalogo-item ${product.isSold ? 'vendida' : 'disponible'} fade-in"
    data-product-status="${product.isSold ? 'sold' : 'available'}"
    data-product-category="${escapeHtml(product.category)}"
    data-product-search="${escapeHtml(`${product.name} ${product.brand} ${product.description}`.toLowerCase())}"
  >
    <a class="catalogo-media-link" href="/producto.html?id=${product.id}">
      <div class="catalogo-media">
        <span class="product-badge">${escapeHtml(product.status)}</span>
        <img
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.name)} - Precio: ${escapeHtml(product.price)}"
        >
      </div>
    </a>
    <div class="catalogo-copy">
      <span>${escapeHtml(product.brand)}</span>
      <p>${escapeHtml(product.name)}</p>
      <strong>${escapeHtml(product.price)}</strong>
      <div class="catalogo-actions">
        <a href="/producto.html?id=${product.id}">Ver prenda</a>
        <a href="${INSTAGRAM_DM_URL}" target="_blank" rel="noopener noreferrer">DM</a>
      </div>
    </div>
  </div>
`;

const renderCatalogs = () => {
  document.querySelectorAll('[data-products-container]').forEach((container) => {
    const limit = Number(container.dataset.limit) || catalogProducts.length;
    const mode = container.dataset.catalogMode || 'all';

    let visibleProducts = catalogProducts.map(getCatalogProduct);

    if (mode === 'drop') {
      visibleProducts = visibleProducts.filter((product) => product.collection === 'drop');
    }

    if (container.dataset.catalogControls === 'true') {
      visibleProducts = visibleProducts.filter((product) => {
        const matchesCollection = catalogState.collection === 'all' || product.collection === catalogState.collection;
        return matchesCollection;
      });
    }

    container.innerHTML = visibleProducts.slice(0, limit).map(renderProductCard).join('');

    const emptyState = container.closest('section')?.querySelector('[data-catalog-empty]');
    if (emptyState) {
      emptyState.hidden = visibleProducts.length > 0;
    }
  });

  setupProductTilt();
};

const renderProductDetail = () => {
  const productDetail = document.getElementById('product-detail');

  if (!productDetail) return;

  const params = new URLSearchParams(window.location.search);
  const product = getCatalogProduct(getProductById(params.get('id')) || products[0]);

  document.title = `${product.name} - Noir Supply`;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-price').textContent = `Precio: ${product.price}`;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-status').textContent = product.status;
  document.getElementById('product-size').textContent = product.size;
  document.getElementById('product-condition').textContent = product.condition;
  document.getElementById('product-measures').textContent = product.measures;

  const productImage = document.getElementById('product-image');
  productImage.src = product.image;
  productImage.alt = `${product.name} - Precio: ${product.price}`;

  document.getElementById('product-contact').href = INSTAGRAM_DM_URL;
};

const enableImageHover = () => {};

const syncCatalogControls = () => {
  document.querySelectorAll('[data-filter-collection]').forEach((item) => {
    item.classList.toggle('is-active', item.dataset.filterCollection === catalogState.collection);
  });

  document.querySelectorAll('[data-filter-status]').forEach((item) => {
    item.classList.toggle('is-active', item.dataset.filterStatus === catalogState.status);
  });

  document.querySelectorAll('[data-filter-category]').forEach((item) => {
    item.value = catalogState.category;
  });

  document.querySelectorAll('[data-filter-search]').forEach((item) => {
    if (item.value !== catalogState.query) item.value = catalogState.query;
  });
};

const filterRenderedCatalogCards = () => {
  document.querySelectorAll('[data-products-container][data-catalog-controls="true"]').forEach((container) => {
    let visibleCount = 0;
    const search = catalogState.query.trim().toLowerCase();

    container.querySelectorAll('.catalogo-item').forEach((card) => {
      const matchesStatus =
        catalogState.status === 'all'
        || card.dataset.productStatus === catalogState.status;
      const matchesCategory =
        catalogState.category === 'all'
        || card.dataset.productCategory === catalogState.category;
      const matchesSearch =
        !search
        || (card.dataset.productSearch || '').includes(search);
      const isVisible = matchesStatus && matchesCategory && matchesSearch;

      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    const emptyState = container.closest('section')?.querySelector('[data-catalog-empty]');
    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  });
};

function noirApplyStatus(status) {
  if (!['all', 'available', 'sold'].includes(status)) return false;

  catalogState.status = status;
  syncCatalogControls();
  filterRenderedCatalogCards();
  updateCatalogUrl();
  window.requestAnimationFrame(() => {
    syncCatalogControls();
    filterRenderedCatalogCards();
  });
  return false;
}

window.noirApplyStatus = noirApplyStatus;

const setupCatalogFilters = () => {
  if (!document.querySelector('[data-catalog-filters]')) return;

  const applyCatalogControl = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const collectionButton = target.closest('[data-filter-collection]');
    if (collectionButton && collectionButton.closest('[data-catalog-filters]')) {
      event.preventDefault();
      catalogState.collection = collectionButton.dataset.filterCollection;
      syncCatalogControls();
      renderCatalogs();
      filterRenderedCatalogCards();
      updateCatalogUrl();
      return;
    }

    const statusButton = target.closest('[data-filter-status]');
    if (statusButton && statusButton.closest('[data-catalog-filters]')) {
      event.preventDefault();
      noirApplyStatus(statusButton.dataset.filterStatus);
    }
  };

  document.addEventListener('pointerdown', applyCatalogControl);
  document.addEventListener('click', applyCatalogControl);

  document.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !target.matches('[data-filter-search]')) return;

    catalogState.query = target.value;
    if (catalogState.query.trim()) catalogState.status = 'all';
    syncCatalogControls();
    filterRenderedCatalogCards();
    updateCatalogUrl();
  });

  document.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement) || !target.matches('[data-filter-category]')) return;

    catalogState.category = target.value;
    syncCatalogControls();
    filterRenderedCatalogCards();
    updateCatalogUrl();
  });

  document.querySelectorAll('[data-filter-status]').forEach((button) => {
    const handleDirectStatus = (event) => {
      event.preventDefault();
      noirApplyStatus(button.dataset.filterStatus);
    };

    button.addEventListener('pointerup', handleDirectStatus);
    button.addEventListener('mouseup', handleDirectStatus);
    button.addEventListener('touchend', handleDirectStatus);
  });

  syncCatalogControls();
  filterRenderedCatalogCards();
};

const setupMobileMenu = () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navList = navMenu ? navMenu.querySelector('ul') : null;

  if (!hamburger || !navList) return;

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    const isOpen = navList.classList.contains('active');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menu' : 'Abrir menu');
  });
};

const setupActiveNav = () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('header nav a[href]').forEach((link) => {
    const linkPath = link.getAttribute('href').split('/').pop() || 'index.html';
    const isProductPage = currentPath === 'producto.html' && linkPath === 'galeria.html';
    const isActive = currentPath === linkPath || isProductPage || (currentPath === '' && linkPath === 'index.html');

    if (isActive) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
};

const setupScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .zoom-in');

  const handleScroll = () => {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        element.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
};

const setupStaggeredMotion = () => {
  document.body.classList.add('is-loaded');

  const staggerGroups = [
    '.catalogo-item',
    '.shop-categories a',
    '.drop-stats span',
    '.story-copy .fade-in',
    '#feedback .fade-in'
  ];

  staggerGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.style.setProperty('--stagger', `${Math.min(index, 10) * 70}ms`);
    });
  });
};

const setupHeroMotion = () => {
  const motionTargets = document.querySelectorAll('.hero, .drop-page, .story-page');
  if (!motionTargets.length) return;

  const updateMotion = () => {
    const scrollShift = Math.min(window.scrollY * 0.08, 34);
    document.documentElement.style.setProperty('--scroll-shift', `${scrollShift}px`);
  };

  window.addEventListener('scroll', updateMotion, { passive: true });
  updateMotion();
};

const setupProductTilt = () => {
  document.querySelectorAll('.catalogo-item').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
      card.style.setProperty('--tilt-x', `${y}deg`);
      card.style.setProperty('--tilt-y', `${x}deg`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  readCatalogStateFromUrl();
  setupMobileMenu();
  setupActiveNav();
  setupCatalogFilters();
  renderCatalogs();
  filterRenderedCatalogCards();
  updateCatalogUrl();
  renderProductDetail();
  enableImageHover();
  setupStaggeredMotion();
  setupScrollAnimations();
  setupHeroMotion();
});
