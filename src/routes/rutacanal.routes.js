import {Router} from "express";

const rutacanal = Router();

rutacanal.get("/", (req, res)=>{
    res.json({"application":"Youtube"})
})

rutacanal.get("/canal", (req, res)=>{
    res.json({
        "msg":"HOLA MUNDO",
        "user":"CAROLINA",
        "application":"Youtube",
        "type":"Backend"
    })
});

export default rutacanal;
