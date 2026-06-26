function splitSentences(text: string): string[] {
  if (!text) return [];

  const sentences = text
    .split(/(?<=[.!?。])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  return sentences.length > 0 ? sentences : [text];
}

export function splitReadableText(text: string): string[] {
  if (!text.trim()) return [];

  return text
    .split(/\n{2,}/)
    .flatMap((paragraph) =>
      paragraph
        .split(/\n/)
        .flatMap((line) => splitSentences(line.trim()))
        .filter(Boolean),
    )
    .filter(Boolean);
}
