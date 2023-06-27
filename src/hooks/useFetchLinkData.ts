import { useEffect, useState } from "react";
// import { BASE_URL } from "../constants/base-url";

/**
 * Define the structure of fetched data.
 */
type FetchData = {
  /** Page title */
  title: string;
  /** Page description */
  description: string;
  /** Open Graph Protocol image URL */
  ogp: string;
  /** Favicon URL */
  favicon: string;
};

/**
 * Define the props for the hook.
 */
export type FetchLinkUrlType = {
  /** The URL to fetch the data from */
  url: `http${string}`;
};

/**
 * Custom hook to fetch data from a URL and extract the title, description, OGP image, and favicon.
 */
const useFetchLinkData = (url: FetchLinkUrlType["url"]) => {
  /**
   * Define state to store fetched data, loading and error status.
   */
  const [fetchState, setFetchState] = useState<{ data: FetchData | null; error: boolean; loading: boolean }>({
    data: null,
    error: false,
    loading: true,
  });

  /**
   * Fetch data on component mount or when the URL changes.
   */
  useEffect(() => {
    (async () => {
      // Set loading status to true before fetching.
      setFetchState({ data: null, error: false, loading: true });
      try {
        // Fetch data
        const res = await fetch(encodeURI(process.env.NEXT_PUBLIC_METADATA_URL + url));
        // Parse response data as JSON
        const data = await res.json();
        // Set fetched data and loading status
        setFetchState({ data, error: false, loading: false });
      } catch (err) {
        // In case of error, update error status
        setFetchState({ data: null, error: true, loading: false });
      }
    })();
  }, [url]);

  // Return fetched data, loading and error status
  return { ...fetchState };
};

export default useFetchLinkData;
