const API_URL = 'http://202.65.116.9:1337/api/artikels';
const API_KEY =
  'Bearer f3060dc3476847272b4e0c1b68c43d5c99217169c481a44163c53554d35408ace5ce5b9dac665866d136a2a7786213aade5b791166e46e627e9bb1fdeddaabaef1685fa31858e2a706f3823c7dde68c10c5b59a0bb3a8b4bbfe40d969ec3b1c826609c27786c96f12ea2870d8ea83cbda7078a6bb52152579bc85ce59dd338f8';

export async function fetchArticles() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (!response.ok) {
      console.error('Error fetching articles:', response.statusText);
      throw new Error('Failed to fetch articles');
    }

    const data = await response.json();
    return data.data; // Mengembalikan array artikel
  } catch (error) {
    console.error('Error in fetchArticles:', error);
    throw error;
  }
}
