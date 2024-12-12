var form = document.getElementById("frm");
var submit = document.getElementById("button");
var output = document.querySelector(".output");
var spinner = document.getElementById("loading");
var codeOutput = document.getElementById("qrcode");
var downloadBtn = document.getElementById("download");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  const clrDark = document.getElementById("colorDark").value;
  const clrLight = document.getElementById("colorLight").value;

  if (url === "") {
    alert("Please Enter Your Website URL");
  } else {
    spinner.style.display = "flex";

    setTimeout(function () {
      spinner.style.display = "none";
      codeOutput.innerHTML = "";
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: `${url}`,
        width: size,
        height: size,
        colorDark: clrDark,
        colorLight: clrLight,
        correctLevel: QRCode.CorrectLevel.H,
      });
    }, 1800);
  }
});
downloadBtn.addEventListener("click", () => {
  setTimeout(() => {
    const imgSource = codeOutput.querySelector("img").src;
    downloadBtn.href = imgSource;
    downloadBtn.download = "qrcode";
  }, 50);
});
