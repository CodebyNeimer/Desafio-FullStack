import {z} from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(1),
    email:z.string().min(1).email("Digite um email valido"),
    password:z.string().min(8, "Minimo de 8 caracteres")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")  
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos um caracter minúsculo.")
        .regex(/(?=.*?[0-9])/, "É necesário pelo menos um número."),
    phone: z.string().min(8)
})