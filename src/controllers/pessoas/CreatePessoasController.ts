import { Request, Response } from "express";
import { cnpj as _cnpj, cpf } from "cpf-cnpj-validator";
import { CreatePessoasService } from "../../services/pessoas/CreatePessoasService";

export class CreatePessoasController {
    async handle(request: Request, response: Response) {
        const { razao, fantasia, ie, cnpj, id_tipo } = request.body;


        if ((razao.length) > 60) {
            return response.status(400).json({
                success: false,
                error: "Razão Social superior a 60 caracteres.",
            });
        }
        if ((fantasia.length) > 60) {
            return response.status(400).json({
                success: false,
                error: "Fantasia superior a 60 caracteres.",
            });
        }
        switch (cnpj.length) {
            case 11: {
                if (!cpf.isValid(cnpj)) {
                    return response.status(400).json({
                        success: false,
                        error: "CPF com valor incorreto verifique.",
                    });
                }
                break;
            }
            case 14: {
                if (!_cnpj.isValid(cnpj)) {
                    return response.status(400).json({
                        success: false,
                        error: "CNPJ com valor incorreto verifique.",
                    });
                }
                break;
            }
            default: {
                return response.status(400).json({
                    success: false,
                    error: "CNPJ com formato incorreto verifique.",
                });
                break;
            }
        }

        const service = new CreatePessoasService();
        const result = await service.execute({ razao, fantasia, ie, cnpj, id_tipo });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).json(
            {
                success: true,
                result,
            }
        );
    }

}