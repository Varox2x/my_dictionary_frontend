const config: { API_URL: string | undefined; MODE: string | undefined } = {
  API_URL: import.meta.env.VITE_API_KEY,
  MODE: import.meta.env.MODE,
};

export default config;
