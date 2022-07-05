import GenerateCPF from './modules/GenerateCPF';
import './assets/css/style.css';

(function() {
  const generate = new GenerateCPF();
  const cpf_generated = document.querySelector('.cpf-generated');
  cpf_generated.innerHTML = generate.generateNewCpf();
})();