import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  // const mediaMatch = window?.matchMedia(query);

  const [matches, setMatches] = useState();

  // useEffect(() => {
  //   const mediaMatch = window?.matchMedia(query);
  //   setMatches(mediaMatch.matches);
  // }, [query]);

  useEffect(() => {
    const mediaMatch = window?.matchMedia(query);
    setMatches(mediaMatch.matches);
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [query]);
  return matches;
};

export default useMediaQuery;
