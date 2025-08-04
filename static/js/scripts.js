var sidebarContent = document.getElementById("sidebar-conteudo");

const sidebarMaxSize = "175px"




async function render_content(url) {
  const mainContent = document.getElementById("article-content");
  mainContent.innerHTML = "";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      alert("Erro ao carregar o conteúdo. Tente novamente mais tarde.");
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const page = await response.text();

    document.getElementById("article-content").innerHTML = page;
  } catch (error) {
    console.error("Erro ao carregar a página:", error);
    mainContent.innerHTML =
      "<h1>Erro 404 - Página não encontrada</h1><p>O conteúdo solicitado não pôde ser carregado.</p>";
  }
}

async function render_menu(url) {
  //const sidebarContent = document.getElementById("sidebar-conteudo");
  sidebarContent.innerHTML = "";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      alert("Erro ao carregar o conteúdo. Tente novamente mais tarde.");
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const page = await response.text();

    document.getElementById("sidebar-conteudo").innerHTML = page;
  } catch (error) {
    console.error("Erro ao carregar a página:", error);
    sidebarContent.innerHTML =
      "<h1>Erro 404 - Página não encontrada</h1><p>O conteúdo solicitado não pôde ser carregado.</p>";
  }
}

function toggleMenu() {
  const disciplina = document.getElementById("disciplina").value;
  const botao = document.getElementById("menu-button")

  if (disciplina !== "default") {
  //sidebarButtons.style.display = sidebarButtons.style.display === "none" ? "block" : "none";
  sidebarContent.style.width = sidebarContent.style.width === sidebarMaxSize ? "0px" : sidebarMaxSize;
  sidebarContent.innerHTML =
    sidebarContent.style.width === sidebarMaxSize
      ? render_menu(`./static/pages/menu/${disciplina}.html`)
      : "";
      
  }
  
}

function changeMenu(){
  const disciplina = document.getElementById("disciplina").value;
  if (sidebarContent.style.width === sidebarMaxSize) {
    sidebarContent.innerHTML = render_menu(`./static/pages/menu/${disciplina}.html`);
  }
}