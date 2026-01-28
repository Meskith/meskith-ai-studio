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
  },

  "cultural-cue-framework": {
    id: "cultural-cue-framework",
    title: "Cultural Cue Framework",
    tag: "Framework",
    readTime: "3 min read",
    quickStart: [
      "Pull up any ad creative you want to evaluate for cultural fit",
      "Score it across the 5 cue categories below (0-2 points each)",
      "A score under 6/10 means the ad will feel generic—time to localize"
    ],
    sections: [
      {
        title: "When to Use This Framework",
        type: "bullets",
        items: [
          "Before launching an ad in a new market—check if it actually feels local",
          "When repurposing existing creative for different regions",
          "During creative reviews to give specific, actionable feedback on cultural fit"
        ]
      },
      {
        title: "The 5 Cultural Cue Categories",
        type: "steps",
        items: [
          "Language Cues — Does the copy use local expressions, idioms, or cultural references? Is the formality level appropriate? Score 0 if generic English, 1 if localized vocabulary, 2 if natural local flow.",
          "Visual Context — Do the images, settings, and people feel familiar to the target audience? Are backgrounds, clothing, and environments recognizable? Score 0 if stock/foreign, 1 if neutral, 2 if distinctly local.",
          "Social Proof — Are testimonials, numbers, and trust signals locally relevant? Do they reference local communities, institutions, or recognizable figures? Score 0 if absent/generic, 1 if somewhat local, 2 if highly specific.",
          "Offer Mechanics — Are pricing, payment methods, and deal structures locally optimized? Does the urgency framing match cultural buying patterns? Score 0 if copy-paste from another market, 1 if partially adapted, 2 if fully localized.",
          "CTA Channel — Does the call-to-action direct users to locally preferred platforms? WhatsApp for Kenya, direct purchase for UAE, lead forms for Canada? Score 0 if mismatched, 1 if acceptable, 2 if optimal."
        ]
      },
      {
        title: "Scoring Interpretation",
        type: "examples",
        items: [
          "0-3 Points: Generic — This ad will feel foreign. Major rework needed across multiple categories.",
          "4-5 Points: Weak — Some local elements present but not enough to resonate. Targeted improvements needed.",
          "6-7 Points: Solid — Feels locally relevant. Minor tweaks to maximize impact.",
          "8-10 Points: Strong — Authentic local experience. Ready to launch or optimize for performance."
        ]
      },
      {
        title: "Example: Kenya vs UAE Comparison",
        type: "examples",
        items: [
          "KENYA AD (Score: 8/10) — Language: Uses 'Karibu' greeting, conversational Swahili-English mix (2). Visual: Nairobi street scene, diverse skin tones, warm lighting (2). Social Proof: 'Join 10,000+ Kenyans' with local testimonial names (2). Offer: M-Pesa payment, payday-timed discount (2). CTA: WhatsApp click-to-chat (0 - could add better local CTA).",
          "UAE AD (Score: 4/10, needs work) — Language: Generic English, no Arabic option (0). Visual: Stock lifestyle photo, could be anywhere (1). Social Proof: '5-star reviews' without local context (1). Offer: USD pricing, standard discount (1). CTA: Standard 'Shop Now' button (1). Recommendation: Add Arabic headline, use Dubai skyline, convert to AED, emphasize premium/exclusive positioning."
        ]
      },
      {
        title: "Quick Audit Checklist",
        type: "checklist",
        items: [
          "Language: Local expressions or cultural references present",
          "Language: Formality level matches market expectations",
          "Visual: Settings and people feel familiar to target audience",
          "Visual: Colors and aesthetics align with local preferences",
          "Social Proof: Numbers reference local community size",
          "Social Proof: Testimonials use locally recognizable names/titles",
          "Offer: Currency and payment methods localized",
          "Offer: Urgency framing matches cultural buying patterns",
          "CTA: Directs to locally preferred platform",
          "Overall: Score at least 6/10 before launching"
        ]
      }
    ],
    commonMistakes: [
      "Assuming English is 'universal'—even English-speaking markets have distinct vocabulary and tone preferences",
      "Using stock photography and expecting it to feel local—audiences can spot generic imagery instantly",
      "Localizing only one category—a Swahili headline with a foreign-looking image creates dissonance",
      "Over-scoring your own work—get a second opinion from someone familiar with the target market",
      "Treating localization as translation—cultural cues go far beyond language"
    ],
    proTips: [
      "Create a 'cue library' for each market—save examples of local ads that score 8+ to use as reference.",
      "When in doubt, lean into visual context first—it's the fastest way to signal 'this is for you' before anyone reads a word.",
      "Test borderline scores (5-6) against properly localized versions—the performance difference often justifies the extra effort."
    ],
    nextAction: "Log in and score your next 3 ad variants using this framework—identify which cues need the most attention."
  },

  "offer-localization-framework": {
    id: "offer-localization-framework",
    title: "Offer Localization Framework",
    tag: "Framework",
    readTime: "4 min read",
    quickStart: [
      "Start with your current offer structure (price, bundle, urgency, guarantee)",
      "Walk through the 6-step method below to adapt it for your target market",
      "Test the localized offer against your control to measure impact"
    ],
    sections: [
      {
        title: "When to Use This Framework",
        type: "bullets",
        items: [
          "When entering a new market with an existing product/offer",
          "When your conversion rate is lower in one market compared to others",
          "When localizing a campaign and you need to adapt more than just copy"
        ]
      },
      {
        title: "The 6-Step Offer Localization Method",
        type: "steps",
        items: [
          "Set the Anchor — What's the perceived value in this market? A $99 product might feel premium in Kenya, mid-range in Canada, and budget in UAE. Research local competitors to understand price positioning before setting your anchor.",
          "Frame Affordability — Adapt how the price is presented. Use installments ('Only KES 500/week for 4 weeks') in price-sensitive markets. Emphasize value-per-use in premium markets. Compare to local alternatives ('Less than your daily coffee').",
          "Structure the Bundle — What's included matters differently per market. Kenya: Add practical bonuses (guides, templates). UAE: Add exclusive/premium extras (early access, concierge support). Canada: Add convenience (free shipping, easy returns).",
          "Choose Urgency Type — Different markets respond to different urgency cues. Scarcity ('Only 10 left') works in competitive markets. Time-bound ('Ends Friday') works universally. Social proof urgency ('47 people bought today') works in community-driven markets.",
          "Calibrate Risk Reversal — What makes buyers feel safe varies. Kenya: Payment-after-delivery, M-Pesa protection. UAE: Easy returns, brand reputation emphasis. Canada: Money-back guarantees, reviews from verified buyers.",
          "Optimize Payment/Fulfillment — Remove friction at checkout. Offer local payment methods (M-Pesa, Tabby, Interac). Display prices in local currency. Be transparent about delivery times and any import considerations."
        ]
      },
      {
        title: "Example: Same Product, Different Markets",
        type: "examples",
        items: [
          "CANADA OFFER — Product: Online Course ($149 CAD). Anchor: 'Normally $299—50% off this week.' Affordability: '3 payments of $49.67' with Afterpay. Bundle: Course + templates + private community + 1 coaching call. Urgency: 'Enrollment closes Sunday at midnight.' Risk Reversal: '30-day money-back guarantee, no questions asked.' Payment: Credit card, PayPal, Afterpay. Delivery: Instant access + physical workbook shipped free.",
          "KENYA OFFER — Product: Same Online Course (KES 12,000). Anchor: 'KES 12,000 (valued at KES 25,000).' Affordability: 'Pay KES 3,000 x 4 weeks via M-Pesa.' Bundle: Course + Swahili summary guides + WhatsApp support group + local case studies. Urgency: 'Join 200+ Kenyan professionals already enrolled.' Risk Reversal: 'Preview first module free before paying.' Payment: M-Pesa, Airtel Money. Delivery: Mobile-optimized access + downloadable PDFs for offline viewing."
        ]
      },
      {
        title: "Offer Mismatch Diagnostic Checklist",
        type: "checklist",
        items: [
          "Price anchor feels appropriate for local market",
          "Affordability framing reduces perceived cost barrier",
          "Bundle contents match what local buyers value",
          "Urgency type resonates with local buying behavior",
          "Risk reversal addresses local trust concerns",
          "Payment methods include local favorites",
          "Currency displayed in local format",
          "Delivery expectations clearly set and realistic",
          "Offer tested against a control variant"
        ]
      },
      {
        title: "Market-Specific Offer Patterns",
        type: "examples",
        items: [
          "KENYA PATTERNS — Installment plans outperform single payments. M-Pesa is essential. Community proof ('Join X Kenyans') builds trust. Practical bonuses (templates, guides) add perceived value. Month-end timing aligns with paydays.",
          "UAE PATTERNS — Premium positioning outperforms discount-heavy offers. Exclusive access and limited availability create desire. Fast delivery is expected, not a bonus. Arabic option signals respect for local culture. Ramadan/Eid timing drives seasonal spikes.",
          "CANADA PATTERNS — Free shipping thresholds drive cart size. Subscriptions and loyalty programs build long-term value. Privacy compliance (PIPEDA) mentioned builds trust. French option required for Quebec. Seasonal timing (back-to-school, Black Friday) matters significantly."
        ]
      }
    ],
    commonMistakes: [
      "Copy-pasting USD pricing and expecting conversion—local currency display is essential",
      "Using the same urgency everywhere—scarcity can feel manipulative in some markets, exciting in others",
      "Offering payment methods that don't work locally—M-Pesa absence in Kenya is a deal-breaker",
      "Adding 'bonus' content that doesn't resonate—an ebook might excite one market and bore another",
      "Setting delivery expectations you can't meet—overpromising destroys trust faster than price objections"
    ],
    proTips: [
      "A/B test affordability framing before changing actual price—sometimes '4 payments of X' outperforms a discount.",
      "Survey customers in each market about what bonuses they'd actually want—assumptions are often wrong.",
      "Build a 'local checkout flow' screenshot library to see how competitors handle payment and delivery."
    ],
    nextAction: "Log in and create 2 offer variants for your next campaign—one for a price-sensitive market and one for a premium market."
  },

  "hook-to-cta-framework": {
    id: "hook-to-cta-framework",
    title: "Hook-to-CTA Framework",
    tag: "Framework",
    readTime: "3 min read",
    quickStart: [
      "Identify the core action you want the viewer to take (your CTA)",
      "Work backwards using the structure below to build a compelling path to that action",
      "Test multiple hook variations while keeping the rest of the structure constant"
    ],
    sections: [
      {
        title: "When to Use This Framework",
        type: "bullets",
        items: [
          "When writing any ad copy—short-form, long-form, video scripts, or static captions",
          "When existing ads get views but not clicks—the path from attention to action is broken",
          "When you need to create multiple variants quickly with consistent structure"
        ]
      },
      {
        title: "The Hook-to-CTA Structure",
        type: "steps",
        items: [
          "Hook — Stop the scroll in 1-2 seconds. Use curiosity, controversy, or immediate relevance. The hook's only job is to earn the next line.",
          "Relatable Moment — Connect with the viewer's current reality. Show you understand their situation, frustration, or desire. Build empathy before selling.",
          "Benefit — What transformation or outcome do you offer? Focus on the result they want, not the features you provide. Make it specific and tangible.",
          "Proof — Why should they believe you? Use testimonials, numbers, demonstrations, or credentials. Proof turns interest into trust.",
          "Offer — What exactly are you proposing? Be clear about what they get, what it costs (if applicable), and what makes this special right now.",
          "CTA — Tell them exactly what to do next. One clear action. Remove ambiguity. Match the CTA to local platform preferences."
        ]
      },
      {
        title: "10 Hook Starters (Fill in the Blanks)",
        type: "bullets",
        items: [
          "\"Stop [doing X] if you want [desired outcome].\"",
          "\"I [achieved result] in [timeframe]—here's how.\"",
          "\"The #1 mistake [target audience] make with [topic].\"",
          "\"What nobody tells you about [topic/industry].\"",
          "\"[Number] [target audience] are already [doing X]. Are you?\"",
          "\"This [product/strategy] changed everything for me.\"",
          "\"POV: You finally [achieved desired outcome].\"",
          "\"If you're [pain point], you need to see this.\"",
          "\"[Authority figure] says [contrarian statement].\"",
          "\"[Surprising statistic] about [topic] will shock you.\""
        ]
      },
      {
        title: "Example: UAE Bilingual Ad",
        type: "examples",
        items: [
          "HOOK (English + Arabic): 'Your skincare routine is missing this. روتينك ناقص شي مهم.' — Uses bilingual approach to maximize reach, creates curiosity gap.",
          "RELATABLE MOMENT: 'You've tried the expensive creams. The trending serums. Still waking up to dull skin.' — Connects with frustration of high-effort, low-result skincare.",
          "BENEFIT: 'Wake up to glass skin—without a 10-step routine.' — Specific, desirable outcome. Addresses effort objection.",
          "PROOF: 'Over 5,000 women across Dubai and Abu Dhabi have made the switch. See their results.' — Local social proof + invitation to see evidence.",
          "OFFER: 'Try our Glow Kit for 30 days. If you don't see the difference, full refund.' — Clear offer with risk reversal.",
          "CTA: 'Tap 'Shop Now' and get free delivery across UAE.' — Clear action + local fulfillment benefit."
        ]
      },
      {
        title: "Mobile Readability Checklist",
        type: "checklist",
        items: [
          "Hook visible without scrolling (first 125 characters on Instagram)",
          "Each section 1-2 short sentences max",
          "Benefit stated within first 3 seconds of read time",
          "Proof is scannable (numbers, names, specific claims)",
          "Offer is crystal clear—no confusion about what they get",
          "CTA uses action verb and matches platform norms",
          "Text breaks every 2-3 lines for visual breathing room",
          "No jargon or complex language—8th grade reading level",
          "Tested by reading aloud—if it stumbles, simplify"
        ]
      },
      {
        title: "CTA Library by Channel",
        type: "examples",
        items: [
          "WHATSAPP CTAs: 'Message us now to get started.' | 'Tap to chat—we reply in minutes.' | 'Send 'INFO' to get your free guide.'",
          "WEBSITE CTAs: 'Shop now and get free shipping.' | 'Start your free trial.' | 'See pricing and plans.'",
          "LEAD FORM CTAs: 'Get your free quote.' | 'Book your spot.' | 'Download the guide.' | 'Join the waitlist.'"
        ]
      }
    ],
    commonMistakes: [
      "Writing hooks that are clever but not clear—confusion kills conversion faster than boredom",
      "Skipping the relatable moment and jumping straight to selling—empathy builds trust",
      "Stacking multiple CTAs—one clear action outperforms choice paralysis every time",
      "Using generic proof ('best-selling', 'popular')—specific beats vague",
      "Writing for desktop when 80%+ will view on mobile—test readability on phone before publishing"
    ],
    proTips: [
      "Write 10 hooks for every ad, pick the top 2 to test. Hook testing is the highest-leverage optimization.",
      "Read your ad aloud in one breath—if you can't, it's too long. Mobile viewers skim, not read.",
      "Screenshot competitors' best-performing ads and reverse-engineer their hook-to-CTA structure."
    ],
    nextAction: "Log in and generate 3 hook variants for your next campaign using the framework above."
  },

  "90-second-audit-framework": {
    id: "90-second-audit-framework",
    title: "90-Second Audit Framework",
    tag: "Framework",
    readTime: "3 min read",
    quickStart: [
      "Pull up an underperforming ad (low CTR, low conversion, high cost-per-result)",
      "Set a 90-second timer and audit in three 30-second phases",
      "Identify the weakest phase and apply the corresponding fixes"
    ],
    sections: [
      {
        title: "When to Use This Framework",
        type: "bullets",
        items: [
          "When an ad is live but underperforming and you need to diagnose quickly",
          "During creative reviews to give fast, actionable feedback",
          "Before launching—catch problems before spending budget"
        ]
      },
      {
        title: "The 90-Second Audit (Timer-Based)",
        type: "steps",
        items: [
          "0-30 SECONDS: Clarity Check — Can you answer these instantly: What is being sold? Who is it for? Why should they care? If any answer takes more than 2 seconds to find, the ad lacks clarity. Check: headline, visual, first line of copy.",
          "30-60 SECONDS: Trust Check — Is there proof? (Testimonials, numbers, demonstrations, credentials) Does it look professional? (Design quality, grammar, brand consistency) Is there risk reversal? (Guarantees, free trials, easy returns)",
          "60-90 SECONDS: Conversion Path Check — Is the CTA clear and visible? Is there only ONE action to take? Does the CTA match the platform? (WhatsApp for Kenya, direct purchase for UAE, lead form for Canada) Is the landing page/destination aligned with the ad promise?"
        ]
      },
      {
        title: "If X, Then Y: Quick Fixes",
        type: "bullets",
        items: [
          "If headline is confusing → Rewrite to answer 'What is this and why should I care?' in 8 words or less",
          "If visual doesn't match message → Use product shot or outcome image that reinforces headline",
          "If no clear target audience → Add specificity ('For busy parents' not 'For everyone')",
          "If no proof → Add one testimonial, one number, or one demonstration",
          "If design looks amateur → Simplify: fewer fonts, more whitespace, consistent colors",
          "If grammar errors → Fix immediately—errors destroy credibility",
          "If no risk reversal → Add guarantee, free trial, or easy return policy",
          "If multiple CTAs → Pick one. Remove the rest.",
          "If CTA is buried → Make it larger, above the fold, contrasting color",
          "If CTA doesn't match platform → Change 'Shop Now' to 'Message Us' for WhatsApp markets",
          "If landing page doesn't match → Update landing page or change ad to match current landing page"
        ]
      },
      {
        title: "Example: Diagnosing a Failing Kenya Ad",
        type: "examples",
        items: [
          "THE AD: A fitness app promotion with headline 'Get Fit Today', stock gym photo, generic copy about 'premium workouts', CTA 'Download Now' leading to App Store.",
          "CLARITY AUDIT (0-30s): Headline is vague—'Get Fit' could be any fitness product. Visual is stock photo that feels foreign (Western gym, non-diverse). First line doesn't specify what the app does or who it's for. VERDICT: Fails clarity.",
          "TRUST AUDIT (30-60s): No testimonials. No user numbers. No local social proof. Design is clean but generic. No risk reversal or free trial mention. VERDICT: Weak trust.",
          "CONVERSION AUDIT (60-90s): CTA is clear but mismatched—Kenyan users prefer WhatsApp or mobile web over App Store downloads. Landing destination adds friction. VERDICT: Poor conversion path.",
          "THE FIX: New headline: 'Train like a champion—anywhere in Nairobi.' Visual: Local gym or home workout scene, Kenyan users. Copy: 'Join 15,000+ Kenyans getting fit at home.' Social proof + local testimonial. CTA: 'Start free—pay with M-Pesa' leading to mobile-optimized web signup. Add risk reversal: 'Try 7 days free, cancel anytime.'"
        ]
      },
      {
        title: "90-Second Audit Checklist",
        type: "checklist",
        items: [
          "Clarity: What's being sold is obvious within 2 seconds",
          "Clarity: Target audience is specific and identifiable",
          "Clarity: Value proposition is clear and compelling",
          "Trust: At least one form of proof is present",
          "Trust: Design looks professional and on-brand",
          "Trust: Risk reversal or guarantee mentioned",
          "Conversion: CTA is clear, visible, and uses action verb",
          "Conversion: Only ONE action requested",
          "Conversion: CTA matches local platform preferences",
          "Conversion: Destination aligns with ad promise"
        ]
      }
    ],
    commonMistakes: [
      "Spending too long auditing—90 seconds forces prioritization; if you can't find issues fast, neither can viewers",
      "Trying to fix everything at once—identify the weakest phase and fix that first",
      "Assuming the problem is the ad when it's the landing page—always check the full conversion path",
      "Ignoring platform context—an ad that works on Instagram may fail on TikTok due to different user expectations",
      "Skipping the audit before launch—it's much cheaper to catch problems before spending ad budget"
    ],
    proTips: [
      "Record yourself doing the audit aloud—you'll catch more issues when you verbalize your thoughts.",
      "Keep a 'before/after' swipe file of ads you've fixed—patterns emerge that speed up future audits.",
      "Audit competitor ads with this framework to understand why their best performers work."
    ],
    nextAction: "Log in and audit your next 3 ad variants in under 5 minutes—apply the quick fixes before launching."
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
  "Content Calendar Template": "content-calendar-template",
  "Cultural Cue Framework": "cultural-cue-framework",
  "Offer Localization Framework": "offer-localization-framework",
  "Hook-to-CTA Framework": "hook-to-cta-framework",
  "90-Second Audit Framework": "90-second-audit-framework"
};
