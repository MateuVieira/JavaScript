
import { NegociacaoController } from './controllers/NegociacaoController';

let negociacaoController = new NegociacaoController();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#buttonApaga').onsubmit = negociacaoController.apaga.bind(negociacaoController);
//# sourceMappingURL=boot.js.map