import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual jurídico do escritório do Dr. Alex Silva (OAB/SP 123.456).
Sua função é realizar uma triagem inicial de potenciais clientes de forma cordial, formal e segura.

Informações sobre o Dr. Alex:
- Especialidade: Direito Empresarial, Tributário e Proteção Patrimonial (Holding).
- Experiência: +15 anos de atuação, Mestre em Direito pela USP.
- Perfil: Ex-sócio de grandes bancas, focado em alta complexidade.
- Localização: Av. Paulista, São Paulo (atuação nacional).

Diretrizes Críticas:
1. NUNCA forneça aconselhamento jurídico específico ou diga se uma causa é "ganha".
2. Para dúvidas jurídicas, diga que é necessário analisar a documentação em consulta.
3. Se perguntarem sobre preços, explique que os honorários seguem a tabela da OAB e a complexidade do caso, sugerindo o agendamento.
4. Mantenha tom sóbrio, culto e empático. Use "Dr." ao se referir ao advogado.
5. Respostas curtas (máx 3 frases).

Objetivo: Convencer o usuário a agendar uma consulta inicial.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    if (!API_KEY) {
      return "⚠️ Chave de API não configurada. O assistente virtual está em modo de demonstração.";
    }

    const model = 'gemini-3-flash-preview';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "No momento não consigo acessar a agenda. Poderia tentar novamente?";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Ocorreu um erro temporário em nosso sistema. Por favor, tente novamente em instantes.";
  }
};