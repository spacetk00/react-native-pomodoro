import React, {Component} from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {notificationManager} from './src/services/NotificationManager';

import Header from '../componentes/Header';
import Botoes from '../componentes/CaixaBotoes';
import BreakTransition from './transicoes/BreakTransition';
import DisplayTransition from './transicoes/DisplayTransition';
import Input from './src/componentes/Input';

const notificador = notificationManager;

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutosUsuario: 1,
      minutos: 1,
      segundos: 0,
      porcentagem: 0,
      inputDesativado: false,
      ativo: false,
      descanso: false,
      displayTimer: true,
    };

    this.pulsoDeClock = this.pulsoDeClock.bind(this);
    this.iniciaRelogio = this.iniciaRelogio.bind(this);
    this.pausarRelogio = this.pausarRelogio.bind(this);
    this.zerarRelogio = this.zerarRelogio.bind(this);
    this.alteraMinutos = this.alteraMinutos.bind(this);
    this.pararDescanso = this.pararDescanso.bind(this);
  }

  componentDidMount() {
    notificador.configurar();
    notificador.criarCanal();
  }

  alteraMinutos(min) {
    this.setState({minutos: min, minutosUsuario: min});
  }

  iniciaRelogio() {
    if (!this.state.descanso) {
      if (!this.state.ativo) {
        this.setState({clock: setInterval(this.pulsoDeClock, 1000)});
        this.setState({ativo: true});
        this.setState({inputDesativado: true});
      }
    }
  }

  pulsoDeClock() {
    let m = this.state.minutos;
    let s = this.state.segundos;

    if (this.state.ativo) {
      if (s > 0) {
        s--;
      } else {
        s = 59;
        if (m > 0) {
          m--;
        } else {
          this.zerarRelogio();
          setTimeout(() => {
            this.setState({displayTimer: false});
          }, 250);
          this.setState({descanso: true});
          notificador.mostrarNotificacao();
          return;
        }
      }
    }
    this.converterTempo(m, s);
    this.setState({segundos: s, minutos: m});
  }

  pausarRelogio() {
    if (this.state.ativo) {
      clearInterval(this.state.clock);
      this.setState({ativo: false});
    }
  }

  formatar(t) {
    return t < 10 ? '0' + t.toString() : t.toString();
  }

  zerarRelogio() {
    clearInterval(this.state.clock);
    this.setState({ativo: false});
    this.setState({
      segundos: 0,
      minutos: this.state.minutosUsuario,
      porcentagem: 0,
      inputDesativado: false,
    });
  }

  pararDescanso() {
    this.setState({descanso: false});
    setTimeout(() => {
      this.setState({displayTimer: true});
    }, 250);
  }

  converterTempo(min, seg) {
    let tempoOriginal = this.state.minutosUsuario * 60;
    let tempoTotalAtual = min * 60 + seg;
    let tempoPassado = tempoOriginal - tempoTotalAtual;
    let porcentagemTempo = Math.round((tempoPassado / tempoOriginal) * 100);
    this.setState({porcentagem: porcentagemTempo});
  }

  render() {
    let txtM = this.formatar(this.state.minutos);
    let txtS = this.formatar(this.state.segundos);

    return (
      <NativeBaseProvider config={config}>
        <Header />
        <Box
          flex="1"
          alignItems="center"
          opacity="1"
          bg={{
            linearGradient: {
              colors: ['muted.50', 'lightBlue.200', 'blue.500', 'indigo.900'],
              start: [0, 0],
              end: [1, 1],
            },
          }}>
          {this.state.displayTimer ? (
            <DisplayTransition
              conteudo={`${txtM} : ${txtS}`}
              porcentagem={this.state.porcentagem}
              ativo={this.state.ativo}
              descanso={this.state.descanso}
            />
          ) : (
            <BreakTransition descanso={this.state.descanso} />
          )}
          <Botoes
            iniciar={this.iniciaRelogio}
            pausar={this.pausarRelogio}
            parar={this.zerarRelogio}
            descanso={this.state.descanso}
            pararDescanso={this.pararDescanso}
          />
          <Input
            minutos={this.state.minutos}
            mudarTexto={this.alteraMinutos}
            atividade={this.state.inputDesativado}
            descanso={this.state.descanso}
          />
        </Box>
      </NativeBaseProvider>
    );
  }
}

export default Main;
