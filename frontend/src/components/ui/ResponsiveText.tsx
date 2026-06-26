import { type ElementType, Fragment, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Short headlines: evens line lengths as the viewport changes */
  balance?: boolean;
  /** Insert optional break points after commas */
  softBreaks?: boolean;
};

function withSoftBreaks(text: string) {
  const segments = text.split(/,\s*/);

  if (segments.length === 1) return text;

  return segments.map((segment, index) => (
    <Fragment key={`${segment}-${index}`}>
      {index > 0 ? (
        <>
          ,<wbr />{' '}
        </>
      ) : null}
      {segment}
    </Fragment>
  ));
}

export function ResponsiveText({
  children,
  as: Tag = 'span',
  className = '',
  balance = false,
  softBreaks = false,
}: Props) {
  const content =
    softBreaks && typeof children === 'string' ? withSoftBreaks(children) : children;

  return (
    <Tag
      className={[
        'break-keep text-pretty [overflow-wrap:anywhere]',
        balance ? 'text-balance' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {content}
    </Tag>
  );
}
