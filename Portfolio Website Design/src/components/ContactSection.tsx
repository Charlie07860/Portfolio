import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Send, Github, Linkedin, Instagram, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration - Replace these with your actual values
  const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
    SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID  
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
  };

  // Check if EmailJS is properly configured
  const isEmailJSConfigured = () => {
    return Object.values(EMAILJS_CONFIG).every(value => 
      value && !value.startsWith('YOUR_')
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      console.log('EmailJS not configured, using fallback email method');
      handleEmailFallback();
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      if (result.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      handleEmailFallback();
    }
    
    setIsSubmitting(false);
  };

  const handleEmailFallback = () => {
    console.log('Form Data:', formData); // Debug log
    
    // Get current form values directly from DOM
    const currentFormData = {
      name: (form.current?.querySelector('[name="from_name"]') as HTMLInputElement)?.value || '',
      email: (form.current?.querySelector('[name="from_email"]') as HTMLInputElement)?.value || '',
      message: (form.current?.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || ''
    };
    
    console.log('Current Form Data from DOM:', currentFormData); // Debug log
    
    const subject = encodeURIComponent(`Portfolio Contact from ${currentFormData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${currentFormData.name || 'Not provided'}
Email: ${currentFormData.email || 'Not provided'}

Message:
${currentFormData.message || 'No message provided'}`);
    
    const mailtoUrl = `mailto:faizanstudent0@gmail.com?subject=${subject}&body=${body}`;
    console.log('Mailto URL:', mailtoUrl); // Debug log
    
    window.open(mailtoUrl);
    toast.success('Opening your email client to send the message.');
    
    // Reset form
    if (form.current) {
      form.current.reset();
    }
    setFormData({ name: '', email: '', message: '' });
  };

  const handleScheduleCall = () => {
    // Open Calendly or your preferred scheduling service
    // For now, we'll use a mailto link with scheduling request
    const subject = encodeURIComponent('Schedule a Call - Portfolio Contact');
    const body = encodeURIComponent(`Hi Faizan,

I would like to schedule a call to discuss a potential project.

My preferred times:
- [Please mention your preferred date and time]

Best regards,
[Your Name]
[Your Email]
[Your Phone Number]`);
    
    window.open(`mailto:faizanstudent0@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    
    console.log('Field changed:', fieldName, 'Value:', value); // Debug log
    
    // Map EmailJS field names to our state
    const stateFieldMap: { [key: string]: keyof typeof formData } = {
      'from_name': 'name',
      'from_email': 'email',
      'message': 'message'
    };
    
    const stateField = stateFieldMap[fieldName] || fieldName as keyof typeof formData;
    
    setFormData(prev => {
      const newData = {
        ...prev,
        [stateField]: value
      };
      console.log('Updated form data:', newData); // Debug log
      return newData;
    });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:faizanstudent0@gmail.com', label: 'Email' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'faizanstudent0@gmail.com', href: 'mailto:faizanstudent0@gmail.com' },
    { icon: Phone, label: '+91 8299899621', href: 'tel:+918299899621' },
    { icon: MapPin, label: 'India', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together! 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="from_name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="from_email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span>{info.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 group"
                      title={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
              <p className="text-blue-100 mb-4">
                Let's discuss your project and bring your ideas to life!
              </p>
              <Button
                onClick={handleScheduleCall}
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}