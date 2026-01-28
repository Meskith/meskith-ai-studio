export interface ResourceContent {
  id: string;
  title: string;
  tag: string;
  readTime: string;
  quickStart: string[];
  sections: {
    title: string;
    type: 'steps' | 'checklist' | 'bullets' | 'examples';
    items: string[];
  }[];
  commonMistakes: string[];
  proTips?: string[];
  nextAction: string;
}

export const resourceContents: Record<string, ResourceContent> = {
  "market-localization-playbook": {
    id: "market-localization-playbook",
    title: "Market Localization Playbook",
    tag: "Playbook",
    readTime: "7 min read",
    quickStart: [
      "Start with your best-performing ad from any market—this becomes your 'control' variant",
      "Identify the 3 cultural signals that matter most in your target market (language nuance, visual context, offer framing)",
      "Generate localized variants using the 7-step framework below, then test against your control"
    ],
    sections: [
      {
        title: "7-Step Localization Framework",
        type: "steps",
        items: [
          "Define the Outcome — What action do you want the viewer to take? Be specific: 'Sign up for free trial' not 'engage with brand'. The outcome stays constant across markets; only the path changes.",
          "Extract Brand DNA — Pull your non-negotiables: voice tone, visual style, value props, proof points. These anchor every variant. If your brand is 'premium and minimal', a Kenya variant can't suddenly feel 'loud and cluttered'.",
          "Map Market Signals — Research what resonates locally. Language patterns (formal vs casual), visual preferences (lifestyle vs product-focused), trust triggers (testimonials vs certifications), and timing (paydays, holidays, cultural moments).",
          "Adapt the Message — Rewrite headlines and body copy using local idioms without losing meaning. 'Save time' might become 'Get hours back' in one market or 'Work smarter' in another. Test hooks that reference local context.",
          "Localize Creative Direction — Adjust imagery, color emphasis, and layout. UAE audiences may respond better to aspirational lifestyle shots; Kenya audiences may prefer relatable, community-focused visuals; Canada may need bilingual considerations.",
          "Calibrate Offer Mechanics — Adapt pricing display (USD vs local currency), payment options (M-Pesa for Kenya, Apple Pay for UAE), urgency framing ('Limited spots' vs 'Exclusive access'), and bundle structures.",
          "QA and Ship — Run every variant through the Ad Creative QA Checklist. Verify brand consistency, offer clarity, and cultural appropriateness. Get a local reviewer if possible. Then publish and monitor performance for 72 hours before optimizing."
        ]
      },
      {
        title: "Market Signals Cheat Sheet",
        type: "examples",
        items: [
          "KENYA — Language: English with Swahili phrases for warmth ('Karibu', 'Sawa'). Trust: Community proof ('Join 10,000+ Kenyans'), local testimonials, M-Pesa badges. Visuals: Warm colors, real people, urban Nairobi or aspirational scenes. Timing: Month-end paydays, back-to-school (Jan/Sept), festive season (Dec). Offers: Installment plans, mobile money discounts, bundle deals.",
          "UAE — Language: English primary, Arabic for premium/heritage brands. Trust: Luxury associations, international certifications, influencer endorsements. Visuals: Clean, aspirational, high production value, gold/black accents. Timing: Ramadan, Eid, National Day (Dec 2), summer sales. Offers: Premium positioning, exclusive access, fast delivery emphasis.",
          "CANADA — Language: English/French (Quebec requires French). Trust: Privacy compliance (PIPEDA), Canadian-owned badges, sustainability claims. Visuals: Diverse representation, four-season imagery, clean and professional. Timing: Back-to-school (Sept), Black Friday, Boxing Day, summer (June-Aug). Offers: Free shipping thresholds, loyalty programs, subscription options."
        ]
      },
      {
        title: "Pre-Launch Checklist",
        type: "checklist",
        items: [
          "Control variant identified and documented",
          "Brand DNA extracted (voice, visuals, values)",
          "Market signals researched for target region",
          "Headlines rewritten with local context",
          "Creative direction adjusted for cultural fit",
          "Pricing and payment methods localized",
          "Offer urgency calibrated for market",
          "QA checklist completed",
          "Local reviewer approved (if available)",
          "Performance tracking set up"
        ]
      },
      {
        title: "Example: Fitness App Variants",
        type: "examples",
        items: [
          "KENYA VARIANT — Hook: 'Train like a champion—anywhere in Nairobi.' Benefit: 'No gym? No problem. 500+ home workouts designed for your schedule.' Proof: 'Join 15,000+ Kenyans getting fit at home.' CTA: 'Start free—pay with M-Pesa.' Creative: Warm lighting, diverse body types, Nairobi skyline in background, Swahili accent phrase.",
          "UAE VARIANT — Hook: 'Luxury fitness meets convenience.' Benefit: 'World-class trainers. Premium programs. Results that match your lifestyle.' Proof: 'Trusted by 5,000+ professionals across Dubai and Abu Dhabi.' CTA: 'Start your exclusive trial.' Creative: High-end aesthetic, sleek UI preview, aspirational body imagery, gold accent colors.",
          "CANADA VARIANT — Hook: 'Your workout. Your way. Anywhere in Canada.' Benefit: 'From Vancouver to Montreal—500+ workouts for every season, every goal.' Proof: 'Rated #1 fitness app by Canadian users.' CTA: 'Try free for 14 days.' Creative: Four-season imagery, diverse representation, clean typography, bilingual CTA option."
        ]
      }
    ],
    commonMistakes: [
      "Direct translation without cultural adaptation — 'Limited time offer' translated literally may not create urgency in markets where scarcity framing feels aggressive",
      "Using the same imagery across all markets — Stock photos that feel 'American' won't resonate in Kenya or UAE",
      "Ignoring local payment preferences — Not offering M-Pesa in Kenya or Apple Pay in UAE creates friction",
      "Over-localizing to the point of losing brand identity — Every variant should still feel like the same brand",
      "Skipping local QA — What seems fine to you may be culturally tone-deaf or grammatically awkward"
    ],
    proTips: [
      "Build a 'Golden Kit' of your best-performing assets (headlines, images, CTAs) and localize from that—don't start from scratch each time",
      "Test one variable at a time (headline, image, or offer) so you know what's actually driving performance differences",
      "Create a market-specific swipe file by saving ads from local competitors and successful brands in each region"
    ],
    nextAction: "Log in and generate 3 localized variants for your best-performing ad—one for Kenya, one for UAE, and one for Canada."
  },

  "brand-vault-setup-guide": {
    id: "brand-vault-setup-guide",
    title: "Brand Vault Setup Guide",
    tag: "Playbook",
    readTime: "6 min read",
    quickStart: [
      "Gather your existing brand assets: logo files, color codes, fonts, tone guidelines, and 5-10 best-performing ads",
      "Create five core sections in your vault: Brand DNA, Visual System, Content Library, Offer Library, and Restrictions",
      "Upload and tag everything so the AI can pull the right assets when generating variants"
    ],
    sections: [
      {
        title: "What Goes in the Brand Vault",
        type: "bullets",
        items: [
          "BRAND DNA — Your mission statement (one sentence), core value propositions (3-5 max), brand voice description (formal/casual, bold/understated, technical/accessible), personality traits (3 adjectives), and key differentiators from competitors.",
          "VISUAL SYSTEM — Primary and secondary logos (PNG, SVG), color palette with hex/HSL codes, typography (primary and secondary fonts), photography style guidelines, iconography style, and layout preferences (minimal vs dense, symmetrical vs dynamic).",
          "CONTENT LIBRARY — Best-performing headlines (tagged by market and platform), proven hooks and openers, benefit statements that convert, CTAs that work, testimonials and social proof snippets, and product descriptions.",
          "OFFER LIBRARY — Pricing structures by market, discount frameworks (percentage vs fixed), bundle configurations, urgency phrases that work, guarantee language, and payment method messaging.",
          "RESTRICTIONS — Words and phrases to never use, visual elements to avoid, competitor mentions policy, compliance requirements by market, and cultural sensitivities by region."
        ]
      },
      {
        title: "6-Step Setup Process",
        type: "steps",
        items: [
          "Audit Existing Assets — Collect everything you have: brand guidelines, ad libraries, campaign reports, creative briefs. Don't worry about organization yet—just gather.",
          "Define Brand DNA — Write or refine your one-sentence mission, 3-5 value props, and voice description. If you don't have these, draft them now. Be specific: 'We help busy professionals' is better than 'We help everyone'.",
          "Build Your Visual System — Upload logo variations, document exact color codes, specify fonts with weights, and add 5-10 reference images that capture your visual style. Include both 'do' and 'don't' examples.",
          "Populate Content Library — Tag your top 20 headlines, hooks, and CTAs by performance, market, and platform. Add context: 'This headline got 3x CTR in Kenya on Facebook' helps the AI learn patterns.",
          "Document Offer Structures — List every pricing tier, discount type, and bundle you've used. Note what worked where: 'M-Pesa discount increased Kenya conversions by 40%.'",
          "Set Restrictions — List banned words, forbidden imagery, compliance rules, and cultural no-gos. Be explicit: 'Never use red as primary color in UAE luxury campaigns' is more useful than 'Be culturally sensitive'."
        ]
      },
      {
        title: "Brand Rules Examples (Copy/Paste Ready)",
        type: "examples",
        items: [
          "VOICE RULES — DO: Use contractions (we're, you'll) for warmth. DO: Lead with benefits, not features. DO: Keep sentences under 20 words. DON'T: Use jargon without explanation. DON'T: Make promises we can't verify. DON'T: Use exclamation marks in headlines.",
          "VISUAL RULES — DO: Use photography with natural lighting. DO: Show real people, not stock models. DO: Maintain 40% whitespace minimum. DON'T: Use gradients on text. DON'T: Combine more than 3 colors per asset. DON'T: Use imagery that feels 'American' for non-US markets.",
          "OFFER RULES — DO: Display local currency with proper formatting. DO: Include payment method badges. DO: State guarantee terms clearly. DON'T: Use fake urgency ('Only 3 left!'). DON'T: Hide terms in fine print. DON'T: Discount more than 30% on premium products."
        ]
      },
      {
        title: "Folder & Tag Organization",
        type: "checklist",
        items: [
          "Create market folders: Global, Kenya, UAE, Canada",
          "Create asset type folders: Logos, Colors, Fonts, Images, Copy, Offers",
          "Tag by performance: High-performer, Tested, Untested",
          "Tag by platform: Facebook, Instagram, Google, TikTok, Email",
          "Tag by campaign type: Awareness, Consideration, Conversion",
          "Tag by season/timing: Evergreen, Ramadan, Holiday, Back-to-school",
          "Add status tags: Approved, Draft, Archived",
          "Document last-updated dates for each major section"
        ]
      },
      {
        title: "Market Notes Examples",
        type: "examples",
        items: [
          "KENYA NOTES — Primary language: English with optional Swahili warmth phrases. Currency: KES (display as 'KSh 1,500'). Payment: M-Pesa required, card optional. Trust signals: Local testimonials, 'Join X Kenyans' proof. Restricted: Avoid imagery that feels 'Western' or disconnected from local context.",
          "UAE NOTES — Primary language: English, Arabic for heritage/luxury positioning. Currency: AED (display as 'AED 500'). Payment: Apple Pay, credit cards, BNPL options. Trust signals: Premium associations, international certifications. Restricted: Modest imagery, no alcohol references, Ramadan-sensitive scheduling.",
          "CANADA NOTES — Primary language: English (French required for Quebec). Currency: CAD (display as 'CA$50'). Payment: Credit, debit, PayPal. Trust signals: Canadian-owned badges, privacy compliance, sustainability. Restricted: Must comply with CASL for email, bilingual requirements for Quebec."
        ]
      }
    ],
    commonMistakes: [
      "Uploading assets without tagging — Untagged content is unfindable content; the AI can't use what it can't identify",
      "Writing vague brand voice descriptions — 'Friendly and professional' describes 90% of brands; be specific about what makes you different",
      "Forgetting to update the vault — Brand assets evolve; schedule quarterly vault audits",
      "Storing only final assets — Include context: why this worked, where it was used, what it beat",
      "Ignoring market-specific restrictions — What's acceptable in one market may be offensive or illegal in another"
    ],
    proTips: [
      "Start with your 'Golden Kit': the 5 best-performing assets from each category. Quality beats quantity for training the AI.",
      "Record a 2-minute voice memo describing your brand personality, then transcribe it—this often captures voice better than written guidelines.",
      "Create a 'Kill List' of specific words, phrases, and visual elements that competitors use but you explicitly avoid."
    ],
    nextAction: "Log in and build your Golden Kit—upload your top 5 headlines, 5 images, and 5 CTAs to get started."
  },

  "ad-creative-qa-checklist": {
    id: "ad-creative-qa-checklist",
    title: "Ad Creative QA Checklist",
    tag: "Checklist",
    readTime: "4 min read",
    quickStart: [
      "Run every ad variant through all 6 checklist sections before publishing",
      "Use the 5-second test: show the ad to someone for 5 seconds, then ask what it's about and what action to take",
      "For localized variants, always get a native speaker review for the target market"
    ],
    sections: [
      {
        title: "5-Second Clarity Test",
        type: "checklist",
        items: [
          "The main benefit is immediately clear without reading everything",
          "The viewer knows what product/service is being offered",
          "The call-to-action is visible and unambiguous",
          "There's only one primary message (not competing messages)",
          "The visual hierarchy guides the eye correctly: headline → benefit → CTA",
          "Someone unfamiliar with the brand would understand what to do next"
        ]
      },
      {
        title: "Brand Consistency Check",
        type: "checklist",
        items: [
          "Colors match the brand palette exactly (check hex codes)",
          "Typography uses approved fonts at correct weights",
          "Logo is properly placed and sized per brand guidelines",
          "Voice and tone match brand personality (check against Brand Vault)",
          "Imagery style aligns with visual system (photography/illustration style)",
          "The ad 'feels' like it belongs with other brand assets"
        ]
      },
      {
        title: "Offer & CTA Integrity",
        type: "checklist",
        items: [
          "The offer is clearly stated (price, discount, or value proposition)",
          "Any discount/promotion terms are accurate and legal",
          "The CTA uses action verbs ('Get', 'Start', 'Try' not 'Learn More')",
          "Only one primary CTA exists (no competing buttons)",
          "The CTA destination URL is correct and working",
          "Urgency is genuine (not fake scarcity)",
          "Guarantee or risk-reversal is mentioned if applicable"
        ]
      },
      {
        title: "Trust & Proof Check",
        type: "checklist",
        items: [
          "Social proof is included (testimonials, user count, ratings)",
          "Proof points are verifiable and up-to-date",
          "Trust badges are relevant to the target market",
          "Claims are substantiated (avoid 'best' without proof)",
          "Customer testimonials include name/location/photo where possible",
          "Any statistics cited have a recent, credible source"
        ]
      },
      {
        title: "Market Fit Verification",
        type: "examples",
        items: [
          "KENYA — M-Pesa payment badge visible if applicable. Currency shown as KES/KSh. Imagery features relatable local context. Any Swahili used is grammatically correct. Testimonials from Kenyan users. No culturally inappropriate imagery or messaging.",
          "UAE — Arabic text (if used) reads right-to-left correctly. Currency shown as AED. Imagery is modest and aspirational. Ramadan-sensitive if running during holy month. Premium positioning maintained. No pork/alcohol references.",
          "CANADA — French version available for Quebec targeting. Currency shown as CAD/CA$. Diverse representation in imagery. Privacy/CASL compliance for any data collection. Canadian trust signals (Canadian-owned, local support)."
        ]
      },
      {
        title: "Compliance & Risk Check",
        type: "checklist",
        items: [
          "No trademark violations in copy or imagery",
          "No copyrighted content used without license",
          "Health/financial claims comply with local regulations",
          "Testimonials have proper disclosures if required",
          "Pricing is accurate and matches landing page",
          "No discriminatory language or imagery",
          "Platform-specific policies met (Facebook, Google, etc.)",
          "GDPR/CCPA/local privacy requirements addressed"
        ]
      }
    ],
    commonMistakes: [
      "Skipping the 5-second test — If you can't explain the ad in one sentence, neither can your viewer",
      "Using 'Learn More' as a CTA — Vague CTAs kill conversion; be specific about what happens when they click",
      "Forgetting to check mobile rendering — 80%+ of viewers see ads on mobile; test on actual devices",
      "Assuming translation = localization — Translated text may be grammatically correct but culturally flat",
      "Not checking landing page alignment — The ad promises one thing, the landing page delivers another"
    ],
    proTips: [
      "Create a 'pre-flight' folder with 3 checkpoints: Self-QA, Peer Review, Final Approval. No ad ships without all three.",
      "Build a market-specific reviewer network: one native speaker per target market who can flag cultural issues.",
      "Take a screenshot of every approved ad with its performance data—this becomes your reference library."
    ],
    nextAction: "Log in and QA your next 3 ad variants using this checklist—catch issues before they cost you money."
  },

  "launch-in-7-days": {
    id: "launch-in-7-days",
    title: "Launch in 7 Days Playbook",
    tag: "Playbook",
    readTime: "5 min read",
    quickStart: [
      "Block 2-3 focused hours per day for 7 days—this sprint requires dedicated time, not scattered effort",
      "Have your Brand Vault set up before starting (or use Day 1 to build it)",
      "Choose 1-3 markets to launch in—don't try to do everything at once"
    ],
    sections: [
      {
        title: "Day-by-Day Sprint Plan",
        type: "steps",
        items: [
          "DAY 1: FOUNDATION — Set up or audit your Brand Vault. Upload your top 5 performing ads as controls. Define your target markets (pick 1-3). Document your primary offer and CTA. Outcome: Brand Vault ready, control ads identified, markets selected.",
          "DAY 2: RESEARCH — Map market signals for each target region. Review competitor ads in each market. Identify 3 cultural hooks per market. Document local payment methods and pricing. Outcome: Market signal cheat sheet completed for each region.",
          "DAY 3: MESSAGE ADAPTATION — Rewrite your control ad's headline for each market. Adapt body copy with local context. Localize CTAs and urgency framing. Create 2-3 hook variations per market. Outcome: Localized copy deck for all markets.",
          "DAY 4: CREATIVE DIRECTION — Brief your designer or generate AI visuals. Adapt imagery for each market's preferences. Ensure brand consistency across variants. Create 2-3 visual variations per market. Outcome: Creative assets ready for all variants.",
          "DAY 5: OFFER CALIBRATION — Localize pricing display for each currency. Add market-specific payment methods. Calibrate discounts and bundles per market. Finalize landing pages with local elements. Outcome: Offers finalized, landing pages ready.",
          "DAY 6: QA & REFINEMENT — Run all variants through the Ad Creative QA Checklist. Get native speaker review for each market. Fix any brand consistency issues. Test all links and tracking. Outcome: All variants approved and ready to ship.",
          "DAY 7: LAUNCH & MONITOR — Publish ads across target markets. Set up performance dashboards. Monitor first 24-hour data. Document initial learnings. Plan optimization for Week 2. Outcome: Campaign live, tracking in place, learnings captured."
        ]
      },
      {
        title: "Sprint Checklist",
        type: "checklist",
        items: [
          "Day 1: Brand Vault set up or audited",
          "Day 1: Control ads uploaded and documented",
          "Day 1: Target markets (1-3) selected",
          "Day 2: Market signals mapped per region",
          "Day 2: Competitor research completed",
          "Day 2: Cultural hooks identified",
          "Day 3: Headlines localized for all markets",
          "Day 3: Body copy adapted with local context",
          "Day 3: CTAs localized",
          "Day 4: Visual briefs created",
          "Day 4: Creative assets generated/adapted",
          "Day 4: Brand consistency verified",
          "Day 5: Pricing localized per currency",
          "Day 5: Payment methods added",
          "Day 5: Landing pages updated",
          "Day 6: QA checklist completed for all variants",
          "Day 6: Native speaker reviews obtained",
          "Day 6: All links and tracking tested",
          "Day 7: Ads published",
          "Day 7: Dashboards set up",
          "Day 7: First learnings documented"
        ]
      },
      {
        title: "Daily Time Blocks",
        type: "bullets",
        items: [
          "Morning (1 hour): Primary task for the day—the one thing that must get done",
          "Midday (1 hour): Secondary tasks—supporting work that enables tomorrow's progress",
          "End of day (30 min): Review and prep—document what's done, set up tomorrow's tasks",
          "Buffer (30 min): Handle unexpected issues, get feedback, make refinements"
        ]
      }
    ],
    commonMistakes: [
      "Trying to launch in too many markets at once — Start with 1-3 markets, prove the model, then expand",
      "Skipping the Brand Vault setup — Day 1 foundation work saves hours of inconsistency fixes later",
      "Rushing through QA on Day 6 — A single cultural mistake can tank an entire market's performance",
      "Not blocking dedicated time — 30 minutes here and there doesn't create sprint momentum",
      "Forgetting to document learnings — Day 7 insights are gold for your next campaign; capture them"
    ],
    proTips: [
      "Share the sprint plan with your team and stakeholders upfront—aligned expectations prevent scope creep mid-sprint.",
      "Build a 'launch day' ritual: same playlist, same coffee, same focused environment. Rituals create momentum.",
      "Schedule your Week 2 optimization session before you launch—you'll be too busy to remember otherwise."
    ],
    nextAction: "Log in and run your first 7-day sprint—start with Day 1's Brand Vault setup and build momentum from there."
  },

  "campaign-brief-template": {
    id: "campaign-brief-template",
    title: "Campaign Brief Template",
    tag: "Template",
    readTime: "5 min read",
    quickStart: [
      "Fill in each section before briefing your team or generating AI variants—incomplete briefs lead to off-brand outputs",
      "Start with the Goal and Target Audience sections; everything else flows from these two",
      "Use the filled Kenya example at the bottom as a reference, then adapt for your market"
    ],
    sections: [
      {
        title: "Campaign Overview",
        type: "bullets",
        items: [
          "CAMPAIGN NAME — [INSERT CAMPAIGN NAME] (e.g., 'Kenya Q1 Fitness Push', 'UAE Ramadan Sale', 'Canada Back-to-School')",
          "CAMPAIGN GOAL — Primary KPI: [INSERT PRIMARY METRIC] (e.g., 500 sign-ups, 1,000 purchases, 10,000 reach). Secondary KPI: [INSERT SECONDARY METRIC] (e.g., CTR > 2%, CPA < $15)",
          "CAMPAIGN DATES — Start: [INSERT DATE] | End: [INSERT DATE] | Total duration: [X] days/weeks",
          "BUDGET — Total: [INSERT AMOUNT] | Daily: [INSERT AMOUNT] | Split: [X]% awareness, [X]% conversion"
        ]
      },
      {
        title: "Target Market",
        type: "bullets",
        items: [
          "PRIMARY MARKET — [Kenya / UAE / Canada / Other: ________]",
          "LANGUAGE — Primary: [INSERT] | Secondary (if applicable): [INSERT]",
          "CURRENCY — [KES / AED / CAD / Other: ________]",
          "PAYMENT METHODS — [M-Pesa / Apple Pay / Credit Card / PayPal / Other: ________]",
          "CULTURAL CONSIDERATIONS — [INSERT any timing, imagery, or messaging considerations for this market]"
        ]
      },
      {
        title: "Target Audience",
        type: "bullets",
        items: [
          "DEMOGRAPHICS — Age: [INSERT RANGE] | Gender: [INSERT] | Location: [INSERT CITIES/REGIONS] | Income: [INSERT LEVEL]",
          "PSYCHOGRAPHICS — Values: [INSERT 2-3] | Lifestyle: [INSERT] | Pain points: [INSERT 2-3] | Aspirations: [INSERT 2-3]",
          "BUYING BEHAVIOR — Purchase frequency: [INSERT] | Decision drivers: [INSERT 2-3] | Objections: [INSERT 2-3]",
          "AUDIENCE PERSONA — '[INSERT NAME]' is a [AGE] [PROFESSION] in [CITY] who wants [DESIRE] but struggles with [PAIN POINT]. They buy when [TRIGGER]."
        ]
      },
      {
        title: "Offer Details",
        type: "bullets",
        items: [
          "PRODUCT/SERVICE — [INSERT PRODUCT NAME AND BRIEF DESCRIPTION]",
          "PRICE POINT — Regular: [INSERT] | Promo: [INSERT] | Savings: [INSERT AMOUNT OR %]",
          "BUNDLE (if applicable) — [INSERT WHAT'S INCLUDED]",
          "URGENCY MECHANISM — [INSERT: limited time, limited quantity, early-bird, flash sale, etc.]",
          "GUARANTEE/RISK REVERSAL — [INSERT: money-back, free trial, free returns, etc.]",
          "BONUS (if applicable) — [INSERT ANY ADDED VALUE]"
        ]
      },
      {
        title: "Messaging",
        type: "bullets",
        items: [
          "KEY MESSAGE (ONE SENTENCE) — [INSERT THE SINGLE MOST IMPORTANT THING YOU WANT PEOPLE TO REMEMBER]",
          "HOOK OPTION 1 — [INSERT ATTENTION-GRABBING OPENER]",
          "HOOK OPTION 2 — [INSERT ALTERNATIVE HOOK]",
          "HOOK OPTION 3 — [INSERT ALTERNATIVE HOOK]",
          "BENEFIT STATEMENT — [INSERT PRIMARY BENEFIT IN CUSTOMER LANGUAGE]",
          "PROOF POINT — [INSERT TESTIMONIAL, STAT, OR SOCIAL PROOF]"
        ]
      },
      {
        title: "Proof Assets Needed",
        type: "checklist",
        items: [
          "Customer testimonials (text): [INSERT NUMBER NEEDED]",
          "Customer testimonials (video): [INSERT NUMBER NEEDED]",
          "User count or community size: [INSERT CURRENT NUMBER]",
          "Star rating or review score: [INSERT RATING + SOURCE]",
          "Before/after results: [INSERT IF APPLICABLE]",
          "Media mentions or certifications: [INSERT IF APPLICABLE]",
          "Screenshots or product demos: [INSERT NUMBER NEEDED]"
        ]
      },
      {
        title: "Visual Direction",
        type: "bullets",
        items: [
          "VISUAL STYLE — [INSERT: minimal, bold, lifestyle, product-focused, UGC-style, premium, playful, etc.]",
          "COLOR PALETTE — Primary: [INSERT] | Accent: [INSERT] | Background: [INSERT]",
          "SETTING/BACKDROP — [INSERT: studio, outdoor, home, office, urban, nature, etc.]",
          "PEOPLE — [INSERT: solo, group, diverse, specific demographic, no people, etc.]",
          "DO — [INSERT 2-3 visual things to include]",
          "DON'T — [INSERT 2-3 visual things to avoid]",
          "REFERENCE IMAGES — [INSERT LINKS OR DESCRIPTIONS OF VISUAL INSPIRATION]"
        ]
      },
      {
        title: "CTA & Destination",
        type: "bullets",
        items: [
          "PRIMARY CTA — [INSERT ACTION VERB + BENEFIT, e.g., 'Start your free trial', 'Shop now and save 20%', 'Message us on WhatsApp']",
          "DESTINATION TYPE — [WhatsApp / Landing Page / Checkout / Lead Form / App Download]",
          "DESTINATION URL — [INSERT LINK]",
          "WHATSAPP NUMBER (if applicable) — [INSERT NUMBER WITH COUNTRY CODE]",
          "LANDING PAGE HEADLINE — [INSERT HEADLINE THAT MATCHES AD]"
        ]
      },
      {
        title: "Platforms & Formats",
        type: "checklist",
        items: [
          "Facebook Feed: [YES/NO] — Format: [Static / Carousel / Video]",
          "Facebook Stories: [YES/NO] — Format: [Static / Video]",
          "Instagram Feed: [YES/NO] — Format: [Static / Carousel / Reels]",
          "Instagram Stories: [YES/NO] — Format: [Static / Video]",
          "Instagram Reels: [YES/NO] — Duration: [15s / 30s / 60s]",
          "TikTok: [YES/NO] — Duration: [INSERT]",
          "Google Display: [YES/NO] — Sizes: [INSERT]",
          "YouTube: [YES/NO] — Format: [Bumper / In-stream / Shorts]",
          "Email: [YES/NO] — Sequence: [INSERT NUMBER OF EMAILS]"
        ]
      },
      {
        title: "Tracking & Attribution",
        type: "bullets",
        items: [
          "UTM SOURCE — [INSERT, e.g., facebook, instagram, google]",
          "UTM MEDIUM — [INSERT, e.g., paid, organic, email]",
          "UTM CAMPAIGN — [INSERT CAMPAIGN NAME, NO SPACES]",
          "PIXEL EVENTS — [INSERT: ViewContent, AddToCart, Purchase, Lead, etc.]",
          "CONVERSION WINDOW — [INSERT: 7-day click, 1-day view, etc.]",
          "ATTRIBUTION NOTES — [INSERT ANY SPECIAL TRACKING REQUIREMENTS]"
        ]
      },
      {
        title: "Approval & Timeline",
        type: "bullets",
        items: [
          "BRIEF OWNER — [INSERT NAME]",
          "CREATIVE LEAD — [INSERT NAME]",
          "FINAL APPROVER — [INSERT NAME]",
          "BRIEF DEADLINE — [INSERT DATE]",
          "CREATIVE DEADLINE — [INSERT DATE]",
          "REVIEW DEADLINE — [INSERT DATE]",
          "LAUNCH DATE — [INSERT DATE]"
        ]
      },
      {
        title: "Filled Example: Kenya Fitness App Campaign",
        type: "examples",
        items: [
          "CAMPAIGN OVERVIEW — Name: 'Kenya Q1 Fitness Push'. Goal: 500 app sign-ups in 30 days. Secondary: CTR > 2.5%. Dates: Feb 1–28. Budget: $1,500 total, $50/day, 30% awareness / 70% conversion.",
          "TARGET MARKET — Primary: Kenya. Language: English with Swahili phrases. Currency: KES. Payment: M-Pesa primary, card secondary. Cultural: Avoid imagery that feels 'imported'; feature local faces and Nairobi settings.",
          "TARGET AUDIENCE — Demographics: 25-40, male/female, Nairobi and major cities, middle income (KSh 50,000-150,000/month). Psychographics: Health-conscious, time-poor professionals who want to stay fit but can't commit to gym memberships. Persona: 'Brian' is a 32-year-old marketing manager in Nairobi who wants to lose 10kg but struggles with consistency. He buys when he sees social proof from people like him.",
          "OFFER — Product: FitKenya Pro App (home workouts). Price: KSh 1,500/month (regular KSh 2,500). Bundle: 3 months + nutrition guide. Urgency: 'First 100 sign-ups only'. Guarantee: 7-day free trial, cancel anytime. Bonus: Free 1-on-1 consultation call.",
          "MESSAGING — Key message: 'Get fit at home in 20 minutes a day—no gym required.' Hook 1: 'Still waiting for the perfect time to start working out?' Hook 2: 'What if you could lose 5kg without leaving your house?' Hook 3: 'Join 10,000+ Kenyans who ditched the gym and got results.' Benefit: 'Save 2 hours daily on commuting and get better results.' Proof: 'Brian lost 8kg in 60 days—see his story.'",
          "VISUAL DIRECTION — Style: Warm, relatable, UGC-feel. Colors: Orange (energy), green (health), white backgrounds. Setting: Nairobi apartments, home living rooms. People: Real Kenyan users, diverse body types. Do: Show sweat, real effort, phone screens with app. Don't: Stock photos, gym equipment, overly polished aesthetics.",
          "CTA & DESTINATION — Primary CTA: 'Start your free trial via M-Pesa'. Destination: WhatsApp for sign-up assistance + landing page. WhatsApp: +254 700 123 456. Landing page headline: 'Join 10,000+ Kenyans Getting Fit at Home'.",
          "PLATFORMS — Facebook Feed (Static + Video), Instagram Stories (Video), Instagram Reels (30s testimonial)."
        ]
      }
    ],
    commonMistakes: [
      "Leaving sections blank or writing 'TBD'—incomplete briefs create off-brand outputs and wasted revision cycles",
      "Writing vague goals like 'increase awareness'—always include a specific number and timeframe",
      "Skipping the audience persona—generic targeting leads to generic creative that converts no one",
      "Not specifying visual 'don'ts'—knowing what to avoid is as important as knowing what to include",
      "Forgetting tracking setup until after launch—attribution problems are nearly impossible to fix retroactively"
    ],
    proTips: [
      "Fill out the brief yourself before handing it to anyone else—if you can't answer a section, your team definitely can't.",
      "Keep a 'brief library' of past campaigns with performance notes—patterns emerge that make future briefs faster and better.",
      "Schedule a 15-minute 'brief review' call before creative starts—it's faster than three rounds of revisions."
    ],
    nextAction: "Log in and use this brief template to generate your first set of localized ad variants—the AI will pull from every section."
  },

  "ad-copy-template-pack": {
    id: "ad-copy-template-pack",
    title: "Ad Copy Template Pack",
    tag: "Template",
    readTime: "6 min read",
    quickStart: [
      "Use these templates as starting points, not final copy—always adapt language to your specific audience and market",
      "Mix and match: pair a hook framework with a benefit statement, proof line, and CTA to build complete ad copy",
      "Test multiple hooks with the same body copy to isolate what's driving performance"
    ],
    sections: [
      {
        title: "10 Hook Frameworks",
        type: "bullets",
        items: [
          "THE QUESTION HOOK — 'Still [STRUGGLING WITH PAIN POINT]?' Example: 'Still spending 3 hours a day on content creation?'",
          "THE 'WHAT IF' HOOK — 'What if you could [ACHIEVE DESIRE] without [COMMON OBSTACLE]?' Example: 'What if you could double your sales without doubling your ad spend?'",
          "THE CONTRAST HOOK — '[OLD WAY] is dead. Here's what's working now.' Example: 'Cold calling is dead. Here's what's actually booking meetings in 2024.'",
          "THE PROOF HOOK — '[SPECIFIC RESULT] in [TIMEFRAME]. Here's how.' Example: '47 new customers in 30 days. Here's exactly how we did it.'",
          "THE 'STOP' HOOK — 'Stop [COMMON MISTAKE] if you want [DESIRED OUTCOME].' Example: 'Stop boosting posts if you actually want leads.'",
          "THE MISTAKE HOOK — 'The #1 mistake [AUDIENCE] make with [TOPIC].' Example: 'The #1 mistake e-commerce brands make with their ad creative.'",
          "THE INSIDER HOOK — 'What [AUTHORITY FIGURE] won't tell you about [TOPIC].' Example: 'What marketing agencies won't tell you about Facebook ads.'",
          "THE SIMPLE TRUTH HOOK — '[TOPIC] isn't complicated. Here's the simple truth.' Example: 'Losing weight isn't complicated. Here's the simple truth.'",
          "THE 'YOU DON'T NEED' HOOK — 'You don't need [COMMON BELIEF] to [ACHIEVE RESULT].' Example: 'You don't need a huge budget to run profitable ads.'",
          "THE TIME-BASED HOOK — '[ACHIEVE RESULT] in the next [SHORT TIMEFRAME].' Example: 'Generate 10 qualified leads in the next 7 days.'"
        ]
      },
      {
        title: "Benefit Ladder Template",
        type: "steps",
        items: [
          "FEATURE — What it is: [INSERT PRODUCT FEATURE]. Example: 'AI-powered ad generator'",
          "FUNCTIONAL BENEFIT — What it does: [INSERT WHAT THE FEATURE ENABLES]. Example: 'Creates 50 ad variations in 10 minutes'",
          "EMOTIONAL BENEFIT — How it feels: [INSERT THE FEELING IT CREATES]. Example: 'Never stare at a blank screen again'",
          "ULTIMATE OUTCOME — Why it matters: [INSERT THE END RESULT THEY ACTUALLY WANT]. Example: 'Spend less time creating, more time scaling'"
        ]
      },
      {
        title: "10 Proof Lines",
        type: "bullets",
        items: [
          "THE NUMBER PROOF — 'Join [X]+ [AUDIENCE] who [ACHIEVED RESULT].' Example: 'Join 10,000+ marketers who've cut their creative time in half.'",
          "THE TESTIMONIAL PROOF — '[NAME] [ACHIEVED RESULT] in [TIMEFRAME]. [QUOTE].' Example: 'Sarah doubled her ROAS in 3 weeks: \"I wish I'd found this sooner.\"'",
          "THE RATING PROOF — 'Rated [X] stars by [X]+ [USERS].' Example: 'Rated 4.9 stars by 2,500+ users on G2.'",
          "THE COMPARISON PROOF — '[X]% [BETTER/FASTER/CHEAPER] than [ALTERNATIVE].' Example: '3x faster than hiring a freelancer.'",
          "THE AUTHORITY PROOF — 'Trusted by teams at [COMPANY 1], [COMPANY 2], [COMPANY 3].' Example: 'Trusted by teams at Shopify, Airbnb, and Stripe.'",
          "THE BEFORE/AFTER PROOF — 'Before: [PAIN STATE]. After: [DESIRED STATE].' Example: 'Before: 4 hours per ad. After: 10 minutes.'",
          "THE GUARANTEE PROOF — '[GUARANTEE TYPE] or [CONSEQUENCE].' Example: 'Results in 30 days or your money back.'",
          "THE MEDIA PROOF — 'Featured in [PUBLICATION 1], [PUBLICATION 2], [PUBLICATION 3].' Example: 'Featured in Forbes, TechCrunch, and The Hustle.'",
          "THE CERTIFICATION PROOF — '[CERTIFIED/APPROVED] by [AUTHORITY].' Example: 'Certified Meta Marketing Partner.'",
          "THE CASE STUDY PROOF — 'How [COMPANY] [ACHIEVED RESULT]: [LINK/REFERENCE].' Example: 'How a DTC brand went from $10k to $100k/month in ad spend.'"
        ]
      },
      {
        title: "Offer Framing Templates",
        type: "bullets",
        items: [
          "DISCOUNT FRAME — 'Get [X]% off [PRODUCT]—[URGENCY]. [REGULAR PRICE] → [SALE PRICE].' Example: 'Get 40% off Pro Plan—this week only. $99 → $59.'",
          "BUNDLE FRAME — '[PRODUCT 1] + [PRODUCT 2] + [PRODUCT 3] for just [PRICE]. (Value: [HIGHER VALUE])' Example: 'Course + Templates + Coaching Call for just $197. (Value: $500)'",
          "FREE DELIVERY FRAME — 'Free [SHIPPING/DELIVERY] on orders over [THRESHOLD]. [ACTION] now.' Example: 'Free shipping on orders over $50. Shop now.'",
          "LIMITED DROP FRAME — 'Only [X] spots available. [X] already claimed. [ACTION] before [DEADLINE].' Example: 'Only 50 spots available. 32 already claimed. Enroll before Friday.'",
          "FREE TRIAL FRAME — 'Try [PRODUCT] free for [TIMEFRAME]. No [OBJECTION HANDLER]. [ACTION].' Example: 'Try FitApp free for 7 days. No credit card required. Start now.'",
          "BONUS FRAME — 'Order today and get [BONUS] free (worth [VALUE]).' Example: 'Order today and get our Content Calendar Template free (worth $49).'",
          "PAYMENT PLAN FRAME — 'Just [LOW AMOUNT]/[PERIOD]. [TOTAL] total over [TIMEFRAME]. [ACTION].' Example: 'Just $29/month. $174 total over 6 months. Start today.'",
          "EARLY BIRD FRAME — 'Early bird price: [LOWER PRICE] (goes up to [REGULAR PRICE] on [DATE]).' Example: 'Early bird price: $97 (goes up to $197 on March 1).'"
        ]
      },
      {
        title: "CTA Library: WhatsApp/DM CTAs",
        type: "bullets",
        items: [
          "'Message us to get started →'",
          "'DM \"INFO\" for details'",
          "'Tap to chat with our team'",
          "'Send \"YES\" to claim your spot'",
          "'WhatsApp us now—we reply in minutes'"
        ]
      },
      {
        title: "CTA Library: Website CTAs",
        type: "bullets",
        items: [
          "'Shop now and save [X]%'",
          "'Start your free trial'",
          "'Get instant access'",
          "'Claim your discount'",
          "'See pricing →'"
        ]
      },
      {
        title: "CTA Library: Lead Form CTAs",
        type: "bullets",
        items: [
          "'Download the free guide'",
          "'Get your free quote'",
          "'Book a free consultation'",
          "'Request early access'",
          "'Join the waitlist'"
        ]
      },
      {
        title: "UAE Mini Example",
        type: "examples",
        items: [
          "HOOK — 'What if you could look 10 years younger without surgery?'",
          "BENEFIT — 'Our non-invasive treatment takes 30 minutes and lasts 12 months.'",
          "PROOF — 'Trusted by 5,000+ clients across Dubai and Abu Dhabi. Rated 4.9 stars.'",
          "OFFER — 'Book this week and get a free consultation + 20% off your first session.'",
          "CTA — 'WhatsApp us now to book your slot →'"
        ]
      },
      {
        title: "Canada Mini Example",
        type: "examples",
        items: [
          "HOOK — 'Still manually tracking your expenses? There's a faster way.'",
          "BENEFIT — 'Our app automatically categorizes spending and generates tax-ready reports.'",
          "PROOF — 'Join 25,000+ Canadian small business owners saving 5+ hours per month.'",
          "OFFER — 'Try free for 14 days. No credit card required.'",
          "CTA — 'Start your free trial →'"
        ]
      }
    ],
    commonMistakes: [
      "Using the same hook across all markets—what grabs attention in Canada may fall flat in Kenya",
      "Writing benefits that are actually features—'AI-powered' is a feature; 'create ads 10x faster' is a benefit",
      "Weak CTAs like 'Learn More' or 'Click Here'—always specify what happens when they click",
      "Forgetting to match CTA to destination—'WhatsApp us' shouldn't lead to a checkout page",
      "Overloading with multiple offers in one ad—one ad, one offer, one CTA"
    ],
    proTips: [
      "Build a 'swipe file' of hooks that stop YOUR scroll—if it worked on you, it might work on your audience.",
      "Test hooks first, body copy second—the hook determines whether anyone reads the rest.",
      "Write 10 hooks, pick 3, test 3—volume leads to quality, and testing reveals truth."
    ],
    nextAction: "Log in and generate 10 hook variations for your best-performing product—let the AI do the heavy lifting."
  },

  "creative-direction-template": {
    id: "creative-direction-template",
    title: "Creative Direction Template",
    tag: "Template",
    readTime: "5 min read",
    quickStart: [
      "Fill out this template BEFORE briefing any designer or generating AI visuals—it prevents misalignment and revision loops",
      "Be specific with 'do' and 'don't' examples—vague direction leads to vague output",
      "Include reference images wherever possible—one image communicates more than 100 words"
    ],
    sections: [
      {
        title: "Brand Vibe Keywords",
        type: "bullets",
        items: [
          "Select 5-7 keywords that define your brand's visual personality:",
          "ENERGY LEVEL — [Calm / Energetic / Bold / Subtle / Intense]",
          "STYLE — [Minimal / Maximalist / Clean / Textured / Refined / Raw]",
          "TONE — [Serious / Playful / Professional / Casual / Luxurious / Accessible]",
          "ERA — [Modern / Classic / Retro / Futuristic / Timeless]",
          "MOOD — [Warm / Cool / Vibrant / Muted / Dramatic / Soft]",
          "YOUR 5-7 KEYWORDS — [INSERT: e.g., 'Premium, Minimal, Warm, Modern, Confident, Refined, Aspirational']"
        ]
      },
      {
        title: "Visual Rules: Colors",
        type: "bullets",
        items: [
          "PRIMARY COLOR — [INSERT HEX CODE + NAME] | Usage: [e.g., headlines, CTAs, key elements]",
          "SECONDARY COLOR — [INSERT HEX CODE + NAME] | Usage: [e.g., accents, icons, highlights]",
          "BACKGROUND COLOR — [INSERT HEX CODE + NAME] | Usage: [e.g., primary backgrounds]",
          "TEXT COLORS — Headlines: [INSERT] | Body: [INSERT] | Captions: [INSERT]",
          "ACCENT COLORS — [INSERT 1-2 ACCENT COLORS FOR VARIETY]",
          "COLORS TO AVOID — [INSERT COLORS THAT CLASH WITH BRAND]",
          "GRADIENT RULES — [INSERT: e.g., 'Use subtle gradients only', 'No gradients on text', 'Allowed between primary and secondary']"
        ]
      },
      {
        title: "Visual Rules: Typography",
        type: "bullets",
        items: [
          "HEADLINE FONT — [INSERT FONT NAME] | Weight: [INSERT] | Style: [INSERT]",
          "BODY FONT — [INSERT FONT NAME] | Weight: [INSERT] | Style: [INSERT]",
          "ACCENT FONT (if any) — [INSERT FONT NAME] | Usage: [INSERT]",
          "MINIMUM FONT SIZES — Headlines: [INSERT]px | Body: [INSERT]px | Captions: [INSERT]px",
          "LINE HEIGHT — Headlines: [INSERT] | Body: [INSERT]",
          "LETTER SPACING — Headlines: [INSERT] | Body: [INSERT]",
          "TEXT ALIGNMENT — [INSERT: Left-aligned / Centered / Justified]"
        ]
      },
      {
        title: "Visual Rules: Spacing & Layout",
        type: "bullets",
        items: [
          "MINIMUM MARGINS — [INSERT: e.g., '40px on all sides for static, 60px for video']",
          "BREATHING ROOM — [INSERT: e.g., 'At least 20% whitespace around text blocks']",
          "LOGO PLACEMENT — [INSERT: e.g., 'Top-left corner, minimum 24px from edge']",
          "LOGO MINIMUM SIZE — [INSERT: e.g., 'Never smaller than 80px width']",
          "LOGO CLEAR SPACE — [INSERT: e.g., 'Minimum 16px clear space around logo']",
          "GRID SYSTEM — [INSERT: e.g., '12-column grid', 'Rule of thirds']",
          "HIERARCHY PATTERN — [INSERT: e.g., 'Hook → Visual → Benefit → CTA']"
        ]
      },
      {
        title: "Imagery Rules",
        type: "bullets",
        items: [
          "PEOPLE — [INSERT: e.g., 'Real customers, diverse ages 25-45, natural expressions, no stock model poses']",
          "BACKGROUNDS — [INSERT: e.g., 'Clean solid colors, lifestyle settings, avoid cluttered backgrounds']",
          "LIGHTING — [INSERT: e.g., 'Natural daylight preferred, warm tones, soft shadows']",
          "PRODUCT SHOTS — [INSERT: e.g., 'Hero shot at 45° angle, lifestyle context, never floating on white']",
          "PHOTOGRAPHY STYLE — [INSERT: e.g., 'Editorial quality, slight warmth in post, natural skin tones']",
          "ILLUSTRATION STYLE — [INSERT: e.g., 'Flat illustrations, 2D, brand colors only, no outlines']",
          "IMAGE FILTERS — [INSERT: e.g., 'Light warmth +10, contrast +5, no heavy filters']"
        ]
      },
      {
        title: "Do's",
        type: "checklist",
        items: [
          "Use brand colors consistently across all assets",
          "Maintain clear visual hierarchy (hook → benefit → CTA)",
          "Include whitespace—let the design breathe",
          "Use high-resolution images (minimum 1080p for social)",
          "Keep text readable on mobile (test at 50% zoom)",
          "Align elements to grid for clean composition",
          "Match creative style to brand personality keywords"
        ]
      },
      {
        title: "Don'ts",
        type: "checklist",
        items: [
          "Never stretch or distort the logo",
          "Avoid more than 3 fonts per asset",
          "Don't use low-quality or pixelated images",
          "Avoid text over busy backgrounds without overlay",
          "Never use colors outside the brand palette",
          "Don't overcrowd—if in doubt, remove elements",
          "Avoid stock photos that feel generic or 'American'"
        ]
      },
      {
        title: "Market Adaptation Notes",
        type: "examples",
        items: [
          "KENYA — Prioritize warm, vibrant colors. Feature relatable local faces and urban Nairobi or Mombasa settings. Avoid imagery that feels 'imported' or disconnected from daily life. Include M-Pesa visual cues where relevant. Swahili phrases add warmth but keep primary copy in English.",
          "UAE — Lean into premium, aspirational aesthetics. Gold accents work well for luxury positioning. Imagery should be polished and high-production. Respect modesty in imagery—no revealing clothing. Arabic text must be professionally typeset (right-to-left, proper font). Ramadan-themed creative requires sensitivity.",
          "CANADA — Ensure diverse representation in all people imagery. Four-season relevance (don't show summer imagery in January). French-language versions required for Quebec targeting. Clean, professional aesthetic performs well. Sustainability/eco messaging resonates when authentic."
        ]
      },
      {
        title: "Shot List: Reels/Video (8 Shots)",
        type: "checklist",
        items: [
          "Shot 1: Hook visual—pattern interrupt or curiosity trigger (0-2 sec)",
          "Shot 2: Problem visualization—show the pain point (2-5 sec)",
          "Shot 3: Product/solution introduction (5-8 sec)",
          "Shot 4: Benefit demonstration—show it working (8-12 sec)",
          "Shot 5: Social proof—testimonial or results (12-16 sec)",
          "Shot 6: Offer reveal—price, discount, or bundle (16-20 sec)",
          "Shot 7: CTA—clear instruction with urgency (20-25 sec)",
          "Shot 8: Logo/brand close—end card with website (25-30 sec)"
        ]
      },
      {
        title: "Shot List: Static/Carousel (6 Frames)",
        type: "checklist",
        items: [
          "Frame 1: Hook headline + hero visual",
          "Frame 2: Problem statement + empathy",
          "Frame 3: Solution/product introduction",
          "Frame 4: Key benefits (2-3 max)",
          "Frame 5: Social proof or testimonial",
          "Frame 6: Offer + CTA + brand"
        ]
      },
      {
        title: "On-Screen Text Rules",
        type: "bullets",
        items: [
          "MAXIMUM WORDS PER FRAME — [INSERT: e.g., '10 words max for video', '20 words max for static']",
          "TEXT PLACEMENT — [INSERT: e.g., 'Upper third for hooks', 'Lower third for CTAs', 'Avoid center on video']",
          "SAFE ZONES — [INSERT: e.g., 'Keep text 100px from edges for platform UI overlap']",
          "CONTRAST RULES — [INSERT: e.g., 'Always use semi-transparent overlay behind text on images']",
          "ANIMATION — [INSERT: e.g., 'Fade in preferred', 'No bouncing or spinning text', '0.5s transitions']",
          "CAPTIONS — [INSERT: e.g., 'Always include captions for video', 'White text with black outline']"
        ]
      },
      {
        title: "Filled Example: UAE Premium Skincare Brand",
        type: "examples",
        items: [
          "BRAND VIBE KEYWORDS — Luxurious, Minimal, Refined, Modern, Confident, Aspirational, Clean",
          "COLORS — Primary: #C9A962 (Gold) for headlines and CTAs. Secondary: #1A1A1A (Rich Black) for backgrounds. Text: White (#FFFFFF) for headlines, Light Gray (#E5E5E5) for body. Accent: #D4AF37 (Bright Gold) for highlights. Avoid: Bright colors, neon, red.",
          "TYPOGRAPHY — Headlines: Playfair Display, Medium weight, centered. Body: Inter, Regular weight, left-aligned. Minimum sizes: Headlines 48px, Body 24px, Captions 18px.",
          "IMAGERY — People: Elegant, diverse Middle Eastern women 28-45, natural beauty, confident expressions. Backgrounds: Soft neutral tones, marble textures, clean studio. Lighting: Soft, diffused, golden hour warmth. Product: Close-up hero shots with subtle reflections.",
          "DO'S — Use gold sparingly as accent. Maintain generous whitespace. Show product in luxurious context. Use Arabic for heritage messaging.",
          "DON'TS — Never use busy patterns. Avoid informal language. No discount-heavy messaging (premium positioning). No revealing imagery.",
          "ON-SCREEN TEXT — Max 8 words per video frame. Text in upper or lower third, never center. Always use text shadow on lifestyle backgrounds."
        ]
      }
    ],
    commonMistakes: [
      "Vague direction like 'make it look premium'—specify exactly what 'premium' means for your brand",
      "Skipping the 'don't' list—knowing what to avoid prevents expensive revision cycles",
      "Not including reference images—one reference image beats 10 paragraphs of description",
      "Forgetting mobile-first design—70%+ of views happen on phones, yet most designers work on desktop",
      "Using the same creative direction for all markets—visual preferences vary significantly across cultures"
    ],
    proTips: [
      "Create a 'brand visual bank' of 20-30 reference images that capture your aesthetic—use these for every brief.",
      "Test your creative direction by asking: 'Could a designer who's never seen our brand execute this correctly?' If not, add more specifics.",
      "Review competitor creative weekly and document what you want to avoid—differentiation requires knowing the landscape."
    ],
    nextAction: "Log in and upload this creative direction to your Brand Vault—every AI-generated variant will follow these rules."
  },

  "content-calendar-template": {
    id: "content-calendar-template",
    title: "Content Calendar Template",
    tag: "Template",
    readTime: "4 min read",
    quickStart: [
      "Start with the 7-day starter plan below, then customize based on your actual capacity—consistency beats volume",
      "Fill in the calendar columns for one week before expanding—prove the system works before scaling it",
      "Use the 'Status' column religiously—it's how you track what's done vs what's falling behind"
    ],
    sections: [
      {
        title: "Weekly Structure Overview",
        type: "bullets",
        items: [
          "MONDAY — Post Type: Educational | Goal: Build authority | Hook Style: 'How to...' or 'The #1 mistake...'",
          "TUESDAY — Post Type: Social Proof | Goal: Build trust | Hook Style: Testimonial, case study, or results",
          "WEDNESDAY — Post Type: Behind-the-Scenes | Goal: Build connection | Hook Style: Process, team, or journey",
          "THURSDAY — Post Type: Value/Tips | Goal: Provide utility | Hook Style: Listicle, quick tip, or hack",
          "FRIDAY — Post Type: Promotional | Goal: Drive action | Hook Style: Offer, launch, or limited-time",
          "SATURDAY — Post Type: Engagement | Goal: Build community | Hook Style: Question, poll, or UGC",
          "SUNDAY — Post Type: Inspirational/Rest | Goal: Soft touch | Hook Style: Quote, vision, or light content"
        ]
      },
      {
        title: "Calendar Columns Template",
        type: "bullets",
        items: [
          "DATE — [INSERT DATE, e.g., Mon Jan 15]",
          "MARKET — [Kenya / UAE / Canada / Global]",
          "PLATFORM — [Instagram / Facebook / TikTok / LinkedIn / Email]",
          "FORMAT — [Static / Carousel / Reel / Story / Video]",
          "THEME — [Educational / Proof / BTS / Value / Promo / Engagement / Inspiration]",
          "HOOK — [INSERT HOOK TEXT—the first line or attention-grabber]",
          "CTA — [INSERT CALL-TO-ACTION—what you want them to do]",
          "ASSET LINK — [INSERT LINK TO CREATIVE FILE OR 'Needed']",
          "STATUS — [Idea / Drafted / Designed / Approved / Scheduled / Posted]",
          "NOTES — [INSERT ANY CONTEXT: timing, hashtags, boost budget, etc.]"
        ]
      },
      {
        title: "7-Day Starter Plan: Week 1",
        type: "examples",
        items: [
          "MONDAY — Date: [Week 1 Mon] | Market: Kenya | Platform: Instagram | Format: Carousel | Theme: Educational | Hook: 'The 3 biggest mistakes Kenyan brands make with their ads' | CTA: 'Save this for later' | Asset: Needed | Status: Idea",
          "TUESDAY — Date: [Week 1 Tue] | Market: UAE | Platform: Instagram | Format: Reel | Theme: Proof | Hook: 'How this Dubai brand 3x'd their ROAS in 30 days' | CTA: 'DM \"ROAS\" for the full breakdown' | Asset: Needed | Status: Idea",
          "WEDNESDAY — Date: [Week 1 Wed] | Market: Canada | Platform: LinkedIn | Format: Static | Theme: BTS | Hook: 'Here's what our creative process actually looks like' | CTA: 'Follow for more behind-the-scenes' | Asset: Needed | Status: Idea",
          "THURSDAY — Date: [Week 1 Thu] | Market: Global | Platform: Instagram | Format: Carousel | Theme: Value | Hook: '5 hooks that stop the scroll (steal these)' | CTA: 'Share with your marketing team' | Asset: Needed | Status: Idea",
          "FRIDAY — Date: [Week 1 Fri] | Market: Kenya | Platform: Facebook | Format: Video | Theme: Promo | Hook: 'This week only: Get your first 3 ad variants free' | CTA: 'Click the link to claim' | Asset: Needed | Status: Idea",
          "SATURDAY — Date: [Week 1 Sat] | Market: UAE | Platform: Instagram Stories | Format: Poll | Theme: Engagement | Hook: 'Which ad format converts best for you?' | CTA: 'Vote and see results' | Asset: Needed | Status: Idea",
          "SUNDAY — Date: [Week 1 Sun] | Market: Global | Platform: Instagram | Format: Static | Theme: Inspiration | Hook: 'The brands that win aren't louder—they're more local.' | CTA: 'Tag someone building a global brand' | Asset: Needed | Status: Idea"
        ]
      },
      {
        title: "Posting Cadence Guidance",
        type: "bullets",
        items: [
          "MINIMUM VIABLE — 3 posts/week: 1 educational, 1 proof, 1 promotional. Sustainable for solo operators.",
          "GROWTH MODE — 5 posts/week: Add engagement + value content. Good for small teams.",
          "SCALE MODE — 7+ posts/week: Full weekly structure + Stories. Requires dedicated content resource.",
          "TIMING TIPS — Kenya: Post 7-9am or 7-9pm EAT (lunch and after-work scrolling). UAE: Post 8-10pm GST (evening leisure). Canada: Post 12-1pm or 6-8pm local time (lunch and commute).",
          "PLATFORM PRIORITY — Start with 1 platform, master it, then expand. Instagram/Facebook for B2C, LinkedIn for B2B.",
          "BATCHING RHYTHM — Create all weekly content in one 2-3 hour session. Schedule in advance. Review performance weekly."
        ]
      },
      {
        title: "Performance Logging Notes",
        type: "checklist",
        items: [
          "Log reach/impressions within 48 hours of posting",
          "Record engagement rate (likes + comments + shares / reach)",
          "Note any standout comments or DMs received",
          "Track link clicks or profile visits if applicable",
          "Mark top performer of the week with a star",
          "Note any external factors (news, holidays, platform changes)",
          "Weekly review: What worked? What to repeat? What to drop?"
        ]
      },
      {
        title: "Content Calendar Checklist",
        type: "checklist",
        items: [
          "All 7 days planned with theme + hook + CTA",
          "Market assigned to each post",
          "Platform and format specified",
          "Asset links added or marked 'Needed'",
          "Status column filled for all rows",
          "Posting times noted based on market",
          "Weekly review meeting scheduled"
        ]
      }
    ],
    commonMistakes: [
      "Planning a month ahead before proving a week works—start small, iterate, then scale",
      "Filling the calendar with promotional content only—the 80/20 rule applies (80% value, 20% promo)",
      "Not logging performance—without data, you're guessing what works",
      "Treating all markets the same—content that works in Canada may flop in Kenya",
      "Batching too far ahead without flexibility—leave room for timely, reactive content"
    ],
    proTips: [
      "Color-code your calendar by market (e.g., green = Kenya, gold = UAE, red = Canada)—visual patterns reveal imbalances fast.",
      "Keep a 'content bank' of 10-15 evergreen post ideas you can pull when inspiration runs dry.",
      "Schedule a 30-minute 'content hour' at the same time each week—routine beats motivation."
    ],
    nextAction: "Log in and generate localized variants for your calendar—attach AI-created assets directly to each row."
  }
};

// Map card titles to content IDs
export const titleToContentId: Record<string, string> = {
  "Market Localization Playbook": "market-localization-playbook",
  "Brand Vault Setup Guide": "brand-vault-setup-guide",
  "Ad Creative QA Checklist": "ad-creative-qa-checklist",
  "Launch in 7 Days": "launch-in-7-days",
  "Campaign Brief Template": "campaign-brief-template",
  "Ad Copy Template Pack": "ad-copy-template-pack",
  "Creative Direction Template": "creative-direction-template",
  "Content Calendar Template": "content-calendar-template"
};
