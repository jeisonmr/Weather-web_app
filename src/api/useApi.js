
async function loadInfo(city = "London") {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_REACT_APP_URL}&key=${
        import.meta.env.VITE_REACT_APP_KEY
      }&q=${city}`
    );

    const data = await request.json();
    return data;
  } catch (error) {}
}


export { loadInfo};
