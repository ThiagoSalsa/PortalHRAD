"use client"
import json from './../../../public/test.json';
import { useState , useEffect } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
console.log(basePath);

export default function admin(){
    
    const [arquivos, setArquivos] = useState([{duration: null, path: null}]);

    // useEffect(() => {
    //     async function getArquivo(){
    //         let arquivo = await fetch("./../../../test.json");
    //         arquivo = await arquivo.json();
    //         setArquivos(arquivo);
    //     }
    //     getArquivo();    
    // },[]);

    function extraiInformacoesDeArquivos(e){
        let files = Array.from(e.target.files);
        console.log(files);
        files.map((file, index)=> {
            let aux = {path:'', duration:''}
            aux.path = file.name;
            arquivos[index] = aux;
        })
        setArquivos([...arquivos]);
    }

    return (
        <div>
            <input type="file" multiple onChange={(e) => extraiInformacoesDeArquivos(e)}/>
            {arquivos.map((arquivo, index) => {
                return <div key={index}>
                    {arquivo?.path}
                </div>
            })}
            <button>Adicionar arquivos</button>
        </div>
    )
}


