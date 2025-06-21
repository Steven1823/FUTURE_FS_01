import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'software' | 'carpentry';
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Steven Kingoro - Portfolio';
  mobileMenuOpen = false;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;
  showCVModal = false;

  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  skills: Skill[] = [
    { name: 'Angular', level: 90 },
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Woodworking', level: 85 },
    { name: 'Joinery', level: 80 },
    { name: 'AI/Machine Learning', level: 75 }
  ];

  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and Tailwind CSS, showcasing my professional work and skills.',
      image: '/assets/download.JPG',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'LESS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Steven1823',
      category: 'software'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard providing real-time weather data, forecasts, and location-based weather information.',
      image: '/assets/s3.jpg',
      technologies: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Steven1823',
      category: 'software'
    },
    {
      title: 'Side Bed',
      description: 'Custom-designed wooden side bed with modern aesthetics, featuring clean lines and premium wood finish.',
      image: '/assets/WhatsApp Image 2025-03-14 at 12.16.51_4f23d0fe.jpg',
      technologies: ['Woodworking', 'Joinery', 'Design', 'Craftsmanship'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'carpentry'
    },
    {
      title: 'Winker Stand',
      description: 'Elegant wooden winker stand with adjustable features and smooth finish, perfect for modern home decor.',
      image: '/assets/WhatsApp Image 2025-04-04 at 20.06.13_4b467ecb - Copy.jpg',
      technologies: ['Woodworking', 'Joinery', 'Design', 'Hardware'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'carpentry'
    }
  ];

  // CV Data - Updated with correct information
  cvData = {
    personalInfo: {
      name: 'Steven Kingoro',
      title: 'Software Developer & Woodworking Craftsman',
      email: 'stevekingoro@gmail.com',
      phone: '+254 768 558 357',
      location: 'Nairobi, Kenya',
      linkedin: 'https://www.linkedin.com/in/steven-kingoro-658472350',
      github: 'https://github.com/Steven1823'
    },
    summary: 'Passionate and multi-skilled individual with a strong foundation in software development. Specializing in full-stack development, AI development, and woodworking, I integrate craftsmanship and technology to develop practical, creative solutions—both physical and digital. Proven experience through hands-on projects in software development and training within tech and creative industries.',
    education: [
      {
        degree: 'High School Diploma',
        institution: 'Tambach High School',
        period: 'Completed',
        location: 'Kenya'
      }
    ],
    certifications: [
      {
        name: 'Career Essentials in Software Development',
        issuer: 'Microsoft / LinkedIn Learning',
        year: '2024'
      },
      {
        name: 'Software Development (Artificial Intelligence)',
        issuer: 'Power Learn Project Academy',
        year: '2024'
      },
      {
        name: 'Full-Stack Development',
        issuer: 'Practical Experience',
        year: '2023-2024'
      },
      {
        name: 'Graphic Design Training',
        issuer: 'Professional Training',
        year: '2023'
      }
    ],
    skills: {
      technical: ['Full-Stack Development', 'AI Development', 'Python Development', 'JavaScript', 'Angular', 'React', 'HTML/CSS', 'SQL'],
      soft: ['Leadership & Teamwork', 'Strong English Communication', 'Problem Solving', 'Creative Thinking'],
      craftsmanship: ['Woodworking', 'Furniture Design', 'Joinery', 'Hand Tools', 'Power Tools', 'Finishing Techniques']
    },
    volunteer: [
      {
        organization: 'One Hope Kenya',
        role: 'Volunteer',
        period: 'Ongoing',
        description: 'Contributing to community development and social impact initiatives'
      }
    ],
    hobbies: ['Playing Guitar', 'Woodworking & Furniture Design', 'Technology Innovation', 'Creative Problem Solving'],
    projects: [
      {
        name: 'Portfolio Website',
        description: 'Modern responsive portfolio built with Angular and Tailwind CSS showcasing software and carpentry projects',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS']
      },
      {
        name: 'Weather Dashboard',
        description: 'Interactive weather application with real-time data and forecasts using modern web technologies',
        technologies: ['JavaScript', 'Weather API', 'Chart.js']
      },
      {
        name: 'Side Bed',
        description: 'Custom-designed wooden side bed featuring modern aesthetics and precision craftsmanship',
        technologies: ['Woodworking', 'Joinery', 'Design']
      },
      {
        name: 'Winker Stand',
        description: 'Elegant wooden winker stand with adjustable features and premium finish',
        technologies: ['Woodworking', 'Joinery', 'Hardware']
      }
    ]
  };

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  openCVModal(): void {
    this.showCVModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeCVModal(): void {
    this.showCVModal = false;
    document.body.style.overflow = 'auto';
  }

  downloadCV(): void {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/Steven_Kingoro_CV.pdf';
    link.download = 'Steven_Kingoro_CV.pdf';
    link.click();
  }

  onSubmit(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = '';

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Clear message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }, 2000);
  }
}