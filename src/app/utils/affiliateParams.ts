// Utilitário para trabalhar com parâmetros de afiliado salvos no localStorage

export interface AffiliateParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  mkt_banner_post_id?: string;
  [key: string]: string | undefined;
}

/**
 * Obtém os parâmetros de afiliado salvos no localStorage
 * @returns Os parâmetros salvos ou null se não existirem
 */
export const getAffiliateParams = (): AffiliateParams | null => {
  try {
    if (typeof window === 'undefined') return null;
    
    const savedParams = localStorage.getItem('affiliate_params');
    return savedParams ? JSON.parse(savedParams) : null;
  } catch (error) {
    console.error('Erro ao obter parâmetros de afiliado:', error);
    return null;
  }
};

/**
 * Remove os parâmetros de afiliado do localStorage
 */
export const clearAffiliateParams = (): void => {
  try {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem('affiliate_params');
  } catch (error) {
    console.error('Erro ao limpar parâmetros de afiliado:', error);
  }
};

/**
 * Verifica se existem parâmetros de afiliado salvos
 * @returns true se existirem parâmetros salvos
 */
export const hasAffiliateParams = (): boolean => {
  const params = getAffiliateParams();
  return params !== null && Object.keys(params).length > 0;
};

/**
 * Obtém um parâmetro específico de afiliado
 * @param key - A chave do parâmetro desejado
 * @returns O valor do parâmetro ou undefined se não existir
 */
export const getAffiliateParam = (key: string): string | undefined => {
  const params = getAffiliateParams();
  return params ? params[key] : undefined;
};