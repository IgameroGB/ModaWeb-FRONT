const handleBlur = (setFunction, opt) => {
  setFunction(opt);

  document.body.style.overflow = `${opt ? "hidden" : "block"}`;
};

export { handleBlur };
