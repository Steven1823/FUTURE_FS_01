import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { EmailService } from './services/email.service';

interface Skill {
  name: string;
  level: number;
}
=======
>>>>>>> main

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
<<<<<<< HEAD
  liveUrl: string;
  githubUrl: string;
  category: 'software' | 'carpentry';
=======
  liveUrl?: string;
  githubUrl?: string;
>>>>>>> main
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
<<<<<<< HEAD
  submitMessage = '';
  submitSuccess = false;
  showCVModal = false;
=======
  formMessage: FormMessage | null = null;
>>>>>>> main

  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

<<<<<<< HEAD
  constructor(private emailService: EmailService) {}

=======
<<<<<<< HEAD
=======
>>>>>>> main
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

>>>>>>> master
  projects: Project[] = [
    // Project Showcase - Add your own photos and descriptions
    {
<<<<<<< HEAD
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and Tailwind CSS, showcasing my professional work and skills.',
      image: '/assets/download.JPG',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'LESS'],
=======
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
>>>>>>> main
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
      title: 'Modern Drawer Unit',
      description: 'Minimalist white drawer unit featuring clean lines, smooth sliding mechanisms, and contemporary design perfect for modern spaces.',
      image: '/assets/shem.jpg',
      technologies: ['Woodworking', 'Furniture Design', 'Modern Aesthetics', 'Hardware Installation'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'carpentry'
    },
    {
      title: 'Storage Unit with Wicker Baskets',
      description: 'Elegant white storage unit with four woven wicker baskets, combining traditional craftsmanship with modern design for versatile storage solutions.',
      image: '/assets/shem.jpg',
      technologies: ['Woodworking', 'Furniture Design', 'Storage Solutions', 'Wicker Integration'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'carpentry'
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
<<<<<<< HEAD
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
    experience: [],
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
      craftsmanship: ['Woodworking', 'Furniture Design', 'Joinery', 'Hand Tools', 'Power Tools', 'Finishing Techniques'],
      tools: []
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
=======
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
>>>>>>> main
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

<<<<<<< HEAD
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

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;
=======
  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.formMessage = {
        type: 'error',
        text: 'Please fill in all required fields.'
      };
      return;
    }
>>>>>>> main

    // Validate form
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitSuccess = false;
      this.submitMessage = 'Please fill in all required fields.';
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
      return;
    }

    this.isSubmitting = true;

<<<<<<< HEAD
    try {
      // Send email using EmailJS
      await this.emailService.sendEmail(this.formData);
      
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
      
=======
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      this.formMessage = {
        type: 'success',
        text: 'Thank you for your message! I\'ll get back to you soon.'
      };

>>>>>>> main
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
    } catch (error) {
      console.error('Error sending email:', error);
      this.isSubmitting = false;
      this.submitSuccess = false;
      this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly at stevekingoro@gmail.com';
      
      // Clear message after 8 seconds for error messages
      setTimeout(() => {
        this.submitMessage = '';
      }, 8000);
    }
  }
}