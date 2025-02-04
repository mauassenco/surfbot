import BgAulas from '../../assets/images/foto-galeria.webp';
import MapaAulas from '../../assets/images/mapa.webp';
import FlipFlop from '../../assets/images/sandalhas.svg';
import Coconut from '../../assets/images/coco.svg';
import Buoy from '../../assets/images/boia.svg';

// Styles
import * as Styles from './styles';

const Aulas = () => {
  return (
    <Styles.Aulas>
      <Styles.ContainerLeft>
        <img src={BgAulas} alt="uma casa com pranchas a sua frente" />
        <div>
          <img src={MapaAulas} alt="mapa" />
        </div>
        <Styles.ContainerLeftInfo>
          <h2>Como chegar</h2>
          <p>
            <span>Carro</span> pela via Lúcio Costa sentido Barra
          </p>
          <p>
            <span>Ônibus</span> linhas 2333, 138, 189 e 170
          </p>
          <p>
            <span>Metrô</span> linha azul sentido Zona Sul
          </p>
        </Styles.ContainerLeftInfo>
      </Styles.ContainerLeft>
      <Styles.ContainerRight>
        <Styles.ContainerRightTitle>
          <span>Aulas</span> em uma das melhores praias do <span>Rio</span>.
        </Styles.ContainerRightTitle>
        <Styles.ContainerRightFeatures>
          <Styles.FeatureItem>
            <img src={FlipFlop} alt="sandalhas" />
            8km de costa
          </Styles.FeatureItem>
          <Styles.FeatureItem>
            <img src={Coconut} alt="coco" />
            Restaurantes à beira mar
          </Styles.FeatureItem>
          <Styles.FeatureItem>
            <img src={Buoy} alt="boia" />
            Salva-vidas a cada 300m
          </Styles.FeatureItem>
        </Styles.ContainerRightFeatures>
        <Styles.ContainerRightInfo>
          <p>
            Como cidade capital, abriga na zona chamada Plateau, promontório à beira-mar, edifícios públicos e outras
            construções de importância, como o Palácio Presidencial, construído no fim do século XIX para ser a
            residência do governador português.
          </p>

          <p>
            Como cidade capital, abriga na zona chamada Plateau, promontório à beira-mar, edifícios públicos e outras
            construções de importância, como o Palácio Presidencial, construído no fim do século XIX para ser a
            residência do governador português.
          </p>
        </Styles.ContainerRightInfo>
      </Styles.ContainerRight>
    </Styles.Aulas>
  );
};

export default Aulas;
