const btn = document.getElementById("menu-btn")
const nav = document.getElementById("menu")
const order = document.getElementById("btn-order")

btn.addEventListener('click',() => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

order.addEventListener('click', () => {
    window.open( href="//api.whatsapp.com/send?phone=237675302930&text=Origine%20saha.farm :", '_blank')
})