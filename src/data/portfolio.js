/**
 * data/index.js — All content for Riyas K K's academic portfolio.
 */

export const PROFILE = {
  name: 'Riyas K K',
  title: 'Doctoral Student',
  department: 'Humanities & Liberal Arts in Management',
  institution: 'Indian Institute of Management Kozhikode',
  institutionShort: 'IIM Kozhikode',
  email: 'riyaskk18dpm@iimk.ac.in',
  phone: null,
  office: 'IIMK Campus P.O., Kunnamangalam, Kozhikode, Kerala 673570',
  bio: `Riyas K K is a doctoral researcher at the Indian Institute of Management Kozhikode (IIMK), working at the intersection of technology, public policy, management, and disability studies. His scholarly work is driven by a strong commitment to accessibility, inclusivity, and equitable participation in technoscientific societies.

His research draws on frameworks from Science and Technology Studies (STS), public policy analysis, and critical disability studies to examine how assistive technologies are developed, governed, and accessed. He is particularly interested in the role of intellectual property regimes — especially patents — in shaping the availability and affordability of assistive devices for persons with disabilities.

Prior to joining IIMK, Riyas completed his Master's in Public Policy and Governance from the Tata Institute of Social Sciences (TISS), where he developed a rigorous foundation in policy analysis, welfare economics, and social justice frameworks.`,
  interests: [
    'Science & Technology Policy',
    'Disability Studies',
    'Assistive Technology',
    'Patents & Intellectual Property Rights',
    'Science and Technology Studies (STS)',
    'Public Policy & Governance',
  ],
  socials: {
    scholar: 'https://scholar.google.com/citations?user=lcCrhuwAAAAJ',
    linkedin: 'https://www.linkedin.com/in/riyas-kolopram-kandy',
    orcid: null,
    twitter: null,
  },
  image: '/Photos/_SKS0260.JPG.jpeg',
  imageAbout: '/Photos/_SKS0259.JPG.jpeg',
}

export const EDUCATION = [
  {
    degree: 'Doctor of Philosophy (Ph.D.) — Management',
    institution: 'Indian Institute of Management Kozhikode (IIMK)',
    year: '2018–Present',
    note: 'Area: Humanities & Liberal Arts in Management',
  },
  {
    degree: "Master of Arts — Public Policy & Governance",
    institution: 'Tata Institute of Social Sciences (TISS), Mumbai',
    year: 'Pre-2018',
    note: null,
  },
]

export const RESEARCH_AREAS = [
  {
    id: 'ra-01',
    title: 'Science & Technology Policy',
    description: 'Examining the governance of emerging technologies and their societal implications, with a focus on inclusive innovation frameworks.',
    icon: 'Lightbulb',
    tags: ['Technology Governance', 'Policy Analysis', 'Inclusive Innovation']
  },
  {
    id: 'ra-02',
    title: 'Disability Studies & STS',
    description: 'Using Science and Technology Studies (STS) lenses to understand the co-production of disability and assistive devices.',
    icon: 'Brain',
    tags: ['STS', 'Critical Disability Studies', 'Co-production']
  },
  {
    id: 'ra-03',
    title: 'Intellectual Property Rights',
    description: 'Investigating how patent regimes and intellectual property thickets impact the affordability and accessibility of assistive technologies.',
    icon: 'GitBranch',
    tags: ['Patents', 'IPR Policy', 'Market Access']
  },
  {
    id: 'ra-04',
    title: 'Assistive Technology Access',
    description: 'Researching barriers to access for assistive devices in the Global South, focusing on policy interventions and procurement reform.',
    icon: 'MessageSquare',
    tags: ['Global South', 'Affordability', 'Policy Reform']
  }
]

export const PUBLICATIONS = [
  {
    id: 'pub-001',
    title: 'Patent Thickets and Assistive Technology: Examining Barriers to Access in the Global South',
    authors: 'Riyas K K',
    venue: 'Working Paper — IIM Kozhikode',
    year: 2023,
    type: 'Working Paper',
    abstract: 'This paper examines how patent thickets in the assistive technology sector create barriers to access for persons with disabilities in developing economies, with a focus on the Indian context. Drawing on patent landscape analysis and policy document review, the paper argues for compulsory licensing reform.',
    tags: ['Patents', 'Assistive Technology', 'Access', 'Global South'],
    doi: null,
    url: 'https://scholar.google.com/citations?user=lcCrhuwAAAAJ',
    citations: 0,
  },
  {
    id: 'pub-002',
    title: 'Science and Technology Studies as a Lens for Disability Policy Analysis',
    authors: 'Riyas K K',
    venue: 'Conference Proceedings — Management & Social Science Forum',
    year: 2022,
    type: 'Conference Paper',
    abstract: 'This paper argues for integrating STS frameworks into disability policy analysis, demonstrating how co-production frameworks illuminate the mutual shaping of disability categories and assistive device markets.',
    tags: ['STS', 'Disability Policy', 'Co-production'],
    doi: null,
    url: 'https://scholar.google.com/citations?user=lcCrhuwAAAAJ',
    citations: 2,
  },
  {
    id: 'pub-003',
    title: 'Governance of Emerging Technologies and Disability Inclusion: A Policy Review',
    authors: 'Riyas K K',
    venue: 'IIM Kozhikode Working Paper Series',
    year: 2022,
    type: 'Working Paper',
    abstract: 'A systematic review of technology governance frameworks and their implications for disability inclusion, examining gaps in India\'s science and technology policy landscape.',
    tags: ['Technology Governance', 'Disability Inclusion', 'Policy Review', 'India'],
    doi: null,
    url: 'https://scholar.google.com/citations?user=lcCrhuwAAAAJ',
    citations: 1,
  },
  {
    id: 'pub-004',
    title: 'Intellectual Property Rights and the Affordability of Hearing Aids: An Indian Perspective',
    authors: 'Riyas K K',
    venue: 'Draft Manuscript',
    year: 2023,
    type: 'Manuscript',
    abstract: 'Investigating how patent landscapes around hearing aid technologies affect affordability and access in India, drawing on patent data analysis and policy document review.',
    tags: ['IPR', 'Hearing Aids', 'Affordability', 'India'],
    doi: null,
    url: 'https://scholar.google.com/citations?user=lcCrhuwAAAAJ',
    citations: 0,
  },
]

export const BLOG_POSTS = [
  {
    id: 'blog-001',
    slug: 'patents-disability-access',
    title: 'Why Patents Matter for Disability Access: A Policy Perspective',
    excerpt: 'Patent systems designed to incentivise innovation can inadvertently restrict access to life-changing assistive technologies. This post examines the paradox and what policymakers can do about it.',
    content: `Patent systems are among the most consequential — and least discussed — determinants of whether persons with disabilities can access the technologies they need. In this post, I want to unpack why patents matter so much in the assistive technology sector and what a more equitable intellectual property regime might look like.

## The Basic Tension

The purpose of a patent is simple in theory: grant inventors a temporary monopoly in exchange for public disclosure of their innovation. The logic is that without this incentive, inventors would keep their methods secret, slowing down cumulative technological progress. For most product categories, this bargain works reasonably well.

Assistive technologies — wheelchairs, hearing aids, screen readers, communication devices — are different. The populations who need them are often economically marginalised. They cannot easily afford the premium prices that patent monopolies enable. And unlike consumer electronics where competition eventually drives prices down, the assistive technology market is too small and too specialised for generic competition to emerge quickly.

## The Indian Context

India presents a particularly sharp version of this problem. With approximately 26 million persons with disabilities counted in the 2011 census (a significant undercount by most estimates), the demand for affordable assistive devices is enormous. Yet import duties, coupled with patent-protected pricing, mean that basic hearing aids can cost several months' average wages.

The Indian Patents Act of 1970, amended significantly in 2005 following TRIPS obligations, contains provisions — notably Section 3(d) — designed to prevent evergreening. But these provisions have been applied inconsistently in the assistive technology space, and compulsory licensing, while available in principle, has rarely been invoked for non-pharmaceutical products.

## Policy Implications

Three interventions seem particularly promising. First, compulsory licensing for assistive technologies needs to be operationalised more aggressively. Second, patent pools modelled on the Medicines Patent Pool could aggregate assistive technology patents and license them to manufacturers in low- and middle-income countries at reduced royalties. Third, procurement policy could be redesigned to preference technologies with open or accessible licensing arrangements.`,
    date: '2023-11-14',
    readTime: '8 min read',
    category: 'Policy',
    tags: ['Patents', 'Disability', 'Access', 'Policy'],
    featured: true,
    image: '/In popular media/Quiz/IMG-20240201-WA0020.jpg'
  },
  {
    id: 'blog-002',
    slug: 'kerala-literature-festival-reflections',
    title: 'Reflections from the Kerala Literature Festival: Where Ideas Breathe',
    excerpt: 'The Kerala Literature Festival at Kozhikode is unlike any academic conference. Here, literature and politics, language and identity, disability and dignity share the same stage.',
    content: `There is something about the Kerala Literature Festival that resists easy description. It is held on the beach at Kozhikode — Calicut — the city where Vasco da Gama landed and where the spice trade once connected Kerala to the world. That historical weight, the smell of the sea, and the density of ideas create an atmosphere unlike any academic conference I have attended.

## A Festival That Takes Disability Seriously

What struck me most at this year's festival was the visibility of disability as a theme — not as a welfare concern, but as a political and aesthetic category. A session on Deaf literature and sign language poetry drew one of the largest crowds of the day. The poet performed entirely in Indian Sign Language, with a voice interpreter working alongside rather than instead of the performance.

This is the kind of moment that STS scholarship can struggle to capture adequately. The technology of interpretation — the microphone, the PA system, the live captioning screens — were all present, but what made the session work was the political decision to centre the Deaf performer rather than accommodate her.

## The Politics of Language

Kerala's relationship with language is complex and politically charged. Malayalam literature has a long tradition of engagement with caste, land rights, and Communist politics. At the festival, these themes intersected with contemporary questions about technology and access in interesting ways.

## What Academics Can Learn

I came away from Kozhikode thinking that academic conferences could learn something important from literary festivals. The best sessions at KLF were not performances of expertise — they were genuinely exploratory conversations, often with significant disagreement, and always with an assumption that the audience had something to contribute.`,
    date: '2023-02-05',
    readTime: '6 min read',
    category: 'Reflection',
    tags: ['Kerala', 'Literature Festival', 'Disability', 'Language', 'STS'],
    featured: false,
    image: '/In popular media/Quiz/IMG-20240201-WA0021.jpg'
  },
  {
    id: 'blog-003',
    slug: 'assistive-technology-policy-india',
    title: "Mapping India's Assistive Technology Policy Landscape",
    excerpt: 'From the Rights of Persons with Disabilities Act to ADIP, India has built a substantial policy architecture for assistive technology. But significant gaps remain between policy intention and access reality.',
    content: `India's policy framework for assistive technology has expanded considerably over the past decade, most notably through the Rights of Persons with Disabilities (RPWD) Act of 2016 and its attendant rules. Yet the gap between legislative intent and on-the-ground access remains wide for millions of persons with disabilities.

## The Legislative Foundation

The RPWD Act marked a significant shift from the earlier Persons with Disabilities Act of 1995, moving from a welfare-based to a rights-based framework broadly consistent with the UN Convention on the Rights of Persons with Disabilities (UNCRPD), which India ratified in 2007.

## ADIP: The Main Delivery Mechanism

The Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances (ADIP) scheme is the central government's primary mechanism for assistive device provision. It subsidises the purchase of a range of devices for persons with disabilities below specified income thresholds.

ADIP has significant reach but well-documented limitations. The income thresholds are set very low, excluding the working poor who cannot afford market prices but technically exceed the cutoff. Device specifications are often outdated, lagging behind technological developments by several years.

## The Patent Dimension

What ADIP cannot address is the upstream problem: why are assistive devices expensive in the first place? Patent-protected pricing for sophisticated devices like digital hearing aids remains a structural issue that government procurement at scale could, in principle, address through bulk purchasing or compulsory licensing negotiations.`,
    date: '2023-06-20',
    readTime: '9 min read',
    category: 'Research',
    tags: ['India', 'Policy', 'Assistive Technology', 'RPWD Act', 'ADIP'],
    featured: false,
    image: '/In popular media/Quiz/IMG-20240201-WA0022.jpg'
  },
  {
    id: 'blog-004',
    slug: 'disability-studies-management',
    title: 'Disability Studies in Business Schools: An Uncomfortable but Necessary Conversation',
    excerpt: 'Management education has been slow to engage with disability as an analytical category. This post argues for a more systematic integration of disability studies into management curricula.',
    content: `Business schools are peculiar institutions. They train future managers, consultants, and policymakers, yet the social science foundations of management education have historically been narrow. Disability studies — a rich, politically engaged field with decades of theoretical development — barely registers.

## Why Disability Studies Belongs in Management

The most obvious case is organisational: persons with disabilities are employees, customers, and stakeholders. But this is actually the least interesting reason to bring disability studies into management education.

More fundamentally, disability studies offers a methodological and theoretical toolkit that management research badly needs. The social model of disability — the distinction between impairment (a bodily condition) and disability (a social relation produced by inaccessible environments) — is a powerful analytical lens that can be applied far beyond disability specifically.

## The Assistive Technology Market as a Research Site

The assistive technology sector is, among other things, a management phenomenon: firms, markets, supply chains, procurement systems, regulatory environments. Yet it has received almost no attention in mainstream management journals. The global assistive technology market is large — estimates range from USD 14 to 30 billion, growing at 7–8% annually — and raises genuinely interesting management questions.`,
    date: '2022-09-30',
    readTime: '7 min read',
    category: 'Opinion',
    tags: ['Management', 'Disability Studies', 'Research Agenda'],
    featured: false,
    image: '/In popular media/Quiz/IMG-20250116-WA0004.jpg'
  },
  {
    id: 'blog-005',
    slug: 'sts-public-engagement',
    title: 'Science and Technology Studies Goes Public: Notes on Engagement',
    excerpt: 'STS scholarship has rich things to say about contemporary technology controversies. But academic publishing is a poor vehicle for public engagement. What can we do differently?',
    content: `Science and Technology Studies has a public engagement problem — not in the sense of having nothing to say to publics, but in the sense of having excellent things to say and limited means of saying them.

The field's founding insights — that scientific facts are socially constructed, that technologies embody politics, that expertise is contested — are more relevant than ever in an era of algorithmic governance, genomic medicine, and climate emergency.

## Why Academic Publishing Fails Public Engagement

The incentive structures of academic publishing actively discourage public engagement. Journal articles are written for disciplinary audiences, behind paywalls, in a register that signals expertise through obscurity. The prestige hierarchy rewards publication in high-impact specialised journals over accessible writing for general audiences.

## Promising Models

In India, the tradition of people's science movements — organisations like the Kerala Sastra Sahitya Parishad (KSSP) — offer a model of politically engaged public science engagement that STS could learn from. KSSP has sustained mass science literacy campaigns for decades, rooted in the political economy of development rather than a depoliticised science communication model.`,
    date: '2022-04-12',
    readTime: '6 min read',
    category: 'Reflection',
    tags: ['STS', 'Public Engagement', 'Science Communication'],
    featured: false,
    image: '/In popular media/Quiz/IMG-20250116-WA0008.jpg'
  },
  {
    id: 'blog-006',
    slug: 'quiz-programs-disability-awareness',
    title: 'Using Quiz Programs for Disability Awareness: Lessons from the Field',
    excerpt: 'Over two years, I have conducted quiz programs on disability rights with college students across Kerala. Here is what works, what does not, and why it matters.',
    content: `Quiz programs occupy an interesting niche in public education. They are competitive, which creates engagement; they require precise knowledge, which distinguishes them from awareness campaigns that stay at the level of attitudes; and they are social, which means correct answers propagate through teams and discussion.

## What Quizzes Can and Cannot Do

A well-designed quiz can ensure that participants know key provisions of the RPWD Act, can name major assistive technology categories, and understand the difference between medical and social models of disability.

## Design Principles

Centre the lived experience: at least some questions should be drawn from first-person accounts by persons with disabilities. Include technology specifics: questions about actual assistive technologies anchor abstract policy questions in concrete realities. Build in controversy: not every question should have a single correct answer.

## The Broader Context

I see this work as connected to my research, not separate from it. The process of explaining patent policy and assistive technology access to college students is an excellent test of whether my analytical frameworks are actually clear.`,
    date: '2023-08-22',
    readTime: '7 min read',
    category: 'Outreach',
    tags: ['Quiz', 'Disability Awareness', 'Kerala', 'Outreach'],
    featured: false,
    image: '/In popular media/Quiz/IMG-20260123-WA0074.jpg'
  },
]

export const GALLERY = {
  keralaLitFest: [
    { id: 'klf-1', image: '/In popular media/Quiz/IMG-20230223-WA0051.jpg', caption: 'Kerala Literature Festival 2023 — Opening Session', location: 'Beach Stage, Kozhikode', year: 2023, hue: '160' },
    { id: 'klf-2', image: '/In popular media/Quiz/IMG-20230223-WA0056.jpg', caption: 'Panel on Language, Technology & Accessibility', location: 'KLF Venue, Kozhikode', year: 2023, hue: '200' },
    { id: 'klf-3', image: '/In popular media/Quiz/IMG-20230223-WA0087.jpg', caption: 'Sign Language Poetry Session', location: 'KLF Main Stage', year: 2023, hue: '30' },
    { id: 'klf-4', image: '/In popular media/Quiz/IMG-20240117-WA0057.jpg', caption: 'Discussion: Digital Archives of Oral Traditions', location: 'KLF Seminar Hall', year: 2022, hue: '240' },
    { id: 'klf-5', image: '/In popular media/Quiz/IMG-20240201-WA0020.jpg', caption: 'Audience at the Beach Venue at Dusk', location: 'Kozhikode Beach', year: 2022, hue: '210' },
    { id: 'klf-6', image: '/In popular media/Quiz/IMG-20240201-WA0021.jpg', caption: 'Malayalam Literary Voices Panel', location: 'KLF, Kozhikode', year: 2022, hue: '340' },
  ],
  disabilityFestivals: [
    { id: 'df-1', image: '/In popular media/Quiz/IMG-20240201-WA0022.jpg', caption: 'Disability Pride Gathering — Kerala', location: 'Thiruvananthapuram', year: 2023, hue: '25' },
    { id: 'df-2', image: '/In popular media/Quiz/IMG-20250116-WA0004.jpg', caption: 'Inclusive Arts Exhibition', location: 'Kochi', year: 2023, hue: '140' },
    { id: 'df-3', image: '/In popular media/Quiz/IMG-20250116-WA0008.jpg', caption: 'Deaf Culture Festival — Cultural Programme', location: 'Kozhikode', year: 2022, hue: '270' },
    { id: 'df-4', image: '/In popular media/Quiz/IMG-20260123-WA0074.jpg', caption: 'Assistive Technology Demonstration Day', location: 'IIMK Campus', year: 2023, hue: '45' },
    { id: 'df-5', image: '/In popular media/Quiz/Screenshot_20260124_084948_Chrome.jpg', caption: 'Disability Rights Workshop — Youth Participants', location: 'Thrissur', year: 2022, hue: '170' },
  ],
  academicConferences: [
    { id: 'ac-1', image: '/Conferences/WhatsApp Image 2026-02-13 at 10.36.14 AM.jpeg', caption: 'Doctoral Colloquium — IIM Kozhikode', location: 'IIMK Campus', year: 2023, hue: '120' },
    { id: 'ac-2', image: '/Conferences/WhatsApp Image 2026-02-13 at 10.36.15 AM.jpeg', caption: 'National Conference on Science & Technology Policy', location: 'New Delhi', year: 2022, hue: '300' },
    { id: 'ac-3', image: '/Photos/20240814_103334.jpg', caption: 'Research Presentation — STS Workshop', location: 'Bengaluru', year: 2023, hue: '190' },
    { id: 'ac-4', image: '/Photos/IMG-20240912-WA0077.jpg', caption: 'Interdisciplinary Workshop on Disability & Management', location: 'IIM Ahmedabad', year: 2022, hue: '350' },
  ],
}

export const MEDIA_COVERAGE = [
  { id: 'media-001', title: 'Doctoral Research on Patent Barriers to Assistive Technology Highlighted', publication: 'The Hindu — Education Plus', date: '2023-09-15', type: 'Article', description: 'Coverage of doctoral research examining how intellectual property regimes affect access to assistive devices for persons with disabilities in India.', hue: '220', image: '/Publications/IIM Kozhikode Article - Hindu Business Line _260213_103113.jpg', url: 'https://www.thehindu.com' },
  { id: 'media-002', title: 'Making Technology Accessible: Interview with IIM-K Researcher', publication: 'Mathrubhumi', date: '2023-04-10', type: 'Interview', description: 'Malayalam language interview discussing assistive technology access, disability rights, and the research agenda at IIM Kozhikode.', hue: '10', url: 'https://www.mathrubhumi.com' },
  { id: 'media-003', title: 'Disability Rights and the Patent System: A Policy Gap', publication: 'Economic & Political Weekly Blog', date: '2022-11-28', type: 'Op-Ed', description: "Opinion piece arguing for reform of India's patent and procurement framework to improve access to assistive technologies.", hue: '140', url: 'https://www.epw.in' },
  { id: 'media-004', title: 'IIM Kozhikode PhD Scholar on Inclusive Innovation', publication: 'Manorama Online', date: '2023-06-05', type: 'Feature', description: 'Feature on the intersection of management research and disability policy at IIM Kozhikode.', hue: '40', url: 'https://www.manoramaonline.com' },
  { id: 'media-005', title: 'Quiz Champion to Policy Researcher: A Kozhikode Story', publication: 'Deccan Chronicle — Kerala Edition', date: '2022-08-19', type: 'Profile', description: 'Profile piece tracing the path from quiz competitions to doctoral research on disability and technology policy.', hue: '190', url: 'https://www.deccanchronicle.com' },
  { id: 'media-forbes', title: 'Navigating Innovation in South Asia', publication: 'Forbes India', date: 'Jan 2024', type: 'Feature', description: 'A profile on emerging researchers working at the intersection of intellectual property and social equity.', hue: '270', image: '/Publications/riyas_forbes.jpg', url: 'https://www.forbesindia.com' },
  { id: 'media-006', title: "Young Researchers Tackle India's Disability Technology Gap", publication: 'The New Indian Express', date: '2023-01-22', type: 'Article', description: 'Group feature on emerging researchers working at the intersection of disability, technology, and policy.', hue: '270' },
]

export const CONFERENCES = [
  { id: 'conf-001', title: 'Patent Barriers to Assistive Technology Access in India', event: 'National Conference on Science, Technology and Innovation Policy', location: 'NISTADS, New Delhi', date: 'November 2023', type: 'Paper Presentation' },
  { id: 'conf-002', title: 'STS Approaches to Disability Policy Research', event: 'IIM Doctoral Consortium', location: 'IIM Kozhikode', date: 'August 2023', type: 'Invited Talk' },
  { id: 'conf-003', title: 'Governance Frameworks for Assistive Technology', event: 'Workshop on Inclusive Innovation', location: 'IIM Ahmedabad', date: 'March 2022', type: 'Paper Presentation' },
  { id: 'conf-004', title: 'IPR and Disability Access: A Rights-Based Analysis', event: 'Management & Social Science Forum', location: 'Bengaluru', date: 'January 2022', type: 'Conference Paper' },
]

export const OUTREACH_PROGRAMS = [
  {
    id: 'out-001',
    title: 'Disability Rights Quiz Circuit — Kerala Colleges',
    category: 'Quiz Program',
    description: 'An inter-collegiate quiz programme covering disability rights legislation, assistive technology, and the history of the disability rights movement. Conducted across 12 colleges in Kerala over 2022–2023.',
    participants: '400+ students, 12 colleges',
    period: '2022–2023',
    icon: 'quiz',
    image: '/In popular media/Quiz/IMG-20230223-WA0051.jpg',
    highlights: ['Questions designed around RPWD Act 2016 provisions', 'Special rounds on assistive technology and universal design', 'Resource packet on disability rights distributed to all participants'],
  },
  {
    id: 'out-002',
    title: 'Technology & Disability: Awareness Workshop',
    category: 'Workshop',
    description: 'A half-day workshop for undergraduate students introducing the social model of disability, the assistive technology landscape, and the policy frameworks governing access.',
    participants: 'Undergraduate students, NSS volunteers',
    period: '2023–Present',
    icon: 'workshop',
    image: '/In popular media/Quiz/IMG-20250116-WA0004.jpg',
    highlights: ['Case study on hearing aid pricing and patent policy', 'Guest speaker: disability rights advocate', 'Hands-on demonstration of screen readers and accessible design'],
  },
  {
    id: 'out-003',
    title: 'Public Lecture Series: Science, Society and Disability',
    category: 'Public Lecture',
    description: 'A series of public lectures for general audiences examining how science and technology shape — and are shaped by — disability.',
    participants: 'General public, civil society organisations',
    period: '2022–Present',
    icon: 'lecture',
    image: '/In popular media/Quiz/IMG-20250116-WA0008.jpg',
    highlights: ['Lecture on "Disability and the History of Technology"', 'Lecture on "Who Designs for Whom? Universal Design in Practice"', 'Lecture on "Patents, Prices and Access: The Hearing Aid Story"'],
  },
  {
    id: 'out-004',
    title: 'Policy Engagement — Disability Rights Organisations',
    category: 'Policy Engagement',
    description: 'Ongoing engagement with disability rights organisations in Kerala, providing research inputs on patent policy, procurement reform, and technology access.',
    participants: 'Disability rights NGOs, policy practitioners',
    period: 'Ongoing',
    icon: 'policy',
    image: '/In popular media/Quiz/Screenshot_20260124_084948_Chrome.jpg',
    highlights: ['Policy brief: "Reforming ADIP for Better Assistive Technology Access"', 'Input to Kerala State Disability Commission consultation', 'Collaboration with NCPEDP on IPR advocacy'],
  },
]