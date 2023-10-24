"use client"
import api from './../../services/api';
import { useState , useEffect } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
console.log(basePath);

export default function admin(){
    
    const [arquivos, setArquivos] = useState([]);

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

    function handleSegundos(e,index){
        arquivos[index].segundos = e.target.value;
        setArquivos([...arquivos]);
        console.log(arquivos);
    }

    function handleMinutos(e,index){
        arquivos[index].minutos = e.target.value;
        setArquivos([...arquivos]);
        console.log(arquivos);
    }

    async function submit(){
        try {
            let response = await api.post('api/arquivos',{arquivos});
            console.log(response);
        } catch (error) {
            
        }
    }
    return (
        <div>
            <input type="file" multiple onChange={(e) => extraiInformacoesDeArquivos(e)}/>
            {arquivos?.map((arquivo, index) => {
                return <div key={index}>
                    <span>{arquivo?.path}</span>
                    <div>
                        <label>Minutos:</label>
                        <input type="number" name="minutos" id="minutos" onChange={(e) => {handleMinutos(e, index)}}/>
                        <label>Segundos:</label>
                        <input type="number" defaultValue='0' name="segundos" id="segundos" onChange={(e) => {handleSegundos(e, index)}}/>
                        
                    </div>
                </div>
            })}
            <button>Adicionar arquivos</button>
            <button onClick={() => {submit()}} >Salvar</button>
        </div>
    )
}


