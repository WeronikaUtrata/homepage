{
  const welcome = () => {
    console.log("Witam wszystkich!");
  }

  const onChangeBackgroundClick = () => {
    const site = document.querySelector(".site");
    const themeName = document.querySelector(".themeName");

    site.classList.toggle("blueTheme");
    if (site.classList.contains("blueTheme")) {
      themeName.innerText = "jasny";
    } else {
      themeName.innerText = "błękitny";
    }
  };

  const init = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", onChangeBackgroundClick);

    welcome();
  };

  init();
}