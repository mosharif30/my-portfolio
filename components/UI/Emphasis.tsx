// Renders **double-asterisk** segments of resume text in bold.
export function Emphasis({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-fg">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
