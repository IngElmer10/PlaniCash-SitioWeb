import {
  Component,
  OnInit,
  HostListener,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Chatbot } from '../chatbot/chatbot';
import { ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink, Chatbot, FormsModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Inicio implements OnInit {
  isScrolled = false;
  isBrowser: boolean;
  activeSection: string = 'inicio';
  isDarkMode = false;
  
  // Formulario de contacto
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private contactService: ContactService
  ) {
    // Verifica si estamos en el navegador
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Inicialización del componente
    if (this.isBrowser) {
      this.checkScroll();
      window.addEventListener('scroll', this.onScroll.bind(this));
      // Cargar preferencia de tema
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
      }
    }
  }
  onScroll() {
    const sections = [
      'inicio',
      'servicios',
      'planicash',
      'caracteristicas',
      'precios',
      'quienes-somos',
      'contactanos',
    ];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    // Detecta cuando el usuario hace scroll para cambiar estilos del header
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 30;
    }
  }

  // Método para suavizar el scroll a las secciones
  scrollToSection(sectionId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  // Desplaza un slider horizontal por id
  scrollSlider(trackId: string, direction: 'left' | 'right') {
    if (!this.isBrowser) return;
    const track = document.getElementById(trackId);
    if (!track) return;
    const item = track.querySelector('[scrollItem]') as HTMLElement | null;
    const delta = item ? item.offsetWidth + 32 : 300; // ancho estimado + gap
    const amount = direction === 'left' ? -delta : delta;
    track.scrollBy({ left: amount, behavior: 'smooth' });
  }

  // Alternar entre modo claro y oscuro
  toggleTheme() {
    if (!this.isBrowser) return;
    this.isDarkMode = !this.isDarkMode;
    console.log('Toggle theme:', this.isDarkMode); // Debug
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      console.log('Dark mode activado'); // Debug
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      console.log('Light mode activado'); // Debug
    }
  }

  // Método para enviar el formulario de contacto
  submitContactForm(event: Event) {
    event.preventDefault();

    if (!this.isBrowser) return;

    // Validar que todos los campos estén llenos
    if (!this.contactForm.name || !this.contactForm.email || 
        !this.contactForm.subject || !this.contactForm.message) {
      this.submitMessage = 'Por favor, completa todos los campos';
      this.submitSuccess = false;
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    this.contactService.sendContactEmail(this.contactForm).subscribe({
      next: (response) => {
        this.submitMessage = '¡Mensaje enviado correctamente! Te responderemos pronto.';
        this.submitSuccess = true;
        this.isSubmitting = false;
        
        // Limpiar formulario
        this.contactForm = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      },
      error: (error) => {
        console.error('Error al enviar email:', error);
        this.submitMessage = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
        this.submitSuccess = false;
        this.isSubmitting = false;

        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }
    });
  }
}
