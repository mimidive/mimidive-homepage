'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReadableText } from '@/components/ui/ReadableText';

const softEase = [0.16, 1, 0.3, 1] as const;

const typographyBase =
  'break-keep text-pretty [word-break:keep-all] [overflow-wrap:normal] text-zinc-600';

type BioBlock = {
  desktop: string;
  mobileLines: readonly { text: string; className: string }[];
};

const credentialBlock: BioBlock = {
  desktop:
    'AIDA·CMAS 국가대표이자 대한민국 노핀 국가대표 선수로 활동하며 아시아 신기록과 한국 신기록을 경신했습니다.',
  mobileLines: [
    { text: 'AIDA·CMAS 국가대표이자', className: 'text-lg font-semibold leading-8 text-zinc-700' },
    {
      text: '대한민국 노핀 국가대표 선수로 활동하며',
      className: 'text-[0.9375rem] leading-7',
    },
    { text: '아시아 신기록과 한국 신기록을 경신했습니다.', className: 'text-base leading-8' },
  ],
};

const experienceBlock: BioBlock = {
  desktop:
    '선수로서 쌓아온 경험을 바탕으로, 물속에서 스스로를 이해하고 편안함을 느낄 수 있도록 안전하고 체계적인 교육을 진행하고 있습니다.',
  mobileLines: [
    { text: '선수로서 쌓아온 경험을 바탕으로,', className: 'text-base leading-8' },
    {
      text: '물속에서 스스로를 이해하고',
      className: 'text-xl font-medium leading-8 text-zinc-700',
    },
    { text: '편안함을 느낄 수 있도록', className: 'text-lg leading-8' },
    {
      text: '안전하고 체계적인 교육을 진행하고 있습니다.',
      className: 'text-[0.9375rem] leading-7',
    },
  ],
};

function ResponsiveBioParagraph({ block, index }: { block: BioBlock; index: number }) {
  const reduceMotion = useReducedMotion();
  const desktopClassName = `${typographyBase} text-base leading-8 md:text-lg md:leading-9`;

  if (reduceMotion) {
    return (
      <>
        <p className={`md:hidden ${desktopClassName}`}>
          <span className="flex flex-col gap-1">
            {block.mobileLines.map((line) => (
              <span key={line.text} className={`block ${typographyBase} ${line.className}`}>
                {line.text}
              </span>
            ))}
          </span>
        </p>
        <p className={`hidden md:block ${desktopClassName}`}>{block.desktop}</p>
      </>
    );
  }

  return (
    <>
      <motion.p
        className={`md:hidden ${desktopClassName}`}
        initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.75, ease: softEase, delay: index * 0.07 }}
      >
        <span className="flex flex-col gap-1">
          {block.mobileLines.map((line) => (
            <span key={line.text} className={`block ${typographyBase} ${line.className}`}>
              {line.text}
            </span>
          ))}
        </span>
      </motion.p>
      <motion.p
        className={`hidden md:block ${desktopClassName}`}
        initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.75, ease: softEase, delay: index * 0.07 }}
      >
        {block.desktop}
      </motion.p>
    </>
  );
}

export function InstructorIntroBio() {
  const sentenceClassName = 'text-base leading-8 text-zinc-600 md:text-lg md:leading-9';

  return (
    <div className="mt-12 max-w-3xl space-y-5">
      <ReadableText
        text={`안녕하세요.\n\n미미다이브 대표 강사 김혜미입니다.`}
        sentenceClassName={sentenceClassName}
        className=""
      />
      <ResponsiveBioParagraph block={credentialBlock} index={2} />
      <ResponsiveBioParagraph block={experienceBlock} index={3} />
    </div>
  );
}
