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

<<<<<<< HEAD
=======
  skills: Skill[] = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'AI/Machine Learning', level: 75 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Woodworking', level: 85 }
  ];

>>>>>>> master
  projects: Project[] = [
    // Project Showcase - Add your own photos and descriptions
    {
<<<<<<< HEAD
      title: 'Project Showcase 1',
      description: 'Add description of your first project here - could be software development or woodworking',
      image: 'assets/shem.jpg', // Replace with your project photo
      technologies: ['Add', 'Your', 'Technologies']
      // liveUrl: 'https://your-live-url.com', // optional - add if it's a web project
      // githubUrl: 'https://github.com/your-repo' // optional - add if it's a code project
    },
    {
      title: 'Project Showcase 2', 
      description: 'Add description of your second project here - could be software development or woodworking',
      image: 'assets/shem.jpg', // Replace with your project photo
      technologies: ['Add', 'Your', 'Technologies']
      // liveUrl: 'https://your-live-url.com', // optional - add if it's a web project
      // githubUrl: 'https://github.com/your-repo' // optional - add if it's a code project
=======
      title: 'AI-Powered Task Manager',
      description: 'An intelligent task management application with AI-driven priority suggestions and automated scheduling.',
      image: '/assets/s1.jpg',
      technologies: ['Angular', 'Python', 'TensorFlow', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: '/assets/s2.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Custom Wooden Table',
      description: 'Handcrafted dining table made from reclaimed oak with modern steel legs and natural finish.',
      image: '/assets/WhatsApp Image 2025-03-14 at 12.16.51_4f23d0fe.jpg',
      technologies: ['Woodworking', 'Design', 'Craftsmanship'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
      image: '/assets/s3.jpg',
      technologies: ['Vue.js', 'Chart.js', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Wooden Cabinet',
      description: 'Custom storage cabinet with adjustable shelves and soft-close hinges, perfect for modern homes.',
      image: '/assets/WhatsApp Image 2025-04-04 at 20.06.13_4b467ecb - Copy.jpg',
      technologies: ['Woodworking', 'Design', 'Hardware'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio website built with Angular and Tailwind CSS, featuring smooth animations.',
      image: '/assets/download.JPG',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
>>>>>>> master
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