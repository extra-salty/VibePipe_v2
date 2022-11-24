export const initWebSocket = () => {
  const webSocket = new WebSocket(`ws:/192.168.137.91/ws`);

  webSocket.onopen = function (e) {
    console.log("WebSocket Connection established");
  };

  webSocket.onclose = function (e) {
    console.log("[close] Connection closed");
  };

  webSocket.onmessage = function (e) {
    console.log(e.data);
  };

  return webSocket;
};
