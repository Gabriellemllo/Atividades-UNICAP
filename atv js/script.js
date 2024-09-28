document.getElementById('somar').addEventListener('click', function() {
    // const para não modificar, o usuário coloca uma única vez
    const salario = parseFloat(document.getElementById('salario').value);
    const resultado = document.getElementById('resultado');

    // Função para calcular a porcentagem da alíquota, com dois parâmetros de entrada (salário e IR) e um retorno (a porcentagem efetiva de alíquota)
    function CalculoDaAliquota(salario, ir) {
        return (ir / salario) * 100;
    }

    // Função para cálculo do imposto devido, que recebe como entrada o salário e retorna o valor devido
    function CalculoDoImposto(salario) {
        let ir = 0;
    
        if (salario <= 1903.98) {
            return 0;
        } else if (salario <= 2826.65) {
            ir = (salario - 1903.98) * 0.075 - 142.80;
        } else if (salario <= 3751.05) {
            ir = (salario - 2826.65) * 0.15 - 354.80 + CalculoDoImposto(2826.65);
        } else if (salario <= 4664.68) {
            ir = (salario - 3751.05) * 0.225 - 636.13 + CalculoDoImposto(3751.05);
        } else {
            ir = (salario - 4664.68) * 0.275 - 869.36 + CalculoDoImposto(4664.68);
        }
    
        return ir < 0 ? 0 : ir;
    }

    // Exibir o resultado das funções
    const impostoDevido = CalculoDoImposto(salario);
    const aliquotaEfetiva = CalculoDaAliquota(salario, impostoDevido).toFixed(2);

    // Alterar o conteúdo do resultado usando tags apropriadas como <p> ou <span>
    resultado.innerHTML = `
        <p>Imposto devido: R$ ${impostoDevido.toFixed(2)}</p>
        <p>Alíquota efetiva: ${aliquotaEfetiva}%</p>
    `;
});
    