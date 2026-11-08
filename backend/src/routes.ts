import { Router } from "express";
import { validateSchema } from "./middlewares/validateSchema";
import { createProfessorSchema } from "./schemas/professorSchema";
import { CreateProfessorController } from "./controllers/professor/CreateProfessorController";

const router = Router();

router.post("/professores",
    validateSchema(createProfessorSchema),
    new CreateProfessorController().handle
);

export { router };
