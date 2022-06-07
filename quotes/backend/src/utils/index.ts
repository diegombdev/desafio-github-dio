import { createReadStream } from "fs";
import readline from "readline";

export interface Quote {
    id: string
    personagem: string
    quote: string
}

export async function readFile(): Promise<Quote[]> {
    let paragraphs: Quote[] = []

    const fileStream = createReadStream(__dirname + "/../finalQuotes.csv")
    const rl = readline.createInterface({
        input: fileStream
    })

    for await (const line of rl) {
        const paragraph = line.split(",")
        const quote = {
            id: paragraph[0],
            personagem: paragraph[1],
            quote: paragraph.slice(2, paragraph.length).join(",").substring(1).replace("\"", "")
        }
        paragraphs.push(quote)
    }

    return paragraphs
}