const header = document.querySelector("header")
const menuToggle = document.querySelector(".menu-toggle")
const menu = document.querySelector("#menu")

// função central (ESSENCIAL)
function updateHeader(){
  const isScrolled = window.scrollY > 50
  const isMenuOpen = menu.classList.contains("active")

  if(isScrolled || isMenuOpen){
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

// scroll
window.addEventListener("scroll", updateHeader)

// clique no menu
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active")
  updateHeader() // atualiza após abrir/fechar
})