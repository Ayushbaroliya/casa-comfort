const BASE_URL = '/api';

let _categoriesCache = null;

export async function fetchCategories() {
  if (_categoriesCache) return _categoriesCache;
  
  try {
    const res = await fetch('/dummy-data.json');

    if (!res.ok) throw new Error('Failed to fetch dummy data');

    _categoriesCache = await res.json();
    return _categoriesCache;
  } catch (err) {
    console.error('API Error:', err);
    throw err;
  }
}

export async function fetchCategoryById(id) {
  const data = await fetchCategories();
  const cat = data.find((c) => c.id === id);
  if (!cat) throw new Error(`Category "${id}" not found`);
  return cat;
}

export async function fetchProductById(id) {
  const data = await fetchCategories();
  for (const cat of data) {
    const item = cat.items.find((i) => i.id === id);
    if (item) return { item, category: cat };
  }
  throw new Error(`Product "${id}" not found`);
}

export async function fetchTilesGrouped() {
  return fetchCategories();
}

