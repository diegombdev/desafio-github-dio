import { Request, Response, Router } from "express";
import { readFile } from "./utils";

export const routes = Router();

routes.get("/quote/characters/random", async (request: Request, response: Response) => {

    const quotes = await readFile();
    let randomId = String(Math.floor(Math.random() * quotes.length));
    
    const quote = Object.assign({}, ...quotes.filter(quote => randomId == quote.id))    

    return response.status(200).json(quote)
})

routes.get("/quote/characters/name", async (request: Request, response: Response) => {
    
    const quotes = await readFile();

    const charactersName = [...quotes.reduce((map, quote) => 
        map.set(quote.personagem, quote.personagem), new Map()).values()]

    return response.status(200).json(charactersName)
})

routes.get("/quote/characters/:name", async (request: Request, response: Response) => {

    const { name } = request.params;
    const quotes = await readFile();

    const quotesCharacter = quotes.filter(quote => quote.personagem === name);
    let randomId = Math.floor(Math.random() * quotesCharacter.length);

    if(quotesCharacter.length == 0) {
        console.log(quotesCharacter[randomId])
        return response.status(404).json({ parameter: name, error: "character name not found!"})
    }

    return response.status(200).json(quotesCharacter[randomId])
})