export async function fetchData(url: RequestInfo, options?: RequestInit) {
  try {
    const baseOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    };
    const newOptions = options ? { ...baseOptions, ...options } : baseOptions;
    const res = await fetch(`${process.env.API_BASE_URL}${url}`, newOptions);
    const data = await res.json();
    return data;
  } catch {
    throw new Error("Internal server error: Failed to fetch data");
  }
}
