import { Router } from "express";
const router = Router();
import control from "../controllers/controller.js";

router.get("/prueba", control.pruebaRouter);
router.get("/magic", control.sendingMagic);
router.post("/magicReq", control.magicRequest);

export default router;
