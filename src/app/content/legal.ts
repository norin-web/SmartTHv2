// Privacy Policy and Terms of Use are published here VERBATIM from the owner —
// only markup changes are allowed ("## " headings, "- " lists). Never paraphrase.
// The owner’s texts have not arrived yet: `body` is null and the page shows a
// short notice instead. Paste the texts into `body` when they come in.

export const legalUpdated = "PLACEHOLDER"; // effective date from the documents

export type LegalDoc = {
  title: string;
  body: string | null;
  // "At a glance" — a site summary, not part of the document; fill after the text arrives
  glance?: [string, string][];
  other: { to: string; label: string };
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  body: null,
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  body: null,
  other: { to: "/privacy", label: "Privacy Policy" },
};
