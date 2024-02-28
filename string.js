const estudante = " João";
const docente = " Pedro";
const cumprimento = "nosso lema é estudar bastante!  ";
const citacao = ` João diz : "nosso lema é estudar bastante!" `;

console.log(cumprimento);
console.log(citacao);

console.log(`o estudante chama ${estudante} ${docente}`) //template string ${}

const senha = "SenhaSegura123" + estudante.toUpperCase();
console.log(senha);