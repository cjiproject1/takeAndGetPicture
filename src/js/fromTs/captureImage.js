"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Fetches image from esp and saves as an img.src in the index.html
var get = Reflect.get;
function captureImg() {
    return __awaiter(this, void 0, void 0, function* () {
        //delete any photo in ESp and take a new one
        let response = yield fetch('http://192.168.2.124/capture');
        if (response.status === 200) {
            //refresh/reload the page and the call getCapturedPixFromEsp()
            console.log("Capture Success!");
        }
        else
            console.log("Capture Failed!");
    });
}
let takePhotoBtn = document.getElementById("takeImg");
takePhotoBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield captureImg()
        .then(r => console.log('photo taking completed'));
}));
/*Creates an img tag based on if the id is savedImg or imgFromEsp
function createBtn(btnName: string, id: string) {
  let newBtn = document.createElement("button")
  let sideBar = document.getElementsByClassName("sideColumnMenu")
  newBtn.id = id;
  newBtn.innerHTML = btnName;
  //return document.body.append(newBtn) //append it to sideColumnMenu
  return newBtn
}

let newChild = createBtn("TakePicture", "captureBtn")

let div = document.createElement("div")
div.className = "newDiv"
let parentN = document.getElementsByClassName("sideBarButtons")!
parentN[0].appendChild(div)
for(let i = 0; i < parentN.length; i++){
  if(parentN){
    newChild.style.padding = "10px"
    newChild.style.float = "left"
    //newChild.style.width = "100%"
    newChild.style.fontSize = "20px"
    newChild.style.textAlign = "center"
    //parentN[i].append(newChild)

    let childNode = document.getElementsByClassName("newDiv")!
    childNode[i].appendChild(newChild)
    console.log("sideColumnMenu child: captureBtn created, i = ", i)
  }
}*/
/*let data = await response.blob();
    // handle data:  convert img to string using Base64, then save to localstorage and set as src. TODO: save to path,
    let reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onloadend = function() {
      let base64data = reader.result; //returns file as encoded string
      let newImgUrlFromBase64data =   String(base64data)//dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      localStorage.setItem("captureImg", newImgUrlFromBase64data);//String.replace(/^data:image\/(png|jpg);base64,/, "rcvd")
    }
    //get img from localstorage and save to dir and pass the path as src
    let newImgSrc = localStorage.getItem("captureImg")!
    if(newImgSrc !== null && newImgSrc !== "data:"){
      let newImage = (document.getElementById('capturedImg') as HTMLImageElement);
      newImage. style. width = '400px';
      newImage.style. height = 'auto';
      newImage.style.margin = '20px';
      newImage.src = newImgSrc;
    }*/
