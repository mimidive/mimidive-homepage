type Props = {
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ title, description, align = 'left' }: Props) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <h2 className="text-2xl font-semibold leading-tight text-gray-900 md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">{description}</p>
      )}
    </div>
  );
}
