import express from "express";
import {promises, readFile} from "fs";
import timesRouter from "./routes/times.js";

//const readFile = promises.readFile;
const writeFile = promises.writeFile;

init();

const app = express();
app.use(express.json());

app.use("/times", timesRouter);

app.listen(3333, () => {
    console.log("API Running on port 3333.")
});

let partidas = [];
let times = [];

async function init(){
    try{
        const resp = await readFile("./2003.json");
        const data = JSON.parse(resp);
        data.forEach(rodada => {
            partidas = rodada.partidas;
            partidas.forEach(partida => {
                if(times.findIndex(item => item.time === partida.mandante === -1){
                    times.push({time: partida.mandante, pontuacao: 0});
                }
                if(times.findIndex(item => item.time === partida.visitante === -1){
                    times.push({time: partida.visitante, pontuacao: 0});
                }
            });
        });
        ordenaTimes();
    }
    catch(err){
        console.log(err);
    }
}

async function ordenaTimes(){
    try{
        const resp = await readFile("./2003.json");
        const data = JSON.parse(resp);
        data.forEach(rodada =>{
            partidas = rodada.partidas;
            partidas.forEach(partida => {
                if (partida.placar_visitante > partida.placar_mandante) {
                    const index = times.findIndex(item => item.time === partida.visitante);
                    let time = times[index];
                    time.pontuacao += 3;
                    times[index] = time;
                } else if (partida.placar_visitante < partida.placar_mandante) {
                    const index = times.findIndex(item => item.time === partida.mandante);
                    let time = times[index];
                    time.pontuacao += 3;
                    times[index] = time;
                } else {
                    const indexMandante = times.findIndex(item => item.time === partida.mandante);
                    const indexVisitante = times.findIndex(item => item.time === partida.visitante);
                    
                    let mandante = times[indexMandante];
                    mandante.pontuacao += 1;

                    let visitante = times[indexVisitante];
                    visitante.pontuacao += 1;
                }
        });
        times.sort((a, b) => {
            return b.pontuacao - a.pontuacao;
        });
    });
    await writeFile("./times.json", JSON.stringify(times));
    } catch (err) {
        console.log(err);
    }
}