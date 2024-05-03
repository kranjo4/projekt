// const express = require("express");
// const bodyParser = require("body-parser");
// const fetch = require("node-fetch");
// const cors = require("cors");

// // import express from "express";
// // import bodyParser from "body-parser";
// // import fetch from "node-fetch";
// // import cors from "cors";

// const app = express();
// app.use(bodyParser.json());
// app.use(cors()); // Enables CORS for all origins

// const API_URL = "https://snyk.io/api/v1/test";
// const API_KEY = "Token c7d9e33b-91e6-427f-b7b9-daaa927d918f"; // Replace with your actual Snyk API key

// app.post("/upload", (req, res) => {
//   const file = req.body.file; // Ensure you're sending the file correctly from the frontend

//   fetch(API_URL, {
//     method: "POST",
//     body: JSON.stringify({ file }),
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   })
//     .then((apiRes) => apiRes.json())
//     .then((data) => res.json(data))
//     .catch((error) =>
//       res.status(500).json({ message: "Failed to fetch data", error })
//     );
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

import("node-fetch").then((fetch) => {
  const express = require("express");
  const bodyParser = require("body-parser");
  const cors = require("cors");

  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  //   const API_URL = "https://snyk.io/api/v1/test";
  const API_URL =
    "https://api.snyk.io/v1/org/05a80c0d-a171-4f64-a4c6-1f97ad5d21a4/integrations/de1f4448-170d-4485-b71d-8ef5949817d3/import";
  // const API_URL =
  // "https://api.snyk.io/v1/org/05a80c0d-a171-4f64-a4c6-1f97ad5d21a4/import";
  //   const API_KEY = "Token c7d9e33b-91e6-427f-b7b9-daaa927d918f";

  app.post("/upload", (req, res) => {
    const file = req.body.file;

    fetch
      .default(API_URL, {
        method: "POST",
        // body: JSON.stringify({ file }),
        headers: {
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${API_KEY}`,
          Authorization: `token f4a9229f-2c55-466c-b93f-aa5d3ee95f70`,
        },
        body: JSON.stringify({
          target: "https://github.com/Ekipa09/nevarna", // tale shit je problem
          file: file,
        }),
      })
      .then((apiRes) => apiRes.json())
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(500).json({ message: "Failed to fetch data", error })
      );
  });

  //-------------------------------------------------------------------------------
  //   app.post("/upload", (req, res) => {
  //     const file = req.body.file;
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     fetch(API_URL, {
  //       method: "POST",
  //       //   body: JSON.stringify({
  //       // target: {
  //       //   owner: "Ekipa09",
  //       //   name: "nevarna",
  //       //   branch: "main",
  //       // },
  //       body: formData,

  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "token f4a9229f-2c55-466c-b93f-aa5d3ee95f70",
  //       },
  //     })
  //       .then((apiRes) => {
  //         console.log("Status:", apiRes.status);
  //         return apiRes.json();
  //       })
  //       .then((data) => res.json(data))
  //       .catch((error) =>
  //         res.status(500).json({ message: "Failed to fetch data", error })
  //       );
  //   });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
