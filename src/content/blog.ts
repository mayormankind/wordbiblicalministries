export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
  readTime: string;
  seoDescription: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-scripture-rooted-ministry-still-matters",
    title: "Why Scripture-Rooted Ministry Still Matters",
    excerpt:
      "A ministry remains fruitful when prayer, doctrine, and faithful exposition stay at the center rather than the margins.",
    category: "Ministry",
    publishedAt: "2026-04-15",
    author: "Word Biblical Ministries",
    readTime: "5 min read",
    seoDescription:
      "A reflection on why prayer, doctrine, and faithful exposition remain central to healthy Christian ministry.",
    content: [
      "Healthy ministry does not begin with trends. It begins with submission to the Word of God and dependence on the Spirit of God. When Scripture sets the agenda, the Church is strengthened in ways that are durable, pastoral, and deeply Christ-centered.",
      "A Scripture-rooted ministry forms believers who can endure difficulty, resist confusion, and grow in maturity. It does not merely create excitement for a moment. It builds conviction, worship, and obedience over time.",
      "This is why WBM is committed to prayer, translation, commentary, and theological clarity. Each of these labors serves the same goal: helping the people of God hear the voice of God faithfully and respond to Him with humble trust.",
    ],
  },
  {
    slug: "how-afint-serves-churches-and-students",
    title: "How AFINT Serves Churches and Students",
    excerpt:
      "AFINT is designed to support careful study, discipleship, and faithful teaching across churches, seminaries, and campus fellowships.",
    category: "AFINT",
    publishedAt: "2026-04-15",
    author: "Word Biblical Ministries",
    readTime: "4 min read",
    seoDescription:
      "How the African International New Testament supports local churches, theological institutions, and campus ministries.",
    content: [
      "AFINT exists to provide a trustworthy English rendering of the Greek New Testament that is both accurate and readable. Its value is practical as well as scholarly, making it useful for pastors, students, and Bible study leaders alike.",
      "For churches, it supports preaching, discipleship, and congregational understanding. For theological institutions, it offers a reliable companion for exegesis and translation study. For campus fellowships, it helps student leaders teach with greater confidence and clarity.",
      "This combination of textual fidelity and accessibility is part of what makes AFINT a meaningful long-term ministry project. It aims to serve the global Church while reflecting the growing contribution of African biblical scholarship.",
    ],
  },
  {
    slug: "building-a-blog-for-discipleship-and-seo",
    title: "Building a Blog for Discipleship and SEO",
    excerpt:
      "A ministry blog can serve both search visibility and pastoral formation when it publishes useful, substantive, evergreen content.",
    category: "Strategy",
    publishedAt: "2026-04-15",
    author: "Word Biblical Ministries",
    readTime: "6 min read",
    seoDescription:
      "Why a ministry blog is valuable for both Christian discipleship and long-term organic search growth.",
    content: [
      "A blog gives this ministry a steady way to publish teaching, updates, devotional reflections, and theological articles that answer real questions people search for online. That makes it both a discipleship tool and an SEO asset.",
      "Next.js is a good fit for this because each article can have its own metadata, clean URL, and server-rendered output. Search engines can understand the content more clearly, and visitors can land directly on posts that answer their needs.",
      "The best ministry blog strategy is not to publish for volume alone. It is to publish carefully chosen articles that are biblically sound, pastorally helpful, and organized around the real themes the ministry wants to be known for.",
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
