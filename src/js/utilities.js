

const isHover = (opt) => {
  const icons = document.getElementsByClassName("header-ico-group");
  if (opt) {
    for (const key in icons) {
      if (Object.hasOwnProperty.call(icons, key)) {
        const element = icons[key];
        element.classList.add("hover");
        const textElem = element.querySelector(".text");
        textElem.classList.add("visible");
      }
    }
  } else {
    for (const key in icons) {
      if (Object.hasOwnProperty.call(icons, key)) {
        const element = icons[key];
        element.classList.remove("hover");
        const textElem = element.querySelector(".text");
        textElem.classList.remove("visible");
      }
    }
  }
};

export { isHover };
