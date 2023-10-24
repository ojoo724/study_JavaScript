const colorOption = Array.from(
    document.getElementsByClassName("color-option")
);
const saveBtn = document.getElementById("save");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const modeBtn = document.getElementById("mode-btn");
const desBtn = document.getElementById("des-btn");
const eraserBtn = document.getElementById("eraser-btn");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = 800;
const canvasHeight = 800;

canvas.width = canvasWidth;
canvas.height = canvasHeight;
ctx.lineCap = "round";
ctx.lineWidth = lineWidth.value;

let isFilling = false;
let isPainting = false;

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY)
}

function startPainting(){
    isPainting = true;
}

function cancelPainting(){
    isPainting = false;
}

function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "🪣 Fill";
    }else{
        isFilling = true;
        modeBtn.innerText = "🖌️ Draw";
    }
}

function onClickCanvas(){
    if(isFilling){
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}

function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "🪣 Fill";
}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    img.onload = function(){
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight );
        fileInput.value = null;
    }
}
function onDoubleClick(event){
    const text = textInput.value;
    if(text !== ""){
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = "68px serif"
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
}

function onSaveImage(){
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "MyDrawing.png";
    a.click();

}


canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onClickCanvas);

// 선 두께 변경
lineWidth.addEventListener("change", onLineWidthChange);
// 색상 변경
color.addEventListener("change", onColorChange);

// 선택한 색상으로 변경
colorOption.forEach(color => color.addEventListener("click", onColorClick));

// 선, 채우기 변경
modeBtn.addEventListener("click", onModeClick);

// 도화지 초기화 
desBtn.addEventListener("click", onDestroyClick);

// 지우개
eraserBtn.addEventListener("click", onEraserClick);

// 사진첨부
fileInput.addEventListener("change", onFileChange);

// 밈 저장
saveBtn.addEventListener("click", onSaveImage);


//커밋 테스트용 코드
function testCode(){
    let testValue = false;
    if(testValue){
    }else{

    }
}