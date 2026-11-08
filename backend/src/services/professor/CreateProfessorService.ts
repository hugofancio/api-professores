import prismaCliente from "../../prisma";

interface CreateProfessorProps {
    nome: string;
    email: string;
    disciplina: string;
    telefone: string;
}

class CreateProfessorService {
    async execute({ nome, email, disciplina, telefone }: CreateProfessorProps) {
        const professorAlreadyExist = await prismaCliente.professor.findFirst({
            where: {
                email: email,
            },
        });

        if (professorAlreadyExist) {
            throw new Error("Professor já cadastrado!");
        }

        const professor = await prismaCliente.professor.create({
            data: {
                nome: nome,
                email: email,
                disciplina: disciplina,
                telefone: telefone,
            },
            select: {
                id: true,
                nome: true,
                email: true,
                disciplina: true,
                telefone: true,
                createdAt: true,
            },
        });

        return professor;
    }
}

export { CreateProfessorService };
