import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento?</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            placeholder="01/01/2023"
            name="dataEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento?</Label>
          <ListaSuspensa />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
