export const BemPrefix = (className) => (classNamePrefix) => {
  if (!classNamePrefix) {
    return className;
  }
  return [className, classNamePrefix].join("__");
};
