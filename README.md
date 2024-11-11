# IndicadorDeProducao-Reac-Expo


Este é um aplicativo de **Indicador de Produção** desenvolvido com React Native e Expo, que permite o registro de informações de produção, incluindo o código do produto, peça produzida, serviço realizado e horário de início e término. O app exibe todos os registros de produção em uma lista.

## Funcionalidades

- **Registrar Produção:** Adicione detalhes sobre o código do produto, peça produzida, serviço realizado e horários.
- **Validação de Campos:** Certifique-se de que todos os campos estão preenchidos e que o horário está no formato `hh:mm`.
- **Visualizar Registros:** Exiba todos os registros em uma lista.
- **Limpar Registros:** Limpe todos os registros salvos.

## Estrutura do Projeto

- `App.js`: Tela principal onde os registros de produção são inseridos e salvos.
- `app/RegistrosScreen.js`: Tela de exibição de todos os registros, usando `FlatList` para listar os itens.

## Dependências

- **React Native**: Framework de desenvolvimento para aplicativos móveis.
- **Expo**: Ferramenta para desenvolvimento, compilação e publicação de aplicativos React Native.
- **expo-router**: Roteamento para navegação entre telas.

## Instalação

1. Clone o repositório:
   
Inicie o git Bash no seu diretorio escolhido. 
   git clone https://github.com/OtavioProcopio/IndicadorDeProducao-Reac-Expo.git
   cd seu-repositorio

2 . Instalação das dependencias 

   npm install
   npx expo start
   
## Como usar
Registrar Produção: Preencha todos os campos e clique em "Registrar Produção" para salvar o registro.
Visualizar Registros: Acesse a tela "Todos os Registros" para visualizar a lista de todos os registros.
Limpar Registros: Clique em "Limpar Registros" para remover todos os registros salvos.
