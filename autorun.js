const axios = require("axios");
const cron = require("node-cron");

const createContent = (content, id, attachment) => {
  return {
    content,
    id,
    attachment,
  };
};

const genUrl = (group) => {
  // return `http://localhost:4000/api/${group}/groups`;

  return `https://smm-p0cq.onrender.com/api/${group}/groups`;
};

const postToMaral = () => {
  const url = genUrl("maral");
  const firstContent = createContent("message", 1, 4);
  const secondContent = createContent("message2", 1, 1);

  cron.schedule("0 0 4 * * *", () => {
    const request = axios.post(url, firstContent);
    console.log(request.data);
  });
};

const postToBioForce = () => {
  const url = genUrl("bioforce");
  const firstContent = createContent("message", 1, 1);
  const secondContent = createContent("message2", 1, 2);

  cron.schedule("0 43 22 * * *", () => {
    console.log(url);
    //axios.post(url, secondContent);
  });
};

postToMaral();
postToBioForce();
