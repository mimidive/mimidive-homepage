'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { renderHighlightedText } from '@/components/ui/FluorescentHighlight';
import { splitReadableText } from '@/lib/splitSentences';

const softEase = [0.16, 1, 0.3, 1] as const;

type Props = {
  text: string;
  className?: string;
  sentenceClassName?: string;
  animate?: boolean;
  gap?: 'sm' | 'md' | 'lg';
};

const gapClass = {
  sm: 'space-y-3',
  md: 'space-y-5',
  lg: 'space-y-6',
} as const;

export function ReadableText({
  text,
  className = '',
  sentenceClassName = '',
  animate = true,
  gap = 'md',
}: Props) {
  const reduceMotion = useReducedMotion();
  const sentences = splitReadableText(text);
  const shouldAnimate = animate && !reduceMotion;

  if (sentences.length === 0) return null;

  return (
    <div className={`${gapClass[gap]} ${className}`.trim()}>
      {sentences.map((sentence, index) => {
        const key = `${index}-${sentence.slice(0, 32)}`;

        if (shouldAnimate) {
          return (
            <motion.p
              key={key}
              className={`break-keep text-pretty [word-break:keep-all] [overflow-wrap:normal] ${sentenceClassName}`.trim()}
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.75, ease: softEase, delay: index * 0.07 }}
            >
              {renderHighlightedText(sentence)}
            </motion.p>
          );
        }

        return (
          <p key={key} className={`break-keep text-pretty [word-break:keep-all] [overflow-wrap:normal] ${sentenceClassName}`.trim()}>
            {renderHighlightedText(sentence)}
          </p>
        );
      })}
    </div>
  );
}
