export const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

export const formatProductUrl = (config) => {
  const filteredName = config.name.toLowerCase().replace(/[^a-zA-Z\d]/g, '-').replace(/-+/g, '-');

  return `/products/${filteredName}/${config.id}`;
};

