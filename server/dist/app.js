var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
const app = express();
const SERVER_PORT = 3055;
import bodyParser from "body-parser";
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    limit: "1mb",
    extended: true,
    parameterLimit: 200,
}));
app.listen(SERVER_PORT, () => {
    try {
        console.log("Server is up on Port: " + SERVER_PORT);
    }
    catch (error) {
        console.log("Something went wrong while listen to port " +
            SERVER_PORT +
            ". Erorr: " +
            error);
    }
});
let message = {
    to: "Frederik",
    from: "Raphi",
    message: "Hi",
    id: 0,
};
app.get("/", (req, res, next) => {
    try {
        res.send(message);
    }
    catch (error) {
        console.log("Something went wrong while posting a data to frontend. Error: " + error);
    }
});
function callBack() {
    console.log("Saved log in a SuccesLog.txt");
}
app.get("/messages", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //ACHTUNG: WENN JEMAND AUF /messages mit Get-Request zugreift passiert das: app.get('messages')...
    try {
        //console.log(res.render("data", { data: req.body.name }));
        console.log(...req.body);
    }
    catch (error) {
        console.log("Something went wrong while pulling data from frontend. Error: " + error);
    }
}));
app.post("/messages", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //ACHTUNG: WENN JEMAND AUF /messages mit Post-Request zugreift passiert das: app.post('messages')...
    try {
        let data = req.body;
        console.log(data);
    }
    catch (_a) {
        console.log("Something went wrong");
    }
}));
//# sourceMappingURL=app.js.map