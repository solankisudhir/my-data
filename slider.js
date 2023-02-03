const slides = document.querySelectorAll('img')
let count = 0
console.log(slides);
 

slides.forEach(
    (img,index) => {
        img.style.left = `${index * 100}%`
    }
)

const slidesimg = () => {
    slides.forEach(
    (img) => {
        img.style.transform = `translatex(${(count%4) * 100}%)`
    }
)
}
const goright = () =>{
    count++
    slidesimg()
}
const goleft = () =>{
    count--
    slidesimg()
}