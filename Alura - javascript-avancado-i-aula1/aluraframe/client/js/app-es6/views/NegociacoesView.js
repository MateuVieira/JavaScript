import {View} from './view';
import {DateHelper} from '../helpers/DateHelper';

export class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th onclick="negociacaoController.ordena('data')">DATA</th>
                        <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                        <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                        <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                    </tr>
                </thead>
                
                <tbody id="tbody">
                </tbody>
                    ${model.negociacoes.map(n => 
                        `
                            <tr>
                                <td>${DateHelper.dateParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        `
                    ).join('')}
                <tfoot>
                        <td colspan="3"></td>
                        <td>${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
                </tfoot>
            </table> 
        `;
    }

}

