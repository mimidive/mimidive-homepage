import { type ElementType, Fragment, type ReactNode } from 'react';

export type ResponsiveLine = {
  mobile: readonly string[];
  desktop: string;
};

type Props = {
  children?: ReactNode;
  copy?: ResponsiveLine;
  mobile?: readonly string[] | string;
  desktop?: string;
  as?: ElementType;
  className?: string;
  /** Short headlines: evens line lengths as the viewport changes */
  balance?: boolean;
  /** Insert optional break points after commas (string children only) */
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

function normalizeLines(lines: readonly string[] | string) {
  return typeof lines === 'string' ? lines.split('\n').filter(Boolean) : lines;
}

function renderLines(lines: readonly string[] | string) {
  const normalized = normalizeLines(lines);

  return normalized.map((line, index) => (
    <Fragment key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}

const typographyClass = 'break-keep text-pretty [word-break:keep-all] [overflow-wrap:normal]';

export function ResponsiveText({
  children,
  copy,
  mobile,
  desktop,
  as: Tag = 'span',
  className = '',
  balance = false,
  softBreaks = false,
}: Props) {
  const mergedClassName = [typographyClass, balance ? 'text-balance' : '', className]
    .filter(Boolean)
    .join(' ');

  const responsiveMobile = copy?.mobile ?? mobile;
  const responsiveDesktop = copy?.desktop ?? desktop;

  if (responsiveMobile && responsiveDesktop) {
    return (
      <Tag className={mergedClassName}>
        <span className="md:hidden">{renderLines(responsiveMobile)}</span>
        <span className="hidden md:inline">
          {softBreaks ? withSoftBreaks(responsiveDesktop) : responsiveDesktop}
        </span>
      </Tag>
    );
  }

  const content =
    softBreaks && typeof children === 'string' ? withSoftBreaks(children) : children;

  return <Tag className={mergedClassName}>{content}</Tag>;
}
