import express from "express";
import gradeRoute from "./routes/grade.js";
import notaAlunoRoute from "./routes/notaAluno.js";
import mediaRoute from "./routes/media.js"
import topGradeRoute from "./routes/topGrade.js"

const app = express();
app.use(express.json());

app.use("/grade", gradeRoute);
app.use("/notaaluno", notaAlunoRoute);
app.use("/media", mediaRoute);
app.use("/topgrade", topGradeRoute);

app.listen(3333, () => {
    console.log("API running on port 3333.")
})