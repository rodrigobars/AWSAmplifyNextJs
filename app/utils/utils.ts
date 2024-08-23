function roundHalfUp(value: number): string {
    const decimalPlaces: number = 2
    const factor = Math.pow(10, decimalPlaces);
    const result = Math.round(value * factor) / factor;
    return result.toFixed(decimalPlaces);
}
  
export function formatarParaReais(valorFloat: number): string {
    const valorFormatado = roundHalfUp(valorFloat)
    const [parteInteira, parteDecimal] = valorFormatado.split('.');
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