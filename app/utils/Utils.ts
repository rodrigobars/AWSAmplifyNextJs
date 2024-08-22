function arredondarDuasCasasDecimais(numero: number): string {
    // Multiplica o número por 100 para ter duas casas decimais na precisão
    const numeroComDuasCasasDecimais = numero * 100;

    // Arredonda para o inteiro mais próximo usando Math.round()
    const numeroArredondado = Math.round(numeroComDuasCasasDecimais);

    // Divide por 100 para voltar para o formato original com duas casas decimais
    const resultado = numeroArredondado / 100;

    // Retorna o resultado formatado com duas casas decimais
    return resultado.toFixed(0);
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