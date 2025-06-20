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
      title: 'AI-Powered Portfolio Website',
      description: 'Interactive portfolio website built with Angular and Tailwind CSS. Features AI-enhanced user experience and modern responsive design.',
      image: 'assets/s1.jpg',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'AI Integration'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Intelligent Web Application',
      description: 'Full-stack web application with PHP backend, MySQL database, and AI features. Includes machine learning capabilities for data insights.',
      image: 'assets/s2.jpg',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Machine Learning', 'AI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Database Analytics',
      description: 'Advanced database system with AI-powered analytics and predictive modeling for portfolio management and data insights.',
      image: 'assets/s3.jpg',
      technologies: ['MySQL', 'PHP', 'AI Analytics', 'Machine Learning', 'Data Science'],
      githubUrl: '#'
    },
    {
      title: 'Software Development Tools',
      description: 'Custom development tools and utilities for streamlining software development workflows and improving productivity.',
      image: 'assets/s1.jpg',
      technologies: ['Node.js', 'TypeScript', 'API Development', 'Automation'],
      githubUrl: '#'
    },
    {
      title: 'Custom Wooden Table',
      description: 'Handcrafted wooden table with premium finish and modern design. Built with attention to detail and quality materials.',
      image: 'assets/WhatsApp Image 2025-03-14 at 12.16.51_4f23d0fe.jpg',
      technologies: ['Woodworking', 'Design', 'Craftsmanship']
    },
    {
      title: 'Professional Woodwork',
      description: 'High-quality wooden furniture piece with intricate details and professional finish. Creative outlet alongside software development.',
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