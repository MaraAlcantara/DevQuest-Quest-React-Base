import './App.css';
import Button from './components/button/button-alert-label';
import BotaoFormatarParagrafo from './components/button/button-format-paragraph';

function App() {

  const paragrafo = 'React é uma biblioteca JavaScript de código aberto usada para construir Aplicações de página única. O React é baseado no conceito de componentes. Um componente é uma unidade reutilizável e independente de UI que pode ser funcional ou baseado em classes.'

  return (
    <>
      <div>
        <BotaoFormatarParagrafo texto={paragrafo} corInicial="black" corNova="orange" />

        <Button label='Entendi o Conteúdo' />
      </div>
    </>
  );
}

export default App;
