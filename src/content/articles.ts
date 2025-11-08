export type ArticleSection =
  | { type: "heading2" | "heading3"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "highlightBox"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Article = {
  id: number;
  title: string;
  slug: string;
  category: string;
  categoryDisplay: string;
  author: { name: string; bio?: string; avatar?: string };
  date: string;
  readTime: string;
  excerpt: string;
  featuredImage: string;
  imageCaption?: string;
  content: { sections: ArticleSection[] };
  relatedArticles?: { title: string; slug: string }[];
  navigation?: { previous?: { title: string; slug: string }; next?: { title: string; slug: string } };
};

export const articles: Article[] = [
  // ============= ENVIRONMENT ARTICLES (6) =============
  {
    id: 1,
    title: "When A Handpump Went Dry: Narayan Ji Chaudhary's 12-Year Quest to Save Darbhanga's Ponds",
    slug: "handpump-went-dry-narayan-ji",
    category: "environment",
    categoryDisplay: "Environment",
    author: { name: "MGVP Communications", bio: "Sharing stories of impact, change, and environmental activism from Mithila, Bihar.", avatar: "M" },
    date: "March 2025",
    readTime: "8 min read",
    excerpt: "In 2005, when his office handpump ran completely dry, one man decided to fight back. His 12-year journey transformed into a national environmental movement that saved 200+ ponds and inspired thousands of people across India.",
    featuredImage: "https://imgs.mongabay.com/wp-content/uploads/sites/30/2020/10/01203834/Narayanji-Choudhary_Mongabay_1200-1200x800.jpg",
    imageCaption: "Rural water conservation: multiple ponds showcasing pond restoration and community water management.",
    content: {
      sections: [
        { type: "heading2", text: "The Story Begins: 2005" },
        { type: "paragraph", text: "In 2005, **Narayan Ji Chaudhary** faced a moment that would change the course of his life—and Darbhanga's future. His office handpump, once a reliable source of water, ran completely dry. It was a wake-up call." },
        { type: "paragraph", text: "**Darbhanga**, once home to **213 ponds**, was losing its lifeline. Illegal encroachment, pollution, and apathy had reduced this to barely functioning water bodies. Narayan Ji realized something had to change." },
        { type: "highlightBox", text: "**Key Insight:** When a man's office handpump dries up in a water-rich region, it signals a systemic crisis. This wasn't just a personal problem—it was a community survival issue." },
        { type: "heading2", text: "The Research Phase (2005-2010)" },
        { type: "paragraph", text: "He didn't start with protests or petitions. He started with **research**. He met **Rajendra Singh**, the \"Jal Purush\" (Water Man) of Rajasthan, who had successfully revived thousands of ponds. He studied their methods, learned from their successes and failures." },
        { type: "paragraph", text: "By 2010, Narayan Ji launched the **Talab Bachao Abhiyan (TBA)—a movement to save Darbhanga's ponds**. What started as one man's determination became a community movement." },
        { type: "heading2", text: "Impact Over 12 Years" },
        { type: "paragraph", text: "Over 12 years of relentless effort:" },
        { type: "list", items: ["**213 ponds** mapped and documented", "**50 ponds** completely filled or destroyed", "**200+ ponds** restored or protected", "Multiple successful **NGT (National Green Tribunal) petitions**", "**3 heritage ponds** (Dighi, Harai, Ganga Sagar) under legal protection", "**Hundreds of community members** mobilized"] },
        { type: "blockquote", text: "When my office handpump went dry in 2005, I realized if we don't save our ponds, this water-rich region will become like any other drought-stricken area in India. — Narayan Ji Chaudhary" },
        { type: "heading2", text: "The Challenge" },
        { type: "paragraph", text: "The journey wasn't easy. Multiple obstacles had to be overcome:" },
        { type: "table", headers: ["Challenge", "Impact", "Solution"], rows: [["Land Mafia Opposition", "Threatened activists", "Community mobilization + NGT support"], ["Administrative Indifference", "Slow action on violations", "Media campaigns + legal pressure"], ["Political Pressure", "Politicians sided with encroachers", "Public awareness + voter pressure"], ["Community Fatigue", "Momentum loss over time", "Celebrating small victories"]] },
        { type: "paragraph", text: "But Narayan Ji persisted, using documentation, community power, and legal mechanisms to push for change." },
        { type: "heading2", text: "Today's Reality" },
        { type: "paragraph", text: "**Talab Bachao Abhiyan is recognized nationally.** The NGT order protecting 3 ponds sets a precedent for pond conservation across India. More importantly, the movement proved that grassroots activism—when backed by data and persistence—can challenge powerful interests." },
        { type: "highlightBox", text: "**The Lesson:** Environmental change doesn't require millions of dollars. It requires passion, documentation, community trust, and refusing to give up. Narayan Ji's story teaches us that one person, with determination and strategic action, can inspire systemic change." },
        { type: "heading2", text: "What Comes Next?" },
        { type: "paragraph", text: "The fight continues. The NGT order is historic, but implementation is the real battle. Communities across Mithila are now using Narayan Ji's model to protect their own ponds. The movement that started with one man's dry handpump has become a regional call for water justice." }
      ]
    },
    relatedArticles: [
      { title: "The Numbers Behind a Crisis: How 213 Ponds Became Just 100", slug: "213-ponds-crisis" },
      { title: "NGT's Historic Order: 3 Ponds to Be Restored", slug: "ngt-pond-restoration" },
      { title: "Makhana Farmers Losing Everything", slug: "makhana-farmers-crisis" },
      { title: "Climate Crisis Hits Darbhanga: 15-Year Analysis", slug: "darbhanga-climate-analysis" }
    ]
  },

  {
    id: 2,
    title: "The Numbers Behind a Crisis: How 213 Ponds Became Just 100 in 30 Years",
    slug: "213-ponds-crisis",
    category: "environment",
    categoryDisplay: "Environment",
    author: { name: "Data Analysis Team", bio: "Investigating environmental degradation through data and documentation.", avatar: "D" },
    date: "February 2025",
    readTime: "7 min read",
    excerpt: "From 213 ponds in 1989 to barely functioning water bodies today. A data-driven investigation into what happened to Darbhanga's water infrastructure and how we can reverse it.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1757971247/pplx_project_search_images/0d45e7bff9890feb8d1a56a00cef6f5b42819fca.png",
    imageCaption: "Tree planting and environmental action: diverse community engaged in reforestation efforts together.",
    content: {
      sections: [
        { type: "heading2", text: "The Vanishing Act: 1989 to 2025" },
        { type: "paragraph", text: "In 1989-90, **Darbhanga had 213 registered ponds**. Today, less than half remain functional. What happened? How did a water-rich region lose its lifeline?" },
        { type: "heading2", text: "The Data Story" },
        { type: "table", headers: ["Metric", "Status"], rows: [["**Ponds in 1989-90**", "213"], ["**Ponds completely filled**", "50+"], ["**Ponds severely polluted**", "40+"], ["**Ponds under protection**", "3 (NGT order)"], ["**Ponds at functional capacity**", "Less than 100"], ["**Current water crisis level**", "Critical"]] },
        { type: "heading2", text: "Why Ponds Disappeared" },
        { type: "paragraph", text: "The disappearance wasn't accidental. It was systematic:" },
        { type: "list", items: ["**Illegal encroachment** by land mafia for real estate development", "**Administrative negligence** - no enforcement of preservation orders", "**Policy gaps** - no clear ownership/responsibility for common ponds", "**Population pressure** - urbanization consuming agricultural land", "**Economic incentives** - quick profits from land grabbing", "**Legal loopholes** - weak penalties for pond destruction"] },
        { type: "heading2", text: "The Hidden Cost" },
        { type: "paragraph", text: "When ponds disappeared, communities lost **more than water**:" },
        { type: "list", items: ["**Makhana cultivation at risk** (India's fox nut production center)", "**Fishing livelihoods vanished** - 85% of pond workers jobless", "**Seasonal washing/bathing grounds gone**", "**Biodiversity collapsed** - 200+ bird species, 100+ fish varieties threatened", "**Groundwater levels dropping** - handpumps going dry", "**Food security compromised** - loss of aquatic food sources"] },
        { type: "blockquote", text: "The loss of ponds isn't just an environmental issue. It's an economic, cultural, and survival crisis for rural communities. We're not just losing water—we're losing livelihoods, heritage, and hope." }
      ]
    }
  },

  {
    id: 3,
    title: "NGT's Historic Order: 3 Ponds to Be Restored—What It Means for India",
    slug: "ngt-pond-restoration",
    category: "environment",
    categoryDisplay: "Environment",
    author: { name: "Legal Affairs Team", bio: "Tracking environmental justice and policy wins in rural India.", avatar: "L" },
    date: "January 2025",
    readTime: "6 min read",
    excerpt: "The National Green Tribunal's groundbreaking decision to restore Dighi, Harai, and Ganga Sagar ponds sets a legal precedent for environmental justice across India. Here's what happens next.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1754794312/pplx_project_search_images/5c6c7299885e2146415ef0b38e6dfbb12788845e.png",
    imageCaption: "Community tree planting initiative: large group including men, women, children actively engaged.",
    content: {
      sections: [
        { type: "heading2", text: "The Landmark Order" },
        { type: "paragraph", text: "On **[date]**, the **National Green Tribunal (NGT)** issued an order that three heritage ponds in Darbhanga—**Dighi, Harai, and Ganga Sagar**—must be restored. All illegal constructions must be removed within 3 months. Embankments must be strengthened. Sewage must be diverted." },
        { type: "heading2", text: "Why This Is Historic" },
        { type: "paragraph", text: "On the surface, it sounds like environmental routine. But this is **groundbreaking**:" },
        { type: "list", items: ["**First time** NGT has intervened so specifically for pond restoration", "**Legally binding** - not just recommendations but enforceable orders", "**Sets national precedent** - other states can now cite this case", "**Emboldens communities** - citizens know they can challenge encroachments", "**Shifts burden of proof** - encroachers must justify their presence"] },
        { type: "heading2", text: "What The Order Requires" },
        { type: "table", headers: ["Requirement", "Timeline", "Responsibility"], rows: [["Remove illegal constructions", "3 months", "District Administration"], ["Restore natural embankments", "6 months", "Village Committee + MGVP"], ["Install sewage diversion", "3 months", "Municipal Corporation"], ["Quarterly monitoring meetings", "Ongoing", "NGT-appointed committee"], ["Maintenance plan development", "2 months", "Gram Panchayat"]] }
      ]
    }
  },

  {
    id: 4,
    title: "Makhana Farmers Losing Everything: How Pond Disappearance Threatens Bihar's Signature Crop",
    slug: "makhana-farmers-crisis",
    category: "environment",
    categoryDisplay: "Environment",
    author: { name: "Agriculture Correspondent", bio: "Documenting food security and agricultural livelihoods in rural Bihar.", avatar: "A" },
    date: "December 2024",
    readTime: "7 min read",
    excerpt: "Darbhanga is the world center of makhana (fox nut) production. But with ponds disappearing and climate changing, farmers face an existential threat. MGVP is fighting back.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1755324917/pplx_project_search_images/8ce535984d8e6e2e19586aae6e9300425763d588.png",
    imageCaption: "Woman farmer in agricultural field holding shovel, representing agricultural labor and farming.",
    content: {
      sections: [
        { type: "heading2", text: "When A Crop Faces Extinction" },
        { type: "paragraph", text: "Walk through Darbhanga villages, and you'll see women and men processing fox nuts—a crop that has sustained families for generations. **But 2024 has been devastating.**" },
        { type: "heading2", text: "The Crisis Metrics" },
        { type: "table", headers: ["Factor", "Status"], rows: [["Rainfall deviation", "Down 54%"], ["Ponds available for cultivation", "Declining rapidly"], ["Humidity levels", "Down 12% in 15 years"], ["Average yield", "Down 40-60%"], ["Farmer income impact", "Severe"], ["Risk level", "Critical"]] }
      ]
    }
  },

  {
    id: 5,
    title: "Climate Crisis Hits Darbhanga: 15-Year Analysis of Rising Temperatures and Falling Rain",
    slug: "darbhanga-climate-analysis",
    category: "environment",
    categoryDisplay: "Environment",
    author: { name: "Climate Research Unit", bio: "Analyzing climate patterns and environmental shifts in rural Bihar.", avatar: "C" },
    date: "November 2024",
    readTime: "8 min read",
    excerpt: "New data reveals the stark reality: Darbhanga's climate is changing faster than anywhere else in Bihar. Temperature up 0.3°C, rainfall down 54%, humidity down 12%. Here's what it means.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1757341702/pplx_project_search_images/35f01ab9df8ad115c897f36191b246700ecdbae7.png",
    imageCaption: "Climate-smart irrigation: farmer with modern sprinkler system watering agricultural crops.",
    content: {
      sections: [
        { type: "heading2", text: "Climate Change Isn't Coming—It's Here" },
        { type: "paragraph", text: "**Climate change isn't coming to Darbhanga. It's already here.** A comprehensive 15-year analysis (2009-2024) reveals alarming trends that demand immediate attention." }
      ]
    }
  },

  {
    id: 6,
    title: "Agroforestry Revolution: How Farmers Are Sequestering CO2 While Tripling Their Income",
    slug: "agroforestry-revolution-bihar",
    category: "environment",
    categoryDisplay: "Environment",
    author: { name: "Agricultural Development", bio: "Tracking sustainable farming practices and climate-smart agriculture in Bihar.", avatar: "A" },
    date: "October 2024",
    readTime: "8 min read",
    excerpt: "25 tons of CO2 per hectare sequestered annually. ₹25,000+ additional income per farmer. Agroforestry in Bihar is both climate solution and livelihood booster for thousands.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1754710961/pplx_project_search_images/eae85b67d4c4a5380a1f57f98132a5d6388af748.png",
    imageCaption: "Woman farmer in sustainable agriculture: tending soil in raised bed with green structures visible.",
    content: {
      sections: [
        { type: "heading2", text: "Agroforestry: More Than Planting Trees" },
        { type: "paragraph", text: "**Agroforestry sounds technical.** But farmers know it simply: **Plant trees on farmland. Get more income. Help the climate.** **And it works.**" }
      ]
    }
  },

  // ============= WOMEN EMPOWERMENT ARTICLES (6) =============
  {
    id: 7,
    title: "From Invisible to Unstoppable: How 20,000 Bihar Women Found Voice Through Madhubani Art",
    slug: "madhubani-women-20000-empowered",
    category: "women",
    categoryDisplay: "Women",
    author: { name: "Women's Empowerment Team", bio: "Documenting economic independence and artistic revival of rural Bihar women.", avatar: "W" },
    date: "September 2024",
    readTime: "8 min read",
    excerpt: "20,000 women now earn dignified income from Madhubani painting. They were once voiceless. Today, they're leading. Here's their story of economic empowerment and cultural revival.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1760113618/pplx_project_search_images/0a1c96e107d93c87d86a5c51626b9c4979e9f219.png",
    imageCaption: "Women artisans at craft collective: working on traditional crafts with sewing machines in warm setting.",
    content: {
      sections: [
        { type: "heading2", text: "Madhubani Art: Ancient, Yet Transforming" },
        { type: "paragraph", text: "**Madhubani art is ancient.** But for most of its history, women created it—and invisible men sold it, taking profits. **That's changing.** Now women are reclaiming their art, their craft, and their income." }
      ]
    }
  },

  {
    id: 8,
    title: "The SHG Revolution: How Self-Help Groups Are Rewriting Bihar Women's Economic Story",
    slug: "shg-revolution-bihar",
    category: "women",
    categoryDisplay: "Women",
    author: { name: "Microfinance & Development", bio: "Analyzing grassroots financial inclusion and economic empowerment in rural Bihar.", avatar: "M" },
    date: "August 2024",
    readTime: "7 min read",
    excerpt: "12 million Bihar women are now part of self-help groups. These grassroots collectives have distributed ₹12,200 crores in loans since pandemic. Here's how collective economics is transforming rural lives.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1758169358/pplx_project_search_images/5803bcd17a8af59037690a48bdc445f5ae72a2a7.png",
    imageCaption: "Self-help group meeting: women in traditional sarees gathered in circle discussing savings plan.",
    content: {
      sections: [
        { type: "heading2", text: "When Women Organize, Everything Changes" },
        { type: "paragraph", text: "**Walk into any village in Bihar, and you'll find them:** Groups of 15-20 women sitting together weekly, saving money collectively, lending to each other, making decisions together. **These are Self-Help Groups (SHGs). And they're quietly revolutionizing rural Bihar.**" }
      ]
    }
  },

  {
    id: 9,
    title: "Breaking Gender Barriers: How MGVP's Training Programs Created 500+ Women Leaders",
    slug: "women-leaders-500",
    category: "women",
    categoryDisplay: "Women",
    author: { name: "Community Development", bio: "Tracking women's leadership and community participation in rural development.", avatar: "C" },
    date: "July 2024",
    readTime: "8 min read",
    excerpt: "Skills training isn't just about income. It's about dignity, leadership, and challenging patriarchy. Meet 500+ women who transformed their futures and their communities.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1758183801/pplx_project_search_images/da0465501d2517d674be22369d329e8bc011ec12.png",
    imageCaption: "Women empowerment illustration: diverse women standing confidently representing leadership.",
    content: {
      sections: [
        { type: "heading2", text: "Skills Training: Catalyst for Transformation" },
        { type: "paragraph", text: "**Anita wasn't supposed to work.** In her village, women stayed home. Period." }
      ]
    }
  },

  {
    id: 10,
    title: "The Widow's Courage: How Ramkali Refused to Accept Poverty and Built a Business",
    slug: "ramkali-widow-story",
    category: "women",
    categoryDisplay: "Women",
    author: { name: "Community Stories", bio: "Documenting resilience and courage of women overcoming adversity.", avatar: "S" },
    date: "June 2024",
    readTime: "6 min read",
    excerpt: "When Ramkali's husband died, she had 2 children, no income, and society told her it was over. Today, she runs a thriving business and is teaching other widows. Her story of courage.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1755529320/pplx_project_search_images/b9467fb2e788546d79ed4d78ce68de322836d97f.png",
    imageCaption: "Woman artisan standing confidently with traditional crafted textile, representing entrepreneurship.",
    content: {
      sections: [
        { type: "heading2", text: "When Society Says 'No', She Said 'Yes'" },
        { type: "paragraph", text: "**Ramkali was a widow** in a society that doesn't know what to do with widows." }
      ]
    }
  },

  {
    id: 11,
    title: "Women's Collective Power: How 300 Women Farmers Changed District Policy on Water Rights",
    slug: "women-water-rights",
    category: "women",
    categoryDisplay: "Women",
    author: { name: "Women's Rights Advocate", bio: "Documenting grassroots advocacy and policy change led by women.", avatar: "R" },
    date: "May 2024",
    readTime: "7 min read",
    excerpt: "When individual women advocate, they're dismissed. When 300 women demand change, government listens. How collective power forced district-level policy shift on water access.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1755781224/pplx_project_search_images/d8e015038587f5b7a8fd611753dadb42afe1e08f.png",
    imageCaption: "Women farmers handling harvest: packing corn kernels in traditional agricultural work.",
    content: {
      sections: [
        { type: "heading2", text: "Individual Woman ≠ Power. Collective Women = Change" }
      ]
    }
  },

  // ============= CHILDREN EDUCATION ARTICLES (4) =============
  {
    id: 12,
    title: "Malnutrition Crisis: How 1 Village Went From 173 Sick Children to 80% Recovery in One Year",
    slug: "malnutrition-village-recovery",
    category: "children",
    categoryDisplay: "Children",
    author: { name: "Health & Nutrition Team", bio: "Tracking health outcomes and nutrition programs across rural MGVP communities.", avatar: "H" },
    date: "April 2024",
    readTime: "7 min read",
    excerpt: "Real data from rural Bihar: One village screened 173 malnourished children. Through comprehensive nutrition program, 80%+ achieved recovery in just one year. Here's what worked.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1761648814/pplx_project_search_images/4f9aed40d4180c8a9dd8728eed41224d8ec1970f.png",
    imageCaption: "Community nutrition program: children receiving meal support from health worker outdoors.",
    content: {
      sections: [
        { type: "heading2", text: "The Crisis Hidden in Plain Sight" }
      ]
    }
  },

  {
    id: 13,
    title: "When School Meant Sitting on Floor: How One Renovation Changed 200+ Children's Lives",
    slug: "school-renovation",
    category: "children",
    categoryDisplay: "Children",
    author: { name: "Education Team", bio: "Documenting school improvements and educational transformation in rural schools.", avatar: "E" },
    date: "March 2024",
    readTime: "6 min read",
    excerpt: "A dilapidated village school with leaking roof and no desks. MGVP helped transform it into a model learning center. Attendance up 40%, test scores doubled.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1754935992/pplx_project_search_images/a1f6160d4c0b4cd523a49851aed990a208e1d21b.png",
    imageCaption: "Traditional school classroom: girls learning in circle on floor in rustic setting.",
    content: {
      sections: [
        { type: "heading2", text: "The School: A Shell" }
      ]
    }
  },

  {
    id: 14,
    title: "Breaking The Cycle: How Scholarships Created First College Students in Three Families",
    slug: "scholarship-stories",
    category: "children",
    categoryDisplay: "Children",
    author: { name: "Scholarship Team", bio: "Supporting first-generation college students through education programs.", avatar: "S" },
    date: "February 2024",
    readTime: "7 min read",
    excerpt: "Scholarships aren't just money. They're possibility. Meet Rajesh, Priya, and Arun—first college students in their families because MGVP believed in them.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1755781194/pplx_project_search_images/770692e8b0465d804318b39bf0d3b64c6f29ffb9.png",
    imageCaption: "Rural family with health worker: women and baby at home receiving health program support.",
    content: {
      sections: [
        { type: "heading2", text: "Rajesh's Story: Breaking Poverty" }
      ]
    }
  },

  {
    id: 15,
    title: "Literacy Beyond School: How MGVP's After-School Program Created 300+ Proficient Readers",
    slug: "literacy-program",
    category: "children",
    categoryDisplay: "Children",
    author: { name: "Education Initiative", bio: "Documenting literacy and foundational learning outcomes in rural schools.", avatar: "L" },
    date: "January 2024",
    readTime: "6 min read",
    excerpt: "Many rural children attend school but don't learn to read. MGVP's targeted literacy program took 300+ children from non-readers to proficient readers within 18 months.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1762644048/pplx_project_search_images/a1567c8010a41962f1803c0380124d0b6dec37c9.png",
    imageCaption: "Girls in school uniforms at desks: positive classroom environment with engaged students.",
    content: {
      sections: [
        { type: "heading2", text: "The Silent Crisis: Children in School But Not Learning" }
      ]
    }
  },

  // ============= COMMUNITY ARTICLES (5) =============
  {
    id: 16,
    title: "The Village That Said 'No': How Collective Resistance Stopped Illegal Pond Encroachment",
    slug: "village-resistance-encroachment",
    category: "community",
    categoryDisplay: "Community",
    author: { name: "Community Correspondent", bio: "Documenting grassroots activism and collective resistance to environmental destruction.", avatar: "C" },
    date: "December 2023",
    readTime: "7 min read",
    excerpt: "One village faced pressure to allow pond encroachment for ₹20 lakhs compensation. Instead, they organized, documented, and said no. Their collective courage inspired 5 neighboring villages to do the same.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1757227787/pplx_project_search_images/c925a9f7bfa49f98188dabf94ded843faa24454a.png",
    imageCaption: "Village community gathering: diverse group including elders in traditional dress discussing.",
    content: {
      sections: [
        { type: "heading2", text: "When Community Unites, Power Backs Down" }
      ]
    }
  },

  {
    id: 17,
    title: "From Conflict to Collaboration: How 3 Castes United to Manage a Shared Pond",
    slug: "inter-caste-pond-collaboration",
    category: "community",
    categoryDisplay: "Community",
    author: { name: "Social Cohesion Team", bio: "Documenting grassroots conflict resolution and social integration.", avatar: "S" },
    date: "November 2023",
    readTime: "8 min read",
    excerpt: "Caste divisions run deep in villages. But when a pond needed restoration, 3 different caste communities worked together. The result: Resource security AND social cohesion.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1756287835/pplx_project_search_images/86eea7473dc7ceae8072283012200d8c1e55cd8d.png",
    imageCaption: "Community meeting: diverse villagers seated in circle on mats discussing collectively.",
    content: {
      sections: [
        { type: "heading2", text: "When Caste Hierarchy Met Shared Crisis" }
      ]
    }
  },

  {
    id: 18,
    title: "Inter-Village Learning: How Communities Learn From Each Other's Successes",
    slug: "inter-village-learning",
    category: "community",
    categoryDisplay: "Community",
    author: { name: "Learning & Exchange", bio: "Documenting peer-to-peer learning and knowledge transfer between communities.", avatar: "L" },
    date: "October 2023",
    readTime: "7 min read",
    excerpt: "Instead of isolated villages, MGVP connects them for learning. When one village succeeds, others study, adapt, implement. Exponential learning and faster change.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1754812606/pplx_project_search_images/6979c7227b7dcc5b579ce4ec99c3e1495bb498a4.png",
    imageCaption: "Farmers in agricultural field: holding baskets of harvested red chili peppers at harvest.",
    content: {
      sections: [
        { type: "heading2", text: "Villages Learn Faster Together" }
      ]
    }
  },

  {
    id: 19,
    title: "Community Monitoring: When Villages Became Watchdogs Against Corruption",
    slug: "community-monitoring",
    category: "community",
    categoryDisplay: "Community",
    author: { name: "Accountability & Transparency", bio: "Documenting community oversight and anti-corruption mechanisms.", avatar: "A" },
    date: "September 2023",
    readTime: "7 min read",
    excerpt: "Government schemes often fail because nobody monitors. MGVP trained communities to monitor themselves. Corruption dropped 70%. Service quality improved dramatically.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1759640187/pplx_project_search_images/98eb3ca74f7edd9c58908ddfc4474a8fe357d5b3.png",
    imageCaption: "Rural family health program: mother holding baby with children at home with health materials.",
    content: {
      sections: [
        { type: "heading2", text: "The Problem: Government Schemes Fail in Implementation" }
      ]
    }
  },

  {
    id: 20,
    title: "Youth Leading Conservation: How Teenagers Became Environmental Stewards",
    slug: "youth-environmental-leaders",
    category: "community",
    categoryDisplay: "Community",
    author: { name: "Youth Programs", bio: "Supporting youth leadership and environmental activism in rural communities.", avatar: "Y" },
    date: "August 2023",
    readTime: "6 min read",
    excerpt: "Young people take charge of pond cleaning drives, demonstrating that environmental stewardship knows no age. Their leadership is inspiring entire villages.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1754932631/pplx_project_search_images/7daf128c2c61eef4725d951ef557fb1d8b05d566.png",
    imageCaption: "Community tree planting: diverse group including children actively planting seedlings.",
    content: {
      sections: [
        { type: "heading2", text: "When Teenagers Lead, Adults Follow" }
      ]
    }
  },

  // ============= IMPACT ARTICLES (4) =============
  {
    id: 21,
    title: "Beyond Numbers: Why Impact Metrics Matter—MGVP's Data Transparency Model",
    slug: "impact-metrics-transparency",
    category: "impact",
    categoryDisplay: "Impact",
    author: { name: "Impact & Evaluation", bio: "Measuring real outcomes and ensuring accountability in development work.", avatar: "I" },
    date: "July 2023",
    readTime: "7 min read",
    excerpt: "How do NGOs prove they're creating real change? MGVP's radical transparency approach measures impact rigorously, shares data openly, and lets communities verify results.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1755447144/pplx_project_search_images/7eb1819f4c86c26b18197b990dcbfa6920d71220.png",
    imageCaption: "Girls in classroom with tablets and learning materials with teacher and educational charts.",
    content: {
      sections: [
        { type: "heading2", text: "The Problem: Inflated Impact Claims" }
      ]
    }
  },

  {
    id: 22,
    title: "What Real Empowerment Looks Like: Beyond Income to Dignity and Agency",
    slug: "empowerment-definition",
    category: "impact",
    categoryDisplay: "Impact",
    author: { name: "Research & Learning", bio: "Defining and measuring genuine empowerment in development programs.", avatar: "R" },
    date: "June 2023",
    readTime: "7 min read",
    excerpt: "Income matters. But it's not empowerment. Real empowerment means decision-making authority, confidence, and dignity. Here's how MGVP measures it.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1756965002/pplx_project_search_images/dc06534268d874039506524ff4195664865e7562.png",
    imageCaption: "Girls in school uniforms learning on floor: teacher pointing at blackboard with language lessons.",
    content: {
      sections: [
        { type: "heading2", text: "The False Equation: Income = Empowerment" }
      ]
    }
  },

  {
    id: 23,
    title: "The Cost of Inaction: What Happens Without Intervention (Comparative Study)",
    slug: "cost-of-inaction",
    category: "impact",
    categoryDisplay: "Impact",
    author: { name: "Comparative Analysis", bio: "Analyzing development outcomes in intervention vs. non-intervention regions.", avatar: "C" },
    date: "May 2023",
    readTime: "8 min read",
    excerpt: "Compare two similar districts: One with active NGOs, one without. The differences are stark. Here's what non-intervention actually costs.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1754710961/pplx_project_search_images/eae85b67d4c4a5380a1f57f98132a5d6388af748.png",
    imageCaption: "Woman in sustainable agriculture: tending raised bed with green farming structures.",
    content: {
      sections: [
        { type: "heading2", text: "Two Similar Districts. Opposite Outcomes." }
      ]
    }
  },

  {
    id: 24,
    title: "Defining Success: How MGVP Sets Goals That Matter",
    slug: "defining-success",
    category: "impact",
    categoryDisplay: "Impact",
    author: { name: "Strategic Planning", bio: "Setting vision and measuring progress toward sustainable development.", avatar: "S" },
    date: "April 2023",
    readTime: "6 min read",
    excerpt: "Success isn't vague. It's measurable, achievable, and owned by communities. Here's how MGVP defines and pursues real, lasting change.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1755781224/pplx_project_search_images/d8e015038587f5b7a8fd611753dadb42afe1e08f.png",
    imageCaption: "Women farmers working together: packing harvested crops in organized agricultural work.",
    content: {
      sections: [
        { type: "heading2", text: "Success Isn't Vague" }
      ]
    }
  },

  {
    id: 25,
    title: "Building for Tomorrow: MGVP's 2030 Vision for Sustainable Mithila",
    slug: "mithila-2030-vision",
    category: "impact",
    categoryDisplay: "Impact",
    author: { name: "Strategic Vision", bio: "Envisioning long-term sustainable transformation of Mithila region.", avatar: "V" },
    date: "March 2023",
    readTime: "8 min read",
    excerpt: "By 2030, what does a thriving Mithila look like? MGVP's strategic vision: 300 restored ponds, 50,000 women empowered, water-secure villages, climate-resilient communities.",
    featuredImage: "https://pplx-res.cloudinary.com/image/upload/v1754929896/pplx_project_search_images/64ef77bf0afd77c00ec903507bfcc7aa09160f3a.png",
    imageCaption: "Women artisans painting traditional fabric: three women creating traditional artistic motifs.",
    content: {
      sections: [
        { type: "heading2", text: "Imagine Mithila in 2030" }
      ]
    }
  }
];

export function getArticleBySlug(slug: string) {
  // Exact match first
  const exact = articles.find((a) => a.slug === slug);
  if (exact) return exact;

  // Try tolerant matching: slug startsWith or includes (handles short/long variants)
  const starts = articles.find((a) => a.slug.startsWith(slug));
  if (starts) {
    console.warn(`[articles] Fallback: matched slug start for "${slug}" -> "${starts.slug}"`);
    return starts;
  }
  const includes = articles.find((a) => a.slug.includes(slug));
  if (includes) {
    console.warn(`[articles] Fallback: matched slug include for "${slug}" -> "${includes.slug}"`);
    return includes;
  }

  // Normalize helper: lower-case, replace non-alphanumerics with '-' and trim
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const target = normalize(slug);
  const byNormalized = articles.find((a) => normalize(a.slug) === target || normalize(a.title).includes(target));
  if (byNormalized) {
    console.warn(`[articles] Fallback: matched normalized title/slug for "${slug}" -> "${byNormalized.slug}"`);
    return byNormalized;
  }

  // Nothing found
  return undefined;
}

export function listArticleSummaries() {
  return articles.map((a) => ({ 
    id: a.id, 
    title: a.title, 
    excerpt: a.excerpt, 
    slug: a.slug, 
    categoryDisplay: a.categoryDisplay, 
    category: a.category,
    featuredImage: a.featuredImage, 
    author: a.author.name, 
    date: a.date, 
    readTime: a.readTime 
  }));
}

export function getArticlesByCategory(category: string) {
  return articles.filter((a) => a.category === category);
}