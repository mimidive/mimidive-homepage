import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function FluorescentHighlight({ children }: Props) {
  return (
    <span className="box-decoration-clone bg-[#FFF3B0] px-1 py-0.5 font-semibold text-gray-900 [box-decoration-break:clone]">
      {children}
    </span>
  );
}

const highlightPattern = /\[\[([^\]]+)\]\]/g;

export function renderHighlightedText(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(highlightPattern)) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<FluorescentHighlight key={match.index}>{match[1]}</FluorescentHighlight>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
