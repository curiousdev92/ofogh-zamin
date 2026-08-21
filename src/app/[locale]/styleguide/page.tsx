import type { Metadata } from "next";

import {
  Badge,
  Button,
  buttonVariants,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Input,
  Label,
  Section,
  Textarea,
} from "@/components/ui";

// Internal design QA surface — never index it.
export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

// Literal class strings (Tailwind scans source text, so these must be spelled out).
const NAVY = [
  "bg-navy-50",
  "bg-navy-100",
  "bg-navy-200",
  "bg-navy-300",
  "bg-navy-400",
  "bg-navy-500",
  "bg-navy-600",
  "bg-navy-700",
  "bg-navy-800",
  "bg-navy-900",
  "bg-navy-950",
];
const GOLD = [
  "bg-gold-50",
  "bg-gold-100",
  "bg-gold-200",
  "bg-gold-300",
  "bg-gold-400",
  "bg-gold-500",
  "bg-gold-600",
  "bg-gold-700",
  "bg-gold-800",
  "bg-gold-900",
];
const STEEL = [
  "bg-steel-50",
  "bg-steel-100",
  "bg-steel-200",
  "bg-steel-300",
  "bg-steel-400",
  "bg-steel-500",
  "bg-steel-600",
  "bg-steel-700",
  "bg-steel-800",
  "bg-steel-900",
  "bg-steel-950",
];

function Swatches({ title, classes }: { title: string; classes: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-steel-600">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {classes.map((c) => (
          <div key={c} className="w-24">
            <div className={`h-14 w-full border border-border ${c}`} />
            <span className="mt-1 block text-[11px] text-muted-foreground">
              {c.replace("bg-", "")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-10">
      <h2 className="mb-6 text-xl  uppercase tracking-wide text-navy-900">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <Section spacing="md">
      <Container className="space-y-14">
        <header>
          <Badge variant="accent">Design System</Badge>
          <h1 className="mt-4 text-4xl  uppercase tracking-tight">Ofogh Zamin Style Guide</h1>
          <p className="mt-3 max-w-2xl text-steel-600">
            Navy + brass, squared edges, industrial. Visual QA for every design token and primitive.
          </p>
        </header>

        <Block title="Color">
          <div className="space-y-8">
            <Swatches title="Navy — brand" classes={NAVY} />
            <Swatches title="Gold / Brass — accent" classes={GOLD} />
            <Swatches title="Steel — neutral" classes={STEEL} />
          </div>
        </Block>

        <Block title="Typography">
          <div className="space-y-3">
            <h1 className="text-5xl  uppercase tracking-tight">Heading 1</h1>
            <h2 className="text-4xl  uppercase tracking-tight">Heading 2</h2>
            <h3 className="text-3xl font-bold">Heading 3</h3>
            <h4 className="text-2xl font-bold">Heading 4</h4>
            <h5 className="text-xl font-semibold">Heading 5</h5>
            <h6 className="text-lg font-semibold">Heading 6</h6>
            <p className="max-w-2xl text-base text-steel-700">
              Body text. Precision brass fittings and fluid-system components, engineered to spec
              and built to last. The quick brown fox jumps over the lazy dog.
            </p>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Muted / small text — used for captions, metadata, and secondary detail.
            </p>
          </div>
        </Block>

        <Block title="Buttons">
          <div className="space-y-6">
            {(["primary", "accent", "outline", "ghost"] as const).map((variant) => (
              <div key={variant} className="flex flex-wrap items-center gap-4">
                <span className="w-20 text-xs uppercase tracking-widest text-muted-foreground">
                  {variant}
                </span>
                <Button variant={variant} size="sm">
                  Small
                </Button>
                <Button variant={variant} size="md">
                  Medium
                </Button>
                <Button variant={variant} size="lg">
                  Large
                </Button>
                <Button variant={variant} disabled>
                  Disabled
                </Button>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-4">
              <span className="w-20 text-xs uppercase tracking-widest text-muted-foreground">
                link
              </span>
              <Button variant="link">Text link button</Button>
              <a href="#" className={buttonVariants({ variant: "accent" })}>
                Link as button
              </a>
            </div>
          </div>
        </Block>

        <Block title="Badges">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="muted">Muted</Badge>
          </div>
        </Block>

        <Block title="Cards">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Static card</CardTitle>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-steel-600">
                  Bordered surface, no radius, no shadow. Structure comes from the 1px border.
                </p>
              </CardBody>
              <CardFooter>
                <Button size="sm">Action</Button>
                <Button size="sm" variant="ghost">
                  Cancel
                </Button>
              </CardFooter>
            </Card>

            <Card interactive>
              <CardHeader>
                <CardTitle>Interactive card</CardTitle>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-steel-600">
                  Hover me — the border shifts to navy. Used for product / category / blog cards.
                </p>
              </CardBody>
            </Card>
          </div>
        </Block>

        <Block title="Form fields">
          <div className="grid max-w-xl gap-5">
            <div>
              <Label htmlFor="sg-name">Full name</Label>
              <Input id="sg-name" placeholder="Jane Doe" />
            </div>
            <div>
              <Label htmlFor="sg-email">Email</Label>
              <Input id="sg-email" type="email" placeholder="jane@company.com" />
            </div>
            <div>
              <Label htmlFor="sg-msg">Message</Label>
              <Textarea id="sg-msg" placeholder="Tell us what you need…" />
            </div>
            <div>
              <Button variant="accent">Send</Button>
            </div>
          </div>
        </Block>
      </Container>
    </Section>
  );
}
