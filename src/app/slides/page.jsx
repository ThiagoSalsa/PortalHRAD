'use client'
import api from './../../services/api'
import { useState, useEffect } from "react";

export default function SlidesPage() {

    const [file, setFile] = useState(null);
    const [arquivoAtual, setArquivoAtual] = useState(0);
    const [lista, setLista] = useState(null);
    const [duration, setDuration] = useState(0);

    async function fetchFile(path) {
        try {
            let response = await api.get(`api/arquivos?path=${path}`);
            return response.data?.file;
        } catch (error) {
            console.log(error);
        }
    }


    async function updateFile() {
        if (lista != null && lista != undefined && duration != null) {
            let pathAtual = lista[arquivoAtual]?.path;
            if(pathAtual == undefined)
            {
                setArquivoAtual(0);
                return;
            }
            let file = await fetchFile(pathAtual);
            setFile(file);
            setTimeout(() => {
                setArquivoAtual(arquivoAtual + 1);
            },lista[arquivoAtual]?.duracao);
        }
    }

    useEffect(() => {
        const fetchJson = async () => {
            try {
                let response = await api.get('arquivos.json');
                setLista(response.data);
            } catch (error) {
            }
        }
        fetchJson();
    }, []);


    useEffect(() => {
        if (lista != null && lista != undefined) { 
            if (arquivoAtual >= 0) updateFile();
        }
    }, [lista, arquivoAtual])


    if (lista == null) {
        return (
            <div>Carregando..</div>
        )
    }
    else {

        return (

            <div>
                <embed width="100%" height="1100" src={`data:application/pdf;base64,${file}`} type="application/pdf"></embed>
                <span>slide: {arquivoAtual}</span>
            </div>
        )
    }



}