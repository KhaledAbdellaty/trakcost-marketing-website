'use client';

import { useTranslations } from 'next-intl';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { leadSchema, LeadFormValues } from '../../features/leads/schemas';
import { useCreateLeadMutation } from '../../features/leads/leadApi';
import { clsx } from 'clsx';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface LeadFormProps {
  type: 'contact' | 'trial';
}

export function LeadForm({ type }: LeadFormProps) {
  const t = useTranslations('ContactForm');
  const [createLead, { isLoading, isSuccess, isError }] = useCreateLeadMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema) as any,
    defaultValues: {
      type: type,
    },
  });

  const onSubmit: SubmitHandler<LeadFormValues> = async (data) => {
    try {
      await createLead(data).unwrap();
      reset();
    } catch (err) {
      console.error('Failed to submit lead:', err);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-accent-success/10 p-8 text-center ring-1 ring-accent-success/50">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-success/20 mb-4">
          <CheckCircle2 className="h-6 w-6 text-accent-success" />
        </div>
        <h3 className="text-lg font-semibold text-primary-900">{t('success')}</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {isError && (
        <div className="rounded-md bg-red-50 p-4 border border-red-200 flex items-center gap-2 text-red-700 text-sm">
           <AlertCircle className="h-4 w-4" />
           {t('error')}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-primary-900">
          {t('fields.fullName')}
        </label>
        <div className="mt-2">
          <input
            {...register('fullName')}
            type="text"
            id="fullName"
            className={clsx(
              "block w-full rounded-md border-0 py-1.5 text-primary-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3",
              errors.fullName && "ring-red-500 focus:ring-red-500"
            )}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-primary-900">
            {t('fields.email')}
          </label>
          <div className="mt-2">
            <input
              {...register('email')}
              type="email"
              id="email"
              className={clsx(
                  "block w-full rounded-md border-0 py-1.5 text-primary-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3",
                  errors.email && "ring-red-500 focus:ring-red-500"
                )}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-primary-900">
            {t('fields.phone')}
          </label>
          <div className="mt-2">
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className={clsx(
                  "block w-full rounded-md border-0 py-1.5 text-primary-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3",
                  errors.phone && "ring-red-500 focus:ring-red-500"
                )}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        {/* Company */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-primary-900">
            {t('fields.companyName')}
          </label>
          <div className="mt-2">
            <input
              {...register('companyName')}
              type="text"
              id="companyName"
              className={clsx(
                  "block w-full rounded-md border-0 py-1.5 text-primary-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3",
                  errors.companyName && "ring-red-500 focus:ring-red-500"
                )}
            />
            {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>}
          </div>
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium leading-6 text-primary-900">
             {t('fields.role')}
          </label>
          <div className="mt-2">
            <input
              {...register('role')}
              type="text"
              id="role"
              className="block w-full rounded-md border-0 py-1.5 text-primary-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
      </div>

       {/* Message (Only for Contact) */}
       {type === 'contact' && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-primary-900">
              {t('fields.message')}
            </label>
            <div className="mt-2">
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 py-1.5 text-primary-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
       )}

      <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? t('submitting') : (type === 'trial' ? t('startTrial') : t('submit'))}
      </Button>
    </form>
  );
}
