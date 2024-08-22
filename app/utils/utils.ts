import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { getCurrentUser } from "aws-amplify/auth";
import outputs from "@/amplify_outputs.json";
import { cookies } from "next/headers";

export const { runWithAmplifyServerContext } = createServerRunner({
    config: outputs
})

export async function GetAuthCurrentUserServer() {
    try{
        const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (context) => getCurrentUser(context)
        })
        return currentUser
    }catch(err){
        console.log(err)
    }
}

function roundHalfUp(value: number): string {
    const decimalPlaces: number = 2
    const factor = Math.pow(10, decimalPlaces);
    const result = Math.round(value * factor) / factor;
    return result.toFixed(decimalPlaces);
}
  
export function formatarParaReais(valorFloat: number): string {

    // Arredonda para duas casas decimais e converte para string
    const valorFormatado = roundHalfUp(valorFloat)
    //const valorFormatado = valorFloat.toFixed(2).toString();

    // Separa a parte inteira e a parte decimal
    const [parteInteira, parteDecimal] = valorFormatado.split('.');

    //const decimal = arredondarDuasCasasDecimais(parteDecimal)
    //console.log(decimal)

    // Adiciona a formatação de Reais (R$) com a vírgula
    const valorEmReais = `R$ ${parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${parteDecimal}`;

    return valorEmReais;
}

export function formatarCnpj(cnpj: string): string {
    // Remove qualquer caractere não numérico
    const cnpjLimpo = cnpj.replace(/\D/g, '');

    // Aplica a máscara padrão de CNPJ
    return cnpjLimpo.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        '$1.$2.$3/$4-$5'
    );
}