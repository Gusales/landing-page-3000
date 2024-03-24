const openButton = document.getElementById("learn_more_link")
const closeButton = document.getElementById("close_cta_modal")
const overlay = document.querySelector(".form-overlay")

openButton.addEventListener('click', () => {
  overlay.style.display = "flex"
  overlay.classList.remove('close_cta_form')
  overlay.show()
})

closeButton.addEventListener('click', () => {
  overlay.classList.toggle('close_cta_form')
  overlay.close()
})