const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
/*
ctx.fillText("Canvas Text!", 100, 100);
ctx.fillStyle = '#42e9f5';
ctx.strokeStyle = '#42e9f5';
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height);
ctx.lineTo(canvas.width, 0);
ctx.lineTo(0, 0);
//ctx.lineTo(canvas.width/2, canvas.height); (adicionando o ponto exato do fim do triângulo, ou botando closepath dá no mesmo)
ctx.closePath();
//Stroke é a borda, fill é o preenchimento
ctx.stroke(); ou ctx.fill();
*/
const img = new Image();

const reader = new FileReader();

function uploadImage(e) {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        img.src = reader.result;
        img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        }

    }
}
function greyscale() {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for(let i=0; i<data.length; i+=4) {
        const grey = data[i]*0.2126 + data[i+1]*0.7152 + data[i+2]*0.0722;
        data[i] = grey;
        data[i+1] = grey;
        data[i+2] = grey;
    }
    ctx.putImageData(imgData, 0, 0);
}
function sepia(){
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
      data[i] = grey + 95;
      data[i + 1] = grey + 58;
      data[i + 2] = grey;
    }
    ctx.putImageData(imageData, 0, 0);
};
function invert() {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for(let i=0; i<data.length; i+=4) {
        data[i] = 255-data[i];
        data[i+1] = 255-data[i+1];
        data[i+2] = 255-data[i+2];
    }
    ctx.putImageData(imgData, 0, 0);
}
function rbg() {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for(let i=0; i<data.length; i+=4) {
        const green = data[i+1];
        data[i] = data[i];
        data[i+1] = data[i+2];
        data[i+2] = green;
    }
    ctx.putImageData(imgData, 0, 0);
}
function bgr() {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for(let i=0; i<data.length; i+=4) {
        const red = data[i];
        const green = data[i+1];
        const blue = data[i+2];
        data[i] = blue;
        data[i+1] = green;
        data[i+2] = red;
    }
    ctx.putImageData(imgData, 0, 0);
}
function gbr() {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for(let i=0; i<data.length; i+=4) {
        const red = data[i];
        const green = data[i+1];
        const blue = data[i+2];
        data[i] = green;
        data[i+1] = blue;
        data[i+2] = red;
    }
    ctx.putImageData(imgData, 0, 0);
}
function grb() {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for(let i=0; i<data.length; i+=4) {
        const red = data[i];
        const green = data[i+1];
        const blue = data[i+2];
        data[i] = green;
        data[i+1] = red;
        data[i+2] = blue;
    }
    ctx.putImageData(imgData, 0, 0);
}
function clearchanges(){
    img.src = reader.result
}
function download(){
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href=img;
    link.download = 'image.png';
    link.click();
}
document.querySelectorAll("button")[0].addEventListener("click", greyscale);
document.querySelectorAll("button")[1].addEventListener("click", sepia);
document.querySelectorAll("button")[2].addEventListener("click", invert);
document.querySelectorAll("button")[3].addEventListener("click", rbg);
document.querySelectorAll("button")[4].addEventListener("click", bgr);
document.querySelectorAll("button")[5].addEventListener("click", gbr);
document.querySelectorAll("button")[6].addEventListener("click", grb);
document.querySelectorAll("button")[7].addEventListener("click", clearchanges);
document.querySelectorAll("button")[8].addEventListener("click", download);
const imgLoader = document.getElementById('uploadImage');
imgLoader.addEventListener('change', uploadImage)