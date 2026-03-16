'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Section } from '@/components/ui/design/Section';
import { Button } from '@/components/ui/design/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CtaButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
}

interface CtaSectionProps {
  title: string;
  subtitle: string;
  primaryButton?: CtaButton;
  secondaryButton?: CtaButton;
}

export function CtaSection({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton 
}: CtaSectionProps) {
  return (
    <Section background="dark" size="lg" className="py-16 md:py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 start-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              {title}
            </h2>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryButton && (
                primaryButton.href.startsWith('http') ? (
                  <a href={primaryButton.href} className="w-full sm:w-auto">
                    <Button size="lg" variant={primaryButton.variant} fullWidth className="group gap-2">
                      {primaryButton.label}
                      {primaryButton.showArrow && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:scale-x-[-1]" />
                      )}
                    </Button>
                  </a>
                ) : (
                  <Link href={primaryButton.href as any} className="w-full sm:w-auto">
                    <Button size="lg" variant={primaryButton.variant} fullWidth className="group gap-2">
                      {primaryButton.label}
                      {primaryButton.showArrow && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:scale-x-[-1]" />
                      )}
                    </Button>
                  </Link>
                )
              )}
              {secondaryButton && ( 
                secondaryButton.href.startsWith('http') ? (
                  <a href={secondaryButton.href} className="w-full sm:w-auto">
                     <Button size="lg" variant={secondaryButton.variant} fullWidth className="group gap-2">
                      {secondaryButton.label}
                      {secondaryButton.showArrow && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:scale-x-[-1]" />
                      )}
                    </Button>
                  </a>
                ) : (
                  <Link href={secondaryButton.href as any} className="w-full sm:w-auto">
                    <Button size="lg" variant={secondaryButton.variant} fullWidth className={secondaryButton.showArrow ? "group gap-2" : ""}>
                      {secondaryButton.label}
                      {secondaryButton.showArrow && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:scale-x-[-1]" />
                      )}
                    </Button>
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
