const axios = require("axios");
const cron = require("node-cron");

const createContent = (content, id, attachment) => {
    return {
        content,
        id,
        attachment
    };
};

const schedule = async (hr, min, data, product = "") => {
    const url = genUrl(product);

    cron.schedule(`0 ${min} ${hr} * * *`, async () => {
        console.log(`posting to ${product}...`);

        const request = await axios.post(url, data);
        console.log(request.data);
    });
};

const devUrl = "http://localhost:4000";
const prodUrl = "https://smm-p0cq.onrender.com";

const hostUrl = () => {
    switch (process.env.NODE_ENV) {
        case "development":
            return devUrl;
        case "production":
            return prodUrl;

        default:
            return prodUrl;
    }
};

const genUrl = group => {
    const host = hostUrl();
    return `${host}/api/${group}/groups`;
};

const ping = async () => {
    setInterval(async function () {
        console.log("pinging...");
        const req = await axios.get(`${hostUrl()}/api`);
        console.log(req.data);
    }, 600000);
};

const postToMaral = async () => {
    const firstContent = createContent("message", 1, 4);
    const secondContent = createContent("message2", 1, 1);
    const thirdContent = createContent("message3", 1, 2);
    const fourthContent = createContent("message", 1, 3);

    await schedule(4, 30, secondContent, "maral");
    await schedule(10, 6, firstContent, "maral");
    await schedule(15, 0, thirdContent, "maral");
    await schedule(21, 22, fourthContent, "maral");
};

const postToBioForce = async () => {
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 1, 2);

    await schedule(8, 30, firstContent, "bioforce");
    await schedule(17, 0, secondContent, "bioforce");
};

const postToOxys = async () => {
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 1, 2);

    await schedule(12, 0, firstContent, "oxys");
    await schedule(20, 30, secondContent, "oxys");
};

const postToMatcha = async () => {
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 1, 2);

    await schedule(8, 0, firstContent, "matcha");
    await schedule(16, 20, secondContent, "matcha");
};

const postToMotionEnergy = async () => {
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 1, 2);

    await schedule(13, 0, firstContent, "motion");
    await schedule(20, 0, firstContent, "motion");
};

const postToRico = async () => {
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 1, 2);

    await schedule(9, 0, firstContent, "rico");
    await schedule(18, 15, secondContent, "rico");
};

const postToLeveren = async () => {
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 1, 2);

    await schedule(9, 0, firstContent, "leveren");
    await schedule(19, 40, secondContent, "leveren");
};

const postToSimpla = async () => {
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 1, 2);

    await schedule(13, 0, firstContent, "simpla");
    await schedule(22, 15, secondContent, "simpla");
};

const postToGiarulon = async () => {
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 1, 2);
    const thirdContent = createContent("message2", 1, 2);

    await schedule(12, 25, firstContent, "giarulon");
    await schedule(18, 0, secondContent, "giarulon");
    await schedule(2, 0, thirdContent, "giarulon");
};

const postToIncasol = async () => {
    const url = genUrl("incasol");
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 2, 1);

    cron.schedule(`0 0 15 * * *`, () => {
        for (let i = 1; i <= 7; i++) {
            setTimeout(async function () {
                console.log("posting to Incasol ID", i);
                await axios.post(url, createContent("message", i, 1));
            }, 120000 * i);
        }
    });

    cron.schedule(`0 0 3 * * *`, () => {
        for (let i = 1; i <= 7; i++) {
            setTimeout(async function () {
                console.log("posting to Incasol ID", i);
                await axios.post(url, createContent("message2", i, 1));
            }, 120000 * i);
        }
    });
};

const postToGrinlait = async () => {
    const url = genUrl("grinlait");
    const firstContent = createContent("message", 1, 1);
    const secondContent = createContent("message2", 2, 1);

    cron.schedule(`0 0 12 * * *`, () => {
        for (let i = 1; i <= 7; i++) {
            setTimeout(async function () {
                console.log("posting to Grinlait ID", i);
                await axios.post(url, createContent("message", i, 1));
            }, 120000 * i);
        }
    });

    cron.schedule(`0 40 18 * * *`, () => {
        for (let i = 1; i <= 7; i++) {
            setTimeout(async function () {
                console.log("posting to Grinlait ID", i);
                await axios.post(url, createContent("message2", i, 1));
            }, 120000 * i);
        }
    });
};

const postToDG = async () => {
    const url = genUrl("dustongel");

    cron.schedule(`0 0 15 * * *`, () => {
        for (let i = 1; i <= 2; i++) {
            setTimeout(async function () {
                console.log("posting to DG ID", i);
                await axios.post(url, createContent("message", i, 1));
            }, 120000 * i);
        }
    });

    cron.schedule(`0 0 3 * * *`, () => {
        for (let i = 1; i <= 2; i++) {
            setTimeout(async function () {
                console.log("posting to DG ID", i);
                await axios.post(url, createContent("message2", i, 1));
            }, 120000 * i);
        }
    });
};

const postToCardio = async () => {
    const url = genUrl("cardiovax");

    cron.schedule(`0 0 12 * * *`, () => {
        for (let i = 1; i <= 2; i++) {
            setTimeout(async function () {
                console.log("posting to Cardiovax ID", i);
                await axios.post(url, createContent("message", i, 1));
            }, 120000 * i);
        }
    });

    cron.schedule(`0 0 18 * * *`, () => {
        for (let i = 1; i <= 2; i++) {
            setTimeout(async function () {
                console.log("posting to Cardiovax ID", i);
                await axios.post(url, createContent("message2", i, 1));
            }, 120000 * i);
        }
    });
};

try {
    ping();
    postToDG();
    postToMaral();
    postToBioForce();
    postToIncasol();
    postToOxys();
    postToCardio();
    postToSimpla();
    postToMatcha();
    postToLeveren();
    postToRico();
    postToGrinlait();
    postToGiarulon();
} catch (e) {
    console.log(e.message);
}
