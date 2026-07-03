import Image from 'next/image';
import { Fragment, type ReactNode } from 'react';
import { type ResponsiveLine } from '@/components/ui/ResponsiveText';

export type ReviewMoment = {
  image: string;
  alt: string;
  category: string;
  profile: string;
  quote: ResponsiveLine;
  highlight: string;
};

function StarRating() {
  return (
    <div className="flex gap-0.5 text-[#7FA6B8]" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-sm leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function renderHighlightedText(text: string, highlight: string): ReactNode {
  const index = text.indexOf(highlight);

  if (index === -1) {
    return text;
  }

  return (
    <>
      {text.slice(0, index)}
      <span className="review-quote-highlight">{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  );
}

function renderMobileQuote(lines: readonly string[], highlight: string) {
  return lines.map((line, index) => (
    <Fragment key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {renderHighlightedText(line, highlight)}
    </Fragment>
  ));
}

function HighlightedQuote({
  quote,
  highlight,
}: {
  quote: ResponsiveLine;
  highlight: string;
}) {
  return (
    <>
      <span className="md:hidden">
        &ldquo;{renderMobileQuote(quote.mobile, highlight)}&rdquo;
      </span>
      <span className="hidden md:inline">
        &ldquo;{renderHighlightedText(quote.desktop, highlight)}&rdquo;
      </span>
    </>
  );
}

export function ReviewMomentRow({
  moment,
  reverse = false,
}: {
  moment: ReviewMoment;
  reverse?: boolean;
}) {
  return (
    <figure
      className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#1A1A1A] shadow-[0_12px_40px_rgba(26,26,26,0.08)] md:w-[42%] md:shrink-0 lg:w-[44%]">
        <Image
          src={moment.image}
          alt={moment.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 42vw"
        />
      </div>
      <figcaption className="flex flex-1 flex-col justify-center md:py-4">
        <span className="inline-block w-fit rounded-md bg-[#DCECEF] px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] text-[#5F7C8A]">
          {moment.category}
        </span>
        <div className="mt-4 flex items-center gap-3">
          <StarRating />
          <span className="text-[11px] font-medium tracking-[0.04em] text-[#6B7280]">
            {moment.profile}
          </span>
        </div>
        <blockquote className="mt-6 break-keep text-pretty font-serif text-xl font-semibold leading-[1.6] tracking-[-0.02em] text-[#1A1A1A] [overflow-wrap:normal] [word-break:keep-all] md:mt-8 md:text-2xl md:leading-[1.5] lg:text-[1.75rem] lg:leading-[1.55]">
          <HighlightedQuote quote={moment.quote} highlight={moment.highlight} />
        </blockquote>
      </figcaption>
    </figure>
  );
}

export function ReviewStarRating({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex gap-0.5 text-[#5F7C8A] ${className}`}
      role="img"
      aria-label="5점 만점"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-base leading-none">
          ★
        </span>
      ))}
    </div>
  );
}
