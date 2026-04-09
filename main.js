// function selectImage(img) {
//   const thumbnails = document.querySelectorAll(".subImage");

//   thumbnails.forEach((thumbnail) => {
//     thumbnail.classList.remove("selected");
//   });

//   img.classList.add("selected");
// }
// function changeMainImage(thumbnail) {
//   const mainImage = document.querySelector(".mainImage");
//   mainImage.src = thumbnail.src.replace("-thumbnail", "");
// }


function selectImage(img){

    const thumbnail=document.querySelectorAll(".subImage");
    thumbnail.forEach((thumbnail)=>{
        thumbnail.classList.remove("selected");
    })
    img.classList.add("selected");
}
function changeMainImage(thumbnail){
    const mainImage=document.querySelector(".mainImage");
  
    mainImage.src= thumbnail.src.replace("-thumbnail", "");
}