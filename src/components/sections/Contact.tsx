'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { contactFormSchema } from '@/lib/validations';
import { personalInfo } from '@/data/portfolio';
import { Send } from 'lucide-react';
import { useState } from 'react';

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      } else {
        setSubmitStatus({ success: false, message: result.error || 'Something went wrong.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'An error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Get In Touch</h2>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-gray-300">{personalInfo.bio}</p>
              <div className="mt-8 space-y-4">
                <p className="flex items-center text-gray-300">
                  <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-indigo-400">{personalInfo.contact.email}</a>
                </p>
                <p className="flex items-center text-gray-300">
                  <a href={`tel:${personalInfo.contact.phone}`} className="hover:text-indigo-400">{personalInfo.contact.phone}</a>
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">Name</label>
                <div className="mt-2.5">
                  <input type="text" id="name" {...register('name')} className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                  {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
                <div className="mt-2.5">
                  <input type="email" id="email" {...register('email')} className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                  {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
                <div className="mt-2.5">
                  <textarea id="message" rows={4} {...register('message')} className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                  {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
                </div>
              </div>
              <div className="mt-10">
                <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-x-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-400 disabled:opacity-50">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </button>
              </div>
              {submitStatus && (
                <p className={`mt-4 text-center text-sm ${submitStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
