
const getBotpressWebchat = (testingConfig) => {

  const baseUrl = `https://mediafiles.botpress.cloud/${testingConfig.botId}/webchat/bot.html`;
  const html = `<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1 viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style>
      body {
        margin: 0 auto;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      #bp-web-widget-container {
        height: 100%;
        width: 100%;
        margin: auto;
        flex-grow: 1;
      }
      #bp-web-widget-container div {
        height: 100%;
      }
      .webchatIframe {
        position: relative !important;
      }
    </style>
    <title>Chatbot</title>
  </head>
  <body>

<script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2025/03/29/06/20250329064213-M2LAFB4K.js"></script>
  <script>
  window.botpressWebChat.init(${JSON.stringify(testingConfig)});
  window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);

  </script>

  </body>
  </html>`;
  return {
    baseUrl,
    html
  }
}

module.exports = getBotpressWebchat;
