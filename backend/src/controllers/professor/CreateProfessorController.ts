import { Request, Response } from "express";
import { CreateProfessorService } from "../../services/professor/CreateProfessorService";

class CreateProfessorController {
    async handle(req: Request, res: Response) {
        const { nome, email, disciplina, telefone } = req.body;

        const createProfessor = new CreateProfessorService();

        const professor = await createProfessor.execute({
            nome: nome,
            email: email,
            disciplina: disciplina,
            telefone: telefone,
        });

        res.status(201).json(professor);
    }
}

export { CreateProfessorController };
