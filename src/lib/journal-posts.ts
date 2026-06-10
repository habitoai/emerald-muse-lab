import articleRoi from "@/assets/article-ai-roi.jpg";
import articleTraining from "@/assets/article-team-training.jpg";
import articleStrategy from "@/assets/article-ai-strategy.jpg";
import articleChange from "@/assets/article-change.jpg";
import articleProcess from "@/assets/article-process.jpg";
import articleCulture from "@/assets/article-culture.jpg";

export type Post = {
  slug: string;
  date: string;
  read: string;
  title: string;
  eyebrow: string;
  lede: string;
  img: string;
  alt: string;
  author: { name: string; role: string };
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  >;
};

export const posts: Post[] = [
  {
    slug: "honest-roi-of-ai-inside-a-20-person-team",
    date: "May 28, 2026",
    read: "6 min read",
    eyebrow: "Strategy",
    title: "The honest ROI of AI inside a 20-person team",
    lede: "Most AI ROI decks are fiction. Here is what actually moved inside a real 20-person team after six months of work, and what quietly did not.",
    img: articleRoi,
    alt: "Laptop with green data visualization",
    author: { name: "Edwin Rogoi", role: "Founder, Eddy's AI Lab" },
    body: [
      { type: "p", text: "Every founder I meet wants a number. How much will AI save us, how fast, how do we know. The honest answer is that the savings rarely show up where the slide deck promised — and they almost never show up in month one." },
      { type: "h2", text: "Where the time actually came back" },
      { type: "p", text: "Inside a 20-person services team we worked with for six months, the real wins were boring. Meeting recaps, first-draft proposals, customer reply drafts, and structured intake notes. None of it replaced a role. All of it gave each person back about 45 minutes a day." },
      { type: "ul", items: [
        "Sales: 38% faster proposal turnaround, same close rate.",
        "Ops: 60% drop in handoff errors after one shared GPT.",
        "Support: first-response time halved, CSAT unchanged.",
      ]},
      { type: "h2", text: "What did not work" },
      { type: "p", text: "Autonomous agents owning anything client-facing. Code-gen replacing junior engineers. A single \"AI lead\" expected to roll it out alone. We rolled all three back inside the first eight weeks." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "AI ROI is not a line item, it is a habit. Pick the three workflows your team already hates, and make those 30% lighter. Compound that across a quarter and the number on the board takes care of itself." },
    ],
  },
  {
    slug: "why-most-ai-training-fails",
    date: "Apr 14, 2026",
    read: "7 min read",
    eyebrow: "Training",
    title: "Why most AI training fails — and what we changed",
    lede: "Generic prompt workshops produce excited teams and zero adoption. Here is the structure we now use to make training stick past the second week.",
    img: articleTraining,
    alt: "Team workshop with sticky notes",
    author: { name: "Edwin Rogoi", role: "Founder, Eddy's AI Lab" },
    body: [
      { type: "p", text: "We have trained more than 3,500 leaders in person since 2022. The first thousand taught us that the standard \"intro to prompting\" workshop is almost entirely useless on day 14." },
      { type: "h2", text: "What kills adoption" },
      { type: "ul", items: [
        "Training that never touches the team's real work.",
        "One champion, no peer pressure, no rhythm.",
        "No measurable target tied to the rollout.",
        "Tools chosen before the workflow is mapped.",
      ]},
      { type: "h2", text: "What we do instead" },
      { type: "p", text: "Every cohort now ships at least one working internal workflow before day 30 — a real GPT, real prompts, real data, owned by a real person. Training is built backwards from that artifact, not forwards from a curriculum." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "If your AI training does not end with something live inside the company, you did not train, you entertained. Build the thing during the workshop." },
    ],
  },
  {
    slug: "build-vs-buy-first-ai-workflow",
    date: "Mar 02, 2026",
    read: "5 min read",
    eyebrow: "Playbook",
    title: "Build vs. buy: choosing your first AI workflow",
    lede: "Should you wire up a custom GPT, license a vertical tool, or wait? A short decision frame we use with clients in week one.",
    img: articleStrategy,
    alt: "Abstract green glass shapes",
    author: { name: "Edwin Rogoi", role: "Founder, Eddy's AI Lab" },
    body: [
      { type: "p", text: "Most teams overspend on tooling before they understand their own workflow. The right first move is almost never the shiniest SaaS in the category." },
      { type: "h2", text: "A simple three-question filter" },
      { type: "ul", items: [
        "Is the workflow already documented end-to-end? If no, buy nothing yet.",
        "Does it touch sensitive client data? If yes, lean build, not buy.",
        "Will it change in the next 90 days? If yes, prototype, do not procure.",
      ]},
      { type: "h2", text: "When buying wins" },
      { type: "p", text: "Anything horizontal — transcription, scheduling, basic copy assist. The market has already commoditised it and your internal version will not catch up." },
      { type: "h2", text: "When building wins" },
      { type: "p", text: "Anything that touches your unique data, your tone of voice, or your client trust surface. That is your moat. Do not rent it." },
    ],
  },
  {
    slug: "leading-through-the-ai-shift",
    date: "Feb 11, 2026",
    read: "4 min read",
    eyebrow: "Leadership",
    title: "Leading through the AI shift without the hype",
    lede: "Your team does not need another all-hands about AI. They need a clear position from you on three specific things.",
    img: articleChange,
    alt: "Figure in translucent coat walking",
    author: { name: "Edwin Rogoi", role: "Founder, Eddy's AI Lab" },
    body: [
      { type: "p", text: "Most leaders are still oscillating between \"AI will replace half of you\" and \"AI is just another tool.\" Both messages corrode trust. The team needs a position, not a vibe." },
      { type: "h2", text: "Three things to be explicit about" },
      { type: "ul", items: [
        "What you will and will not automate this year.",
        "How performance expectations change when AI is in the loop.",
        "Who owns review when an AI draft goes to a client.",
      ]},
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Calm, specific, written down. That is the entire leadership playbook for this shift. The companies that get this right will not be the loudest — they will be the clearest." },
    ],
  },
  {
    slug: "30-day-gpt-rollout-playbook",
    date: "Jan 22, 2026",
    read: "4 min read",
    eyebrow: "Playbook",
    title: "A 30-day rollout playbook for your first GPT in ops",
    lede: "Week-by-week, this is the rollout we use when a client wants their first internal GPT shipped without breaking anything.",
    img: articleProcess,
    alt: "Ceramic vase with dried branches",
    author: { name: "Edwin Rogoi", role: "Founder, Eddy's AI Lab" },
    body: [
      { type: "h2", text: "Week 1 — Map the workflow" },
      { type: "p", text: "Sit with the operator for a full day. Document every decision they make and every artifact they touch. No tools chosen yet." },
      { type: "h2", text: "Week 2 — Build the draft" },
      { type: "p", text: "Stand up a single GPT with the operator's own examples and language. No platform talk, no integrations, no automations." },
      { type: "h2", text: "Week 3 — Quiet pilot" },
      { type: "p", text: "Two people use it for real work. We watch where it breaks. We fix the prompt, not the team." },
      { type: "h2", text: "Week 4 — Hand off" },
      { type: "p", text: "Operator owns it. We write a one-page runbook. We come back at day 60 to measure, not to babysit." },
    ],
  },
  {
    slug: "the-culture-cost-of-ai",
    date: "Dec 05, 2025",
    read: "5 min read",
    eyebrow: "Culture",
    title: "The culture cost of AI nobody warned you about",
    lede: "The productivity numbers look good. The team is quieter than usual. Here is what we have learned about the soft cost of fast adoption.",
    img: articleCulture,
    alt: "Water droplet ripple on cream surface",
    author: { name: "Edwin Rogoi", role: "Founder, Eddy's AI Lab" },
    body: [
      { type: "p", text: "Six months in, the dashboards smile. Throughput is up, errors are down, and the Slack workspace is unusually peaceful. That last part is the warning sign." },
      { type: "h2", text: "What gets quieter" },
      { type: "ul", items: [
        "Junior questions — they ask the model first, the senior never.",
        "Cross-team banter — fewer reasons to walk over and ask.",
        "Drafts being read together — everyone arrives with a finished version.",
      ]},
      { type: "h2", text: "What to protect on purpose" },
      { type: "p", text: "Live review sessions. Pairing time. Mentorship that does not route through a chat window. The output improves on its own. The relationships do not." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "AI gives you back hours. Spend a chunk of them on the human surface of the team, on purpose, or you will wake up at month nine with a fast, lonely company." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
