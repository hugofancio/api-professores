import { z } from "zod";

export const createProfessorSchema = z.object({
    body: z.object({
        nome: z
            .string({ message: "O nome é obrigatório" })
            .min(3, { message: "O nome precisa ter no mínimo 3 letras" }),
        email: z
            .email({ message: "Precisa ser um email válido" }),
        disciplina: z
            .string({ message: "A disciplina é obrigatória" })
            .min(2, { message: "A disciplina precisa ter no mínimo 2 letras" }),
        telefone: z
            .string({ message: "O telefone é obrigatório" })
            .min(8, { message: "O telefone precisa ter no mínimo 8 dígitos" }),
    }),
});
