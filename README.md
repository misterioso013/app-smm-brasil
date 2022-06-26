# SMM Brasil - Aplicativo para revenda de SMM
Nossos serviços estão disponíveis apenas no site [SMM Brasil](https://smm.app.br), e o aplicativo nada mais é do que um simples WebView para facilitar o acesso aos serviços. (Qualquer pessoa poderá usar esse código com base para desenvolver suas próprias aplicações.)

## Requisitos
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)

## Instalação
Com o ambiente de desenvolvimento pronto, basta clonar o repositório e executar o comando `npm install` ou `yarn`.
### Build
Para o build com o Expo você vai precisar do [EAS](https://expo.dev/eas/) e de uma conta no [Expo](https://expo.dev/signup). (O EAS Build é gratuito, mas têm um plano pago para projetos maiores.)

#### Siga os passos abaixo:
- Faça o login na sua conta usando `eas login`. Verifque se você está logado executando `eas whoami`.
- Execute `eas build:configure` para configurar seu projeto IOS e Android para ser executado no EAS Build.
- Execute `eas build --platform ios` para gerar o projeto IOS.
- Execute `eas build --platform android` para gerar o projeto Android.
- (Opcional) Execute `eas build --platform all` para gerar o projeto para as duas plataformas ao mesmo tempo.
- Aguarde o término do build.
- Baixe o arquivo gerado no build no site da Expo e envie para a sua loja de aplicativos.

## Licença
O aplicativo é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).