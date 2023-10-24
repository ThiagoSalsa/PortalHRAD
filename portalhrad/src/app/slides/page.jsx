'use client'
import api from './../../services/api'
import { useState, useEffect } from "react";

export default function SlidesPage(){

    const [file, setFile] = useState(null);
    const [arquivoAtual, setArquivoAtual] = useState(-1);
    const [lista, setLista] = useState(null);

    async function fetchFile(path){
        try {
            debugger
            let response = await api.get(`api/arquivos?path=${path}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            
        }
    }

    useEffect(() => {
        const fetchJson = async() => {
            try {
                let response = await api.get('arquivos.json');
                setLista(response.data)
                
            } catch (error) {
                
            }
        }
        fetchJson();         
    },[])

    useEffect(() => {
        if(lista != null){
            const interval = setInterval(() => {
                // let file = fetchFile(lista[arquivoAtual]?.duracao);
                // setFile(file);
                setArquivoAtual(arquivoAtual + 1);
            },lista[arquivoAtual]?.duracao)
            return () => clearInterval(interval);
        }
    }, [lista])

    useEffect(() => {

    })

    // if(lista != null){
    //     return <button onClick={() => {
    //         fetchFile(lista[0].path);
    //     }}>Buscar</button>
    // }
    if(lista == null){
        return (
            <div>Carregando..</div>
        )
    }
    else {
        let value;
        async function teste(){
            return await fetchFile(lista[0]?.path);
        }
        value = teste();
        return (
         
    <embed width="100%" height="500" src={`data:application/pdf;base64,${value}`} type="application/pdf"></embed>
        )
    }

    

}