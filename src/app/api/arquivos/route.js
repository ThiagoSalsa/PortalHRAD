import fs from 'fs';
import util from 'util';
import { json } from 'node:stream/consumers';

const path = process.env.NEXT_PUBLIC_BASE_PATH;
const readFileAsync = util.promisify(fs.readFile);

// Esse método recebe uma lista de nomes de arquivos
export async function POST(req) {
    let request = await req.json();
    const { arquivos } = request;

    let json = arquivos?.map((arquivoAtual) => {
        let segundos = (arquivoAtual.segundos == '' || arquivoAtual.segundos == undefined) ? 0 : arquivoAtual.segundos;
        let minutos = (arquivoAtual.minutos == '' || arquivoAtual.minutos == undefined) ? 0 : arquivoAtual.minutos;
        let objeto = {
            path: path + '/' + arquivoAtual.path,
            duracao: ((parseInt(minutos) * 60) + parseInt(segundos)) * 1000
        };
        return objeto;
    });
    const jsonData = JSON.stringify(json, null, 2);
    await fs.writeFile('public/arquivos.json', jsonData, () => { });
    return Response.json({ mensagem: "Arquivo JSON criado com sucesso.", jsonFinal: json });

}

export async function GET(req, res) {
    const searchParams = req.nextUrl.searchParams
    const path = searchParams.get('path');
    let file = await readFileSync(path);
    return Response.json({file});
};



async function readFileSync(path) {
    try {
        const data = await readFileAsync(path, 'base64');
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

