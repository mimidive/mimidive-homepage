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
      <h2 className="text-3xl font-semibold leading-[1.16] tracking-[-0.035em] text-gray-900 md:text-5xl">{title}</h2>
      {description && (
        <ReadableText
          text={description}
          className="mt-5"
          sentenceClassName="text-[15px] leading-8 text-gray-600 md:text-lg md:leading-9"
        />
      )}
    </div>
  );
}
