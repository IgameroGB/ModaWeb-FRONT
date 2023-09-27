const handleBlur = (setFunction, opt) => {
  //   console.log("setBlur");
  setFunction(opt);

  document.body.style.overflow = `${opt ? "hidden" : "block"}`;
};

export { handleBlur };
