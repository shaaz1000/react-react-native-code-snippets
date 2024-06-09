import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class NotificationsGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string, @ConnectedSocket() client: Socket): void {
        console.log(`Received message: ${message}`);
        client.broadcast.emit('message', message);
    }

    handleConnection(client: Socket, ...args: any[]) {
        console.log('Client connected');
    }

    handleDisconnect(client: Socket) {
        console.log('Client disconnected');
    }
}
