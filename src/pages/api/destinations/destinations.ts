import {NextApiRequest, NextApiResponse} from "next";
import {readFileSync} from "fs";

export interface DestinationType {
    id: number,
    name: string,
    destinationInfo: string,
    amount: number,
    wish: boolean,
    images: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const destinationData = readFileSync("src/data/destinations.json");
            const destinationsString = destinationData.toString();

            if (!destinationsString) {
                res.statusCode = 200;
                res.send([]);
            }

            const destinations: DestinationType = JSON.parse(destinationsString);
            res.statusCode = 200;
            return res.send(destinations);
        } catch (error) {
            console.log(error);
            res.statusCode = 500;
            res.send(error);
        }
    }
}