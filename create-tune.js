// eslint-disable-next-line @typescript-eslint/no-require-imports
const fetch = require("node-fetch");

const urls = [
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa001.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa002.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa005.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa006.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa009.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa011.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa012.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa016.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa018.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa019.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa021.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa022.jpg",
  "https://www.womenfitness.net/wp/wp-content/uploads/2023/10/aa023.jpg",
];

const API_KEY = "sd_***";
const DOMAIN = "https://api.astria.ai";

function createTune() {
  let options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tune: {
        title: "Lora - ID - 1",
        // Hard coded tune id of Realistic Vision v5.1 from the gallery - https://www.astria.ai/gallery/tunes
        // https://www.astria.ai/gallery/tunes/690204/prompts
        // "base_tune_id": 690204,
        name: "Lora",
        image_urls: urls,
      },
    }),
  };
  return fetch(DOMAIN + "/tunes", options)
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
      return r;
    })
    .catch((e) => {
      console.log(e);
    });
}

createTune();
