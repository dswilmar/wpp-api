import express, { Request, Response } from 'express';
import Sender from "./sender";

const sender = new Sender();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/status', (req: Request, res: Response) => {

});

app.post('/send', async(req: Request, res: Response) => {

    const {message, number} = req.body;

    try {
        await sender.sendText(`${number}@c.us`, message);
        return res.status(201).json({});
    } catch (error) {
        console.error("error", error);
        res.status(500).json({
            status: "error",
            message: error
        });
    }
});

app.listen(3333, () => {
    console.log('Server started...');
});