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
    // Add your own projects here
    // Example structure:
    // {
    //   title: 'Your Project Title',
    //   description: 'Your project description',
    //   image: 'assets/your-image.jpg',
    //   technologies: ['Tech1', 'Tech2', 'Tech3'],
    //   liveUrl: 'https://your-live-url.com', // optional
    //   githubUrl: 'https://github.com/your-repo' // optional
    // }

    // Woodwork Projects - Add your own images and descriptions
    {
      title: 'Custom Woodwork Project 1',
      description: 'Add description of your first woodwork project here',
      image: 'assets/shem.jpg', // Replace with your project image
      technologies: ['Woodworking', 'Design', 'Craftsmanship']
    },
    {
      title: 'Custom Woodwork Project 2', 
      description: 'Add description of your second woodwork project here',
      image: 'assets/shem.jpg', // Replace with your project image
      technologies: ['Woodworking', 'Custom Design', 'Hand Crafted']
    },
    {
      title: 'Custom Woodwork Project 3',
      description: 'Add description of your third woodwork project here', 
      image: 'assets/shem.jpg', // Replace with your project image
      technologies: ['Woodworking', 'Furniture Making', 'Precision']
    },
    {
      title: 'Custom Woodwork Project 4',
      description: 'Add description of your fourth woodwork project here',
      image: 'assets/shem.jpg', // Replace with your project image
      technologies: ['Woodworking', 'Creative Design', 'Professional Finish']
    },
    {
      title: 'Custom Woodwork Project 5',
      description: 'Add description of your fifth woodwork project here',
      image: 'assets/shem.jpg', // Replace with your project image
      technologies: ['Woodworking', 'Custom Build', 'Artisan Craft']
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