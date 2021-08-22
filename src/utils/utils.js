export const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// replace with the regex below replaces any non alphanumeric character with '-' and removes multiple occurrences of '-'.
export const formatProductUrl = (config) => {
  const filteredName = config.name.toLowerCase().replace(/[^a-zA-Z\d]/g, '-').replace(/-+/g, '-');

  return `/products/${filteredName}/${config.id}`;
};

