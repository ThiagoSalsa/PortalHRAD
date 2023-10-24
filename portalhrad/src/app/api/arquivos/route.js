import fs from 'fs';

const path = process.env.NEXT_PUBLIC_BASE_PATH;

export async function POST(req) {


    let request = await req.json();
    const {arquivos} = request;

    let json = arquivos?.map((arquivoAtual) => {
        let segundos = (arquivoAtual.segundos == '' || arquivoAtual.segundos == undefined)? 0 : arquivoAtual.segundos;
        let objeto = {
            path: path + '/' + arquivoAtual.path, 
            duracao: (arquivoAtual.minutos * 60 + segundos) * 1000
        };
        return objeto;
    });
    const jsonData = JSON.stringify(json, null, 2);
    // fs.writeFile();
    await fs.writeFile('public/arquivos.json', jsonData, () => {});
    return Response.json({mensagem:"Arquivo JSON criado com sucesso.", jsonFinal: json});
    
}

export async function GET(req, res){
    debugger
    const searchParams = req.nextUrl.searchParams
    const path = searchParams.get('path')
    let file;
    await fs.readFile(path, 'base64', function(err, data){ 
        file = data;
    });

    res.status(200).json(file);  
};
