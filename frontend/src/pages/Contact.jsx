import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the form data to a backend
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Us"
          subtitle="Have questions? We'd love to hear from you."
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <h3 className="text-xl font-bold text-light-text mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-light-text focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-light-text focus:outline-none focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-light-text focus:outline-none focus:border-primary transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-light-text focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-light-text mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-xl text-primary">📧</div>
                  <div>
                    <p className="font-semibold text-light-text">Email</p>
                    <p className="text-slate-400">support@charactercounter.io</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-xl text-primary">💬</div>
                  <div>
                    <p className="font-semibold text-light-text">Live Chat</p>
                    <p className="text-slate-400">Available Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-xl text-primary">🌍</div>
                  <div>
                    <p className="font-semibold text-light-text">Location</p>
                    <p className="text-slate-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <h3 className="text-xl font-bold text-light-text mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors focus-ring"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors focus-ring"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-800 transition-colors focus-ring"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </Card>
            
            <Card>
              <h3 className="text-xl font-bold text-light-text mb-4">FAQ</h3>
              <div className="space-y-3">
                <details className="group">
                  <summary className="cursor-pointer text-slate-300 hover:text-primary transition-colors list-none flex items-center justify-between">
                    <span>Is my data secure?</span>
                    <span className="text-primary">+</span>
                  </summary>
                  <p className="mt-2 text-slate-400 text-sm">
                    Yes! All text processing happens locally in your browser. We never store or transmit your content.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-slate-300 hover:text-primary transition-colors list-none flex items-center justify-between">
                    <span>Is CharacterCounter free?</span>
                    <span className="text-primary">+</span>
                  </summary>
                  <p className="mt-2 text-slate-400 text-sm">
                    Yes, CharacterCounter is completely free to use with no limitations.
                  </p>
                </details>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
