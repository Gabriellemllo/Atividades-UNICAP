document.getElementById('somar').addEventListener('click', function() {
   
    const salario = parseFloat(document.getElementById('salario').value);
    const resultado = document.getElementById('resultado');

   
    function CalculoDaAliquota(salario, ir) {
        return (ir / salario) * 100;
    }

    
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
    

 
    const impostoDevido = CalculoDoImposto(salario);
    const aliquotaEfetiva = CalculoDaAliquota(salario, impostoDevido).toFixed(2);

    
    resultado.innerHTML = `
        <p>Imposto devido: R$ ${impostoDevido.toFixed(2)}</p>
        <p>Alíquota efetiva: ${aliquotaEfetiva}%</>p
        
    `
})
    