import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Contact = () => {
  return (
    <div className="min-h-screen py-8">
      <h1 className="text-4xl font-bold text-primary-blue mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Have a question, suggestion, or a deal to share? We'd love to hear from you!
      </p>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <form className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-lg">Your Name</Label>
            <Input id="name" type="text" placeholder="John Doe" className="mt-2 p-3 border rounded-md w-full" />
          </div>
          <div>
            <Label htmlFor="email" className="text-lg">Your Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-2 p-3 border rounded-md w-full" />
          </div>
          <div>
            <Label htmlFor="message" className="text-lg">Message</Label>
            <Textarea id="message" placeholder="Your message here..." rows={5} className="mt-2 p-3 border rounded-md w-full"></Textarea>
          </div>
          <Button type="submit" className="w-full bg-accent-green text-white text-lg py-3 rounded-md hover:bg-green-700 transition-colors">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;