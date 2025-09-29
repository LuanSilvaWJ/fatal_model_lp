"use client";

import { useEffect } from 'react';

export default function URLParamsCapture() {
  useEffect(() => {
    // Função para capturar e salvar os parâmetros da URL
    const captureURLParams = () => {
      try {
        // Verifica se estamos no lado do cliente
        if (typeof window === 'undefined') return;

        const urlParams = new URLSearchParams(window.location.search);
        const params: { [key: string]: string } = {};

        // Captura todos os parâmetros da URL
        urlParams.forEach((value, key) => {
          params[key] = value;
        });

        // Verifica se há parâmetros para salvar
        if (Object.keys(params).length > 0) {
          // Salva os parâmetros no localStorage
          localStorage.setItem('affiliate_params', JSON.stringify(params));
          
          // Log para debug (opcional)
          console.log('Parâmetros de afiliado salvos:', params);
        }
      } catch (error) {
        console.error('Erro ao capturar parâmetros da URL:', error);
      }
    };

    // Executa a captura na primeira renderização
    captureURLParams();

    // Escuta mudanças na URL (para SPAs)
    const handleLocationChange = () => {
      captureURLParams();
    };

    // Adiciona listener para mudanças na URL
    window.addEventListener('popstate', handleLocationChange);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Este componente não renderiza nada visível
  return null;
}