'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { MarketingHeader } from '@/components/marketing/layout/MarketingHeader';
import { MarketingFooter } from '@/components/marketing/layout/MarketingFooter';
import { Section } from '@/components/ui/design/Section';
import { Button } from '@/components/ui/design/Button';

export default function ContactPage() {
  const t = useTranslations('marketing.contactPage');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <>
      <MarketingHeader />
      <div className="flex flex-col min-h-screen pt-20">
        {/* Header Section */}
        <Section background="dark" size="sm" className="text-center py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-slate-400">
              {t('subtitle')}
            </p>
          </motion.div>
        </Section>

        {/* Main Content Section */}
        <Section background="dark" size="sm" className="pb-24 -mt-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#161b27] border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300">
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 bg-[#0f172a] border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/50 transition-all text-start"
                        placeholder={t('form.placeholders.name')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 bg-[#0f172a] border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/50 transition-all text-start"
                        placeholder={t('form.placeholders.email')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                      {t('form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-[#0f172a] border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/50 transition-all text-start"
                      placeholder={t('form.placeholders.subject')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">
                      {t('form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-[#0f172a] border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-600/50 focus:ring-1 focus:ring-blue-600/50 transition-all resize-none text-start"
                      placeholder={t('form.placeholders.message')}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    className="group"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {t('form.submit')}
                        <Send className="w-5 h-5 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-center"
                    >
                      {t('form.success')}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="space-y-8">
                {/* Info Card */}
                <div className="bg-[#161b27] border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl" />
                  <h3 className="text-xl font-bold text-white mb-8 text-start">{t('info.title')}</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-start">
                        <p className="text-sm text-slate-500 mb-1">{t('info.labels.email')}</p>
                        <p className="text-slate-200">{t('info.email')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="text-start">
                        <p className="text-sm text-slate-500 mb-1">{t('info.labels.phone')}</p>
                        <p className="text-slate-200">{t('info.phone')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-start">
                        <p className="text-sm text-slate-500 mb-1">{t('info.labels.address')}</p>
                        <p className="text-slate-200">{t('info.address')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="text-start">
                        <p className="text-sm text-slate-500 mb-1">{t('info.labels.hours')}</p>
                        <p className="text-slate-200">{t('info.hours')}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </Section>
      </div>
      <MarketingFooter />
    </>
  );
}
