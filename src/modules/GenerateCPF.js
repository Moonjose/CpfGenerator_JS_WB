import ValidaCPF from "./ValidaCPF";

export default class GenerateCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formated(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  generateNewCpf() {
    const cpf_no_digit = this.rand();
    const digit1 = ValidaCPF.geraDigito(cpf_no_digit);
    const digit2 = ValidaCPF.geraDigito(cpf_no_digit + digit1);
    const new_cpf = cpf_no_digit + digit1 + digit2;
    return this.formated(new_cpf);
  }
}