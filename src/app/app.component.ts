import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormMessage {
  type: 'success' | 'error';
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Steven Kingoro Portfolio';
  mobileMenuOpen = false;
  isSubmitting = false;
  formMessage: FormMessage | null = null;

  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  projects: Project[] = [
    {
      title: 'Custom Wooden Table',
      description: 'Handcrafted wooden table with premium finish and modern design. Built with attention to detail and quality materials.',
      image: 'assets/WhatsApp Image 2025-03-14 at 12.16.51_4f23d0fe.jpg',
      technologies: ['Woodworking', 'Design', 'Craftsmanship']
    },
    {
      title: 'Wooden Cabinet',
      description: 'Custom storage solution with elegant design. Perfect blend of functionality and aesthetics.',
      image: 'assets/WhatsApp Image 2025-04-04 at 20.06.13_4b467ecb - Copy.jpg',
      technologies: ['Woodworking', 'Storage Design', 'Custom Build']
    },
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio website built with Angular and Tailwind CSS. Fully responsive and modern design.',
      image: 'assets/s1.jpg',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML5'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Web Application',
      description: 'Full-stack web application with PHP backend and MySQL database. Features user authentication and data management.',
      image: 'assets/s2.jpg',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Database Project',
      description: 'Complex database design and implementation for portfolio management system.',
      image: 'assets/s3.jpg',
      technologies: ['MySQL', 'PHP', 'Database Design', 'SQL'],
      githubUrl: '#'
    },
    {
      title: 'Professional Woodwork',
      description: 'High-quality wooden furniture piece with intricate details and professional finish.',
      image: 'assets/shem.jpg',
      technologies: ['Advanced Woodworking', 'Furniture Design', 'Professional Finish']
    }
  ];

  ngOnInit() {
    // Load Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    this.mobileMenuOpen = false;
  }

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.formMessage = {
        type: 'error',
        text: 'Please fill in all required fields.'
      };
      return;
    }

    this.isSubmitting = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      this.formMessage = {
        type: 'success',
        text: 'Thank you for your message! I\'ll get back to you soon.'
      };

      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      this.isSubmitting = false;

      // Clear message after 5 seconds
      setTimeout(() => {
        this.formMessage = null;
      }, 5000);
    }, 2000);
  }
}