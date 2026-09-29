/**
 * Trust records. A value of "To be confirmed" or "To be published" is empty
 * on purpose. Replace it from the institution’s own document. Do not add a
 * licence, a regulator, a fee, a retention period, or a security control
 * that has not been supplied.
 */

export type TrustLine = {
  label: string;
  value: string;
  note: string;
};

export const trustLegend =
  "“To be confirmed” and “To be published” are empty on purpose. The institution fills them from its own record.";

export const regulatoryLines: TrustLine[] = [
  {
    label: "Legal name",
    value: "Sirfa Empowerment Initiative",
    note: "The name supplied for the institution. The licence itself is still to be confirmed.",
  },
  {
    label: "Licence number",
    value: "To be confirmed",
    note: "The number on the licence. This site does not invent one.",
  },
  {
    label: "Regulator",
    value: "To be confirmed",
    note: "The authority that issued the licence, by its own name.",
  },
  {
    label: "Licence category",
    value: "To be confirmed",
    note: "The class of licence, in the regulator’s wording.",
  },
  {
    label: "Ownership",
    value: "To be confirmed",
    note: "Who owns the firm, in plain language.",
  },
];

export const complaintLines: TrustLine[] = [
  {
    label: "Where to start",
    value: "The contact page",
    note: "A complaint uses the same office until a named officer is published.",
  },
  {
    label: "Complaints officer",
    value: "To be confirmed",
    note: "The person’s name, and a telephone or email that reaches them.",
  },
  {
    label: "Acknowledgement",
    value: "To be published",
    note: "How soon the office says it has the complaint.",
  },
  {
    label: "If the office does not resolve it",
    value: "To be confirmed",
    note: "The body a customer can go to next, once the institution names it.",
  },
];

export const collectedLines: TrustLine[] = [
  {
    label: "An application",
    value: "Asked on the page",
    note: "Name, telephone, address, how you earn, the loan, the amount, the reason, and any document names you choose to note.",
  },
  {
    label: "A message",
    value: "Asked on the page",
    note: "Name, telephone, an email if you give one, and the message.",
  },
  {
    label: "Documents",
    value: "Names only",
    note: "A file can be named. It is not uploaded.",
  },
];

export const privacyAwaiting: TrustLine[] = [
  {
    label: "Who is responsible",
    value: "Sirfa Empowerment Initiative",
    note: "Write to sirfaempowermentinitiative@gmail.com about your details. A named privacy contact is still to be published.",
  },
  {
    label: "How long an enquiry is kept",
    value: "To be published",
    note: "The retention period, once a system stores the answers.",
  },
  {
    label: "Who else sees it",
    value: "To be confirmed",
    note: "Any person or firm the institution shares an enquiry with, and why.",
  },
  {
    label: "Your requests",
    value: "To be published",
    note: "How to ask for a copy, a correction, or a deletion, and how long that takes.",
  },
];

export const securityKnown = [
  "The application and the message form run in this browser.",
  "Submitting does not send the answers. This site does not store them.",
  "Leaving the page clears them.",
  "A document can be named. The file itself is not uploaded.",
];

export const securityAwaiting: TrustLine[] = [
  {
    label: "Where answers will be stored",
    value: "To be confirmed",
    note: "The system, and the place, once an application can actually be sent.",
  },
  {
    label: "Who at the institution can see them",
    value: "To be confirmed",
    note: "The roles that can open an application.",
  },
  {
    label: "The control on the connection",
    value: "To be confirmed",
    note: "Name the control when a system is connected.",
  },
];

export const cookieKnown =
  "The site does not load a third-party script. There is no consent banner, because there is no optional cookie to accept or refuse.";

export const cookieAwaiting: TrustLine[] = [
  {
    label: "Cookie name",
    value: "To be confirmed",
    note: "Add a row for each cookie, if one is introduced. None is set today.",
  },
  {
    label: "Who sets it",
    value: "To be confirmed",
    note: "Sirfa Empowerment Initiative, or the name of another firm.",
  },
  {
    label: "Purpose",
    value: "To be published",
    note: "What the cookie is for, in plain words.",
  },
  {
    label: "How long it lasts",
    value: "To be published",
    note: "The period, or “until you close the browser”.",
  },
];

export const loanDisclosure: TrustLine[] = [
  { label: "Amount", value: "To be published", note: "The least and the most the loan will consider." },
  { label: "Term", value: "To be published", note: "How long the loan can run." },
  { label: "Interest", value: "To be published", note: "The rate, and whether it is flat or reducing." },
  { label: "Fees", value: "To be published", note: "Each charge, by name, including any insurance or management fee." },
  { label: "Total amount payable", value: "To be published", note: "Principal, interest, and fees together, for a stated example." },
  { label: "Each repayment", value: "To be published", note: "How much, how often, and the method." },
  { label: "A late payment", value: "To be published", note: "Any charge, and from which day it applies." },
  { label: "Paying early", value: "To be published", note: "Whether it is allowed, and whether the cost changes." },
  { label: "Security", value: "To be published", note: "What the loan asks you to pledge, or that it asks for none." },
];

export const disclosureNote =
  "A line marked “To be published” is not a term. It counts only when it is printed here and then written into the facility letter. This page is not an offer of credit.";
