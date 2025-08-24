/**
 * @file src/components/link-cards.tsx
 * @description A component that renders a list of social and contact link cards.
 * @note This is a client component because it uses the `useInView` hook to trigger animations.
 */
"use client"

import LinkCard from './link-card';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { useRef } from 'react';
import { WhatsappIcon } from '@/components/icons/whatsapp';

// An array of link objects, defining the properties for each card.
const links = [
  { href: 'https://www.linkedin.com/in/akshayabraham37/', title: 'LinkedIn', Icon: Linkedin },
  { href: 'https://www.instagram.com/akshay.abraham/', title: 'Instagram', Icon: Instagram },
  { href: 'https://github.com/akshay-abraham/', title: 'GitHub', Icon: Github },
  { href: 'https://wa.me/919946141445', title: 'WhatsApp', Icon: WhatsappIcon },
  { href: 'mailto:akshaykroobenabraham@gmail.com', title: 'Mail', Icon: Mail },
];

/**
 * LinkCards component lays out a series of `LinkCard` components.
 * It uses the `useInView` hook to trigger a staggered animation for the cards
 * when they scroll into the viewport.
 * @returns {JSX.Element} A div containing a list of LinkCard components.
 */
export default function LinkCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <div ref={ref} className="space-y-4">
      {/* Map over the links array to render a LinkCard for each item. */}
      {links.map((link, index) => (
        <LinkCard 
          key={link.href} 
          {...link} 
          // Stagger the animation delay for each card.
          delay={300 + index * 100}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}
