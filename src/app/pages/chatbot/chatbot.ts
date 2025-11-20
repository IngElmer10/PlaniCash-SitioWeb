import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.html',
  imports: [CommonModule, FormsModule],
  styleUrl: './chatbot.scss',
})
export class Chatbot {
  isOpen = false;
  userMessage = '';
  messages: { from: 'user' | 'bot'; text: string }[] = [];

  // Prompt de contexto para el chatbot de FirstMillion Systems
  readonly systemPrompt = `
Eres el asistente virtual de FirstMillion Systems, una aplicación de finanzas personales que ayuda a los usuarios a gestionar sus gastos, ingresos, presupuestos y metas de ahorro. Tu tarea es responder de forma clara, amable y precisa cualquier pregunta que el usuario tenga sobre el funcionamiento de la app, sus características, planes, seguridad, privacidad, registro, soporte y cualquier otra consulta relacionada con PlaniCash.

Si la pregunta del usuario no está relacionada con PlaniCash o no tienes suficiente información para responder, indícale amablemente que puede contactar con nuestro equipo de soporte escribiendo a soporte@firstmillion.bo.

Responde siempre en español, de manera breve y profesional.
`;

  async sendMessage() {
    if (!this.userMessage.trim()) return;
    const userMsg = this.userMessage.trim();
    this.messages.push({ from: 'user', text: userMsg });
    this.userMessage = '';

    try {
      // URL del backend - ajusta según tu configuración
      const backendUrl = 'http://localhost:3000/api';
      
      const response = await fetch(`${backendUrl}/ai/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg,
          systemPrompt: this.systemPrompt,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const botText = data?.response || 'No pude procesar tu mensaje. Por favor, intenta de nuevo.';
      this.messages.push({ from: 'bot', text: botText });
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      this.messages.push({
        from: 'bot',
        text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo más tarde.',
      });
    }
  }
}
