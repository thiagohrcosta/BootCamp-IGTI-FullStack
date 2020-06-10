import express from "express";
import {promises} from "fs";

const readFile = promises.readFile;

const router = express.Router();

router.get("/campeao", async (req, res) => {
    let campeao = await retornaCampeao();
    res.send(campeao);
});

async function retornaCampeao(){
    const resp = await readFile("./times.json");
    const data = JSON.parse(resp);
    return data[0];
}

export default router;