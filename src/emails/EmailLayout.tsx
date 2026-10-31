import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";
import companyData from "@/data/company.json";

const { company } = companyData;

// Brand colours from globals.css, converted to hex for email clients.
export const colors = {
  forest: "#1C5438",
  forestDark: "#113B26",
  forestLight: "#367D59",
  gold: "#D99726",
  cream: "#FCFBF8",
  creamDark: "#F1EBE2",
  sage: "#B3CCB3",
  sageLight: "#EEF4EE",
  text: "#24372D",
  muted: "#5B6E63",
};

export const fonts = {
  heading: "'Playfair Display', Georgia, 'Times New Roman', serif",
  body: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

export const siteUrl = company.contact.website;

const playfairUrl =
  "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vXDXbtPK-F2qC0s.woff2";

type EmailLayoutProps = {
  preview: string;
  eyebrow: string;
  heading: string;
  subheading?: string;
  children: ReactNode;
};

export function EmailLayout({ preview, eyebrow, heading, subheading, children }: EmailLayoutProps) {
  return (
    <Html lang="en">
      <Head>
        {/* Scoped @font-face so only headings use Playfair; clients without web fonts fall back to Georgia. */}
        <style>{`@font-face { font-family: 'Playfair Display'; font-style: normal; font-weight: 500; src: url(${playfairUrl}) format('woff2'); }`}</style>
      </Head>
      <Preview>{preview}</Preview>
      <Body style={{ backgroundColor: colors.creamDark, margin: 0, padding: "24px 0", fontFamily: fonts.body }}>
        <Container style={{ maxWidth: 600, width: "100%", backgroundColor: colors.cream, borderRadius: 12, overflow: "hidden" }}>
          <Section style={{ padding: "24px 32px 16px", textAlign: "center" }}>
            <Link href={siteUrl}>
              <Img
                src={`${siteUrl}/email/logo.png`}
                width="80"
                height="80"
                alt={company.name}
                style={{ margin: "0 auto" }}
              />
            </Link>
          </Section>

          <Section style={{ backgroundColor: colors.forest, padding: "32px 32px 28px", textAlign: "center" }}>
            <Text style={{ margin: 0, color: colors.gold, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>
              {eyebrow}
            </Text>
            <Text style={{ margin: "10px 0 0", color: colors.cream, fontFamily: fonts.heading, fontSize: 28, lineHeight: "36px" }}>
              {heading}
            </Text>
            {subheading ? (
              <Text style={{ margin: "8px 0 0", color: colors.sage, fontSize: 15, lineHeight: "22px" }}>
                {subheading}
              </Text>
            ) : null}
          </Section>

          <Section style={{ padding: "28px 32px 8px" }}>{children}</Section>

          <Section style={{ backgroundColor: colors.forestDark, padding: "24px 32px", textAlign: "center" }}>
            <Text style={{ margin: 0, color: colors.cream, fontFamily: fonts.heading, fontSize: 18 }}>
              {company.name}
            </Text>
            <Text style={{ margin: "6px 0 0", color: colors.sage, fontSize: 13, lineHeight: "20px" }}>
              {company.address.full}
            </Text>
            <Hr style={{ borderColor: colors.forestLight, margin: "16px 0" }} />
            <Text style={{ margin: 0, fontSize: 13, lineHeight: "22px" }}>
              <Link href={`tel:${company.contact.phone}`} style={{ color: colors.cream }}>
                {company.contact.phone}
              </Link>
              <span style={{ color: colors.sage }}>{"  ·  "}</span>
              <Link href={`mailto:${company.contact.email}`} style={{ color: colors.cream }}>
                {company.contact.email}
              </Link>
            </Text>
            <Text style={{ margin: "6px 0 0", fontSize: 13, lineHeight: "22px" }}>
              <Link href={siteUrl} style={{ color: colors.gold }}>
                greentulip.co.ke
              </Link>
              <span style={{ color: colors.sage }}>{"  ·  "}</span>
              <Link href={company.social.instagram} style={{ color: colors.gold }}>
                Instagram
              </Link>
              <span style={{ color: colors.sage }}>{"  ·  "}</span>
              <Link href={company.social.facebook} style={{ color: colors.gold }}>
                Facebook
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

type DetailsTableProps = { rows: { label: string; value: string }[] };

export function DetailsTable({ rows }: DetailsTableProps) {
  return (
    <table
      role="presentation"
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      style={{ borderCollapse: "collapse", border: `1px solid ${colors.creamDark}`, borderRadius: 8 }}
    >
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.label} style={{ backgroundColor: index % 2 === 0 ? "#FFFFFF" : colors.cream }}>
            <td style={{ padding: "10px 14px", width: "38%", color: colors.muted, fontSize: 13, verticalAlign: "top" }}>
              {row.label}
            </td>
            <td style={{ padding: "10px 14px", color: colors.text, fontSize: 14, fontWeight: 600, verticalAlign: "top" }}>
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Text style={{ margin: "24px 0 10px", color: colors.forest, fontFamily: fonts.heading, fontSize: 18 }}>
      {children}
    </Text>
  );
}

export function MessageBox({ children }: { children: ReactNode }) {
  return (
    <Text
      style={{
        margin: 0,
        padding: "14px 16px",
        backgroundColor: colors.sageLight,
        borderLeft: `3px solid ${colors.sage}`,
        borderRadius: 6,
        color: colors.text,
        fontSize: 14,
        lineHeight: "22px",
        whiteSpace: "pre-wrap",
      }}
    >
      {children}
    </Text>
  );
}

export const paragraph = { margin: "0 0 14px", color: colors.text, fontSize: 15, lineHeight: "24px" };
