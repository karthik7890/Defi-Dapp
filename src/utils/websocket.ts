// /utils/websocket.ts
export const createWebSocketConnection = (url: string, onMessage: (data: any) => void) => {
    const ws = new WebSocket(url);
    ws.onmessage = (event) => {
      onMessage(JSON.parse(event.data));
    };
    return ws;
  };
  