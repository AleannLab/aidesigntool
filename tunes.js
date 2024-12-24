// eslint-disable-next-line @typescript-eslint/no-require-imports
const fetch = require("node-fetch");

const API_KEY = "sd_***";
const DOMAIN = "https://api.astria.ai";

function tunes() {
  let options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
  };
  return fetch(DOMAIN + "/tunes/1975291/prompts", options)
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
      return r;
    })
    .catch((e) => {
      console.log(e);
    });
}

tunes();
