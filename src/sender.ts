import { create, Whatsapp, Message, SocketState } from 'venom-bot';

class Sender {
    private client: Whatsapp

    constructor() {
        this.initialize();
    }

    private initialize() {

        const qr = (base64Qrimg: string) => {}

        const status = (statusSession: string) => {}

        const start = (client: Whatsapp) => {
            this.client = client;
        }

        create('wpp-api-sender', qr, status)
        .then((client) => start(client))
        .catch((error) => console.error(error))
    }

    async sendText(to: string, body: string) {
        await this.client.sendText(to, body)
    }
}

export default Sender;

