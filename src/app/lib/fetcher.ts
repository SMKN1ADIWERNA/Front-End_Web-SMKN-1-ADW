export async function fetcher(endpoint: string) {
    const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
    const API_KEY = process.env.STRAPI_API_KEY;
  
    console.log('Fetching data from:', `${API_URL}${endpoint}`);
    console.log('Using API Key:', API_KEY);
  
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
  
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Fetch failed:', res.status, errorText);
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }
  