import { Metadata } from 'next';
import SubmitClient from '@/components/SubmitClient';
import { baseMetadata } from '@/lib/seo';

export const metadata: Metadata = baseMetadata('Submit');

export default function SubmitPage() {
  return <SubmitClient />;
}
