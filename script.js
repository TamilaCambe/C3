const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
    panel.querySelector("h3").style.opacity = 1;
    panel.querySelector("h3").style.visibility = "visible";
    // Adiciona verificação hover ao h1 para evitar desaparecer
    if (panel.querySelector("h1:hover")) {
      panel.querySelector("h1").classList.add("hovered");
    }
    panel.querySelector("h1").style.opacity = 1;
    panel.querySelector("h1").style.visibility = "visible";
  });
  // adiciona evento mouseout no h1 para tirar hover do mesmo
  panel.querySelector("h1").addEventListener("mouseout", () => {
    panel.querySelector("h1").classList.remove("hovered");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
    panel.querySelector("h3").style.opacity = 0;
    panel.querySelector("h3").style.visibility = "hidden";
    // adiciona verificação para manter a visibilidade e opacidade do h1
    if (!panel.querySelector("h1").classList.contains("hovered")) {
      panel.querySelector("h1").style.opacity = 0;
      panel.querySelector("h1").style.visibility = "hidden";
    }
  });
}

// Mostra o h1 e o h3 quando a classe .active for adicionada
document.addEventListener("DOMContentLoaded", () => {
  const activePanel = document.querySelector(".panel.active");
  if (activePanel) {
    activePanel.querySelector("h1").style.opacity = 1;
    activePanel.querySelector("h1").style.visibility = "visible";
    activePanel.querySelector("h3").style.opacity = 1;
    activePanel.querySelector("h3").style.visibility = "visible";
  }
});

// Esconde o h1 e o h3 quando a classe .active for removida
panels.forEach((panel) => {
  panel.addEventListener("transitionend", () => {
    if (!panel.classList.contains("active")) {
      panel.querySelector("h1").style.opacity = 0;
      panel.querySelector("h1").style.visibility = "hidden";
      panel.querySelector("h3").style.opacity = 0;
      panel.querySelector("h3").style.visibility = "hidden";
    } else {
      panel.querySelector("h1").style.opacity = 1;
      panel.querySelector("h1").style.visibility = "visible";
      panel.querySelector("h3").style.opacity = 1;
      panel.querySelector("h3").style.visibility = "visible";
    }
  });
});
