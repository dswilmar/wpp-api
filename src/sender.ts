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

            //this.sendText('5549998100082@c.us', "Olá Mundo! Este é um teste!");
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

