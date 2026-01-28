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
  }
};

// Map card titles to content IDs
export const titleToContentId: Record<string, string> = {
  "Market Localization Playbook": "market-localization-playbook",
  "Brand Vault Setup Guide": "brand-vault-setup-guide",
  "Ad Creative QA Checklist": "ad-creative-qa-checklist",
  "Launch in 7 Days": "launch-in-7-days"
};
