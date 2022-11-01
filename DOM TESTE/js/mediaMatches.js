function useMediaQuery(query) {
  const matches = false;
  const setMatches = false;

  const query = (query, media) => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  };

  return matches;
}
