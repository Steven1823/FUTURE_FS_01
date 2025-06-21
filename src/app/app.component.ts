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

  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and Tailwind CSS, showcasing my professional work and skills.',
      image: '/assets/download.JPG',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'LESS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'software'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard providing real-time weather data, forecasts, and location-based weather information.',
      image: '/assets/s3.jpg',
      technologies: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'software'
    },
    {
      title: 'Side Bed',
      description: 'Custom-designed wooden side bed with modern aesthetics, featuring clean lines and premium wood finish.',
      image: '/assets/WhatsApp Image 2025-03-14 at 12.16.51_4f23d0fe.jpg',
      technologies: ['Woodworking', 'Design', 'Craftsmanship'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'carpentry'
    },
    {
      title: 'Winker Stand',
      description: 'Elegant wooden winker stand with adjustable features and smooth finish, perfect for modern home decor.',
      image: '/assets/WhatsApp Image 2025-04-04 at 20.06.13_4b467ecb - Copy.jpg',
      technologies: ['Woodworking', 'Design', 'Hardware'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'carpentry'
    }
  ];

  // CV Data
  cvData = {
    personalInfo: {
      name: 'Steven Kingoro Wanjala',
      title: 'Software Developer & Woodworking Craftsman',
      email: 'stevekingoro@gmail.com',
      phone: '+254 768 388 357',
      location: 'Nairobi, Kenya',
      linkedin: 'https://www.linkedin.com/in/steven-kingoro-658472350',
      github: 'https://github.com/stevekingoro'
    },
    summary: 'Passionate software developer and AI enthusiast with a unique blend of technical expertise and traditional craftsmanship. Experienced in building modern web applications and exploring cutting-edge AI technologies, while maintaining a love for woodworking that keeps me grounded in the art of creating with my hands.',
    experience: [
      {
        title: 'Full-Stack Developer',
        company: 'Freelance',
        period: '2022 - Present',
        location: 'Nairobi, Kenya',
        responsibilities: [
          'Developed responsive web applications using Angular, React, and Vue.js',
          'Built RESTful APIs using Node.js and Python',
          'Implemented AI/ML solutions for various client projects',
          'Collaborated with clients to deliver custom software solutions'
        ]
      },
      {
        title: 'Software Developer',
        company: 'Tech Solutions Ltd',
        period: '2021 - 2022',
        location: 'Nairobi, Kenya',
        responsibilities: [
          'Developed and maintained web applications using modern frameworks',
          'Participated in code reviews and agile development processes',
          'Optimized application performance and user experience',
          'Mentored junior developers on best practices'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Nairobi',
        period: '2018 - 2022',
        location: 'Nairobi, Kenya'
      }
    ],
    skills: {
      technical: ['Angular', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'HTML/CSS', 'SQL', 'Git', 'AI/ML'],
      tools: ['VS Code', 'Git', 'Docker', 'AWS', 'Firebase', 'Figma'],
      craftsmanship: ['Woodworking', 'Furniture Design', 'Hand Tools', 'Power Tools', 'Finishing Techniques']
    },
    projects: [
      {
        name: 'Portfolio Website',
        description: 'Modern responsive portfolio built with Angular and Tailwind CSS',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS']
      },
      {
        name: 'Weather Dashboard',
        description: 'Interactive weather application with real-time data and forecasts',
        technologies: ['JavaScript', 'Weather API', 'Chart.js']
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