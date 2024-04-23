export const getWidth = (el, width) => {
  const layout = $(el).data("layout");

  if (width === "left") return layout[0];
  if (width === "center") return layout[1];
  return layout[2];
};
