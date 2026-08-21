/**
 * Emits a JSON-LD <script> for structured data. Pass a schema.org object, or an
 * array of them to render several graphs in one tag. `<` is escaped so the
 * serialized data can never break out of the surrounding <script>.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
