const dropArea = document.getElementById("drop-area");
const resultDiv = document.getElementById("result");
const fileInput = document.getElementById("fileElem");
const fileButton = document.getElementById("fileButton");
const uploadButton = document.getElementById("uploadButton");
// const fs = require("fs");

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("highlight");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("highlight");
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  dropArea.classList.remove("highlight");
  const files = event.dataTransfer.files;
  handleFiles(files);
});

fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  handleFiles(files);
});

fileButton.addEventListener("click", () => {
  fileInput.click();
});

function handleFiles(files) {
  const file = files[0];
  if (file) {
    uploadButton.style.display = "block";
    fileNameDisplay.innerText = file.name;
  } else {
    uploadButton.style.display = "none";
    fileNameDisplay.innerText = "";
  }
}

// uploadButton.addEventListener("click", () => {
//   const files = fileInput.files;
//   handleUpload(files);
// });

// function handleUpload(files) {
//   const file = files[0];
//   const formData = new FormData();
//   formData.append("file", file);

//   fetch("https://snyk.io/api/v1/test", {
//     method: "POST",
//     body: formData,
//     headers: {
//       Authorization: "Token c7d9e33b-91e6-427f-b7b9-daaa927d918f",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       resultDiv.innerHTML = JSON.stringify(data, null, 2);
//     })
//     .catch((error) => {
//       console.error("Napaka pri pošiljanju zahteve:", error);
//       resultDiv.innerHTML = "Napaka pri pošiljanju zahteve";
//     });
// }

uploadButton.addEventListener("click", () => {
  const files = fileInput.files;
  handleUpload(files);
  resultDiv.innerHTML = "Uploading and analyzing...";
});

// Specify the path to the file

// Read the content of the file

function handleUpload(files) {
  const file = files[0];
  const formData = new FormData();
  formData.append("file", file);

  // fs.readFile(file, "utf8", (err, data) => {
  //   if (err) {
  //     console.error("Error reading file:", err);
  //     return;
  //   }
  //   console.log("Content of the file:", data);
  // });

  fetch("http://localhost:3000/upload", {
    // This now points to your local server
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      resultDiv.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error sending request:", error);
      resultDiv.innerHTML = "Error sending request: " + error.message;
    });
}
