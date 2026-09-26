import { ReadableText } from '@/components/ui/ReadableText';

type Props = {
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ title, description, align = 'left' }: Props) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <h2 className="break-keep text-pretty text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.2] tracking-[-0.035em] text-gray-900 [word-break:keep-all] md:leading-[1.14]">
        {title}
      </h2>
      {description && (
        <ReadableText
          text={description}
          className={`mt-4 md:mt-5 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
          sentenceClassName="text-base leading-8 text-gray-600 md:text-lg md:leading-9"
        />
      )}
    </div>
  );
}
