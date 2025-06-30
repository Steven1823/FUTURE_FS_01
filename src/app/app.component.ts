
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmailService } from './services/email.service';

interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'software' | 'carpentry';
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    details?: string[];
  }>;
  skills: {
    technical: string[];
    languages: string[];
    tools: string[];
  };
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Steven Kingoro - Portfolio';
  
  // Mobile menu state
  isMobileMenuOpen = false;
  
  // CV Modal state
  isModalOpen = false;
  
  // Form data
  formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  // Form submission state
  isSubmitting = false;
  submitMessage = '';
  
  // Skills data
  skills: Skill[] = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Woodworking', level: 95 }
  ];
  
  // Projects data with correct image paths
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack Angular application with TypeScript, featuring user authentication, product catalog, and payment integration.',
      image: 'assets/s1.jpg',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Steven1823',
      category: 'software'
    },
    {
      title: 'Task Management App',
      description: 'Responsive web application for project management with real-time collaboration features.',
      image: 'assets/s2.jpg',
      technologies: ['Angular', 'Firebase', 'Material Design'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Steven1823',
      category: 'software'
    },
    {
      title: 'Custom Kitchen Cabinets',
      description: 'Handcrafted kitchen cabinets with modern design and premium oak finish.',
      image: 'assets/WhatsApp Image 2025-03-14 at 12.16.51_4f23d0fe.jpg',
      technologies: ['Oak Wood', 'Custom Design', 'Premium Hardware'],
      category: 'carpentry'
    },
    {
      title: 'Dining Table Set',
      description: 'Elegant dining table with matching chairs, crafted from solid mahogany.',
      image: 'assets/WhatsApp Image 2025-04-04 at 20.06.13_4b467ecb - Copy.jpg',
      technologies: ['Mahogany', 'Hand-finished', 'Traditional Joinery'],
      category: 'carpentry'
    },
    {
      title: 'Built-in Wardrobe',
      description: 'Space-efficient wardrobe solution with sliding doors and custom compartments.',
      image: 'assets/WhatsApp Image 2025-04-30 at 11.38.32_a088540c.jpg',
      technologies: ['Plywood', 'Sliding Mechanism', 'LED Lighting'],
      category: 'carpentry'
    },
    {
      title: 'Office Desk Setup',
      description: 'Modern office desk with integrated cable management and storage solutions.',
      image: 'assets/WhatsApp Image 2025-06-20 at 20.00.30_99b8fdb1.jpg',
      technologies: ['Engineered Wood', 'Metal Framework', 'Cable Management'],
      category: 'carpentry'
    }
  ];
  
  // CV Data
  cvData: CVData = {
    personalInfo: {
      name: 'Steven Kingoro',
      title: 'Full-Stack Developer & Master Craftsman',
      email: 'stevekingoro@gmail.com',
      phone: '+254 768 558 357',
      location: 'Nairobi, Kenya',
      linkedin: 'https://www.linkedin.com/in/steven-kingoro-658472350',
      github: 'https://github.com/Steven1823'
    },
    summary: 'Passionate Full-Stack Developer with expertise in Angular, TypeScript, and modern web technologies. Combined with exceptional woodworking skills, I bring a unique perspective to both digital and physical craftsmanship. Dedicated to creating innovative solutions and beautiful, functional designs.',
    experience: [
      {
        title: 'Full-Stack Developer',
        company: 'Freelance',
        period: '2023 - Present',
        description: [
          'Developed responsive web applications using Angular and TypeScript',
          'Implemented REST APIs with Node.js and Express',
          'Collaborated with clients to deliver custom software solutions',
          'Maintained code quality through testing and code reviews'
        ]
      },
      {
        title: 'Master Carpenter',
        company: 'Self-Employed',
        period: '2020 - Present',
        description: [
          'Designed and crafted custom furniture pieces for residential clients',
          'Specialized in kitchen cabinets, wardrobes, and office furniture',
          'Managed projects from concept to completion',
          'Maintained high standards of craftsmanship and customer satisfaction'
        ]
      }
    ],
    education: [
      {
        degree: 'Diploma in Software Engineering',
        institution: 'Technical University',
        period: '2022 - 2024',
        details: [
          'Focus on web development and software architecture',
          'Graduated with distinction',
          'Completed capstone project in Angular'
        ]
      },
      {
        degree: 'Certificate in Carpentry & Joinery',
        institution: 'Kenya Technical Training Institute',
        period: '2019 - 2020',
        details: [
          'Comprehensive training in woodworking techniques',
          'Specialized in furniture making and cabinet installation',
          'Health and safety certification included'
        ]
      }
    ],
    skills: {
      technical: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express', 'MongoDB', 'Git', 'RESTful APIs'],
      languages: ['English (Fluent)', 'Swahili (Native)'],
      tools: ['VS Code', 'Postman', 'Git/GitHub', 'npm', 'Angular CLI', 'Figma']
    },
    certifications: [
      {
        name: 'Angular Developer Certification',
        issuer: 'Google',
        date: '2024'
      },
      {
        name: 'JavaScript ES6+ Certification',
        issuer: 'freeCodeCamp',
        date: '2023'
      }
    ]
  };

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    // Initialize component
  }

  // Mobile menu toggle
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Close mobile menu
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Modal functions
  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Navigation
  scrollToSection(sectionId: string) {
    this.closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Contact form submission
  async onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitMessage = 'Please fill in all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      await this.emailService.sendEmail(this.formData);
      this.submitMessage = 'Message sent successfully! I\'ll get back to you soon.';
      this.resetForm();
    } catch (error) {
      this.submitMessage = 'Failed to send message. Please try again later.';
      console.error('Email sending failed:', error);
    } finally {
      this.isSubmitting = false;
    }
  }

  // Reset form
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  // Get software projects
  get softwareProjects() {
    return this.projects.filter(project => project.category === 'software');
  }

  // Get carpentry projects
  get carpentryProjects() {
    return this.projects.filter(project => project.category === 'carpentry');
  }

  // Download CV
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Steven_Kingoro_CV.pdf';
    link.download = 'Steven_Kingoro_CV.pdf';
    link.click();
  }

  // Social media links
  openLinkedIn() {
    window.open('https://www.linkedin.com/in/steven-kingoro-658472350', '_blank');
  }

  openGitHub() {
    window.open('https://github.com/Steven1823', '_blank');
  }

  openEmail() {
    window.location.href = 'mailto:stevekingoro@gmail.com';
  }

  openPhone() {
    window.location.href = 'tel:+254768558357';
  }
}
