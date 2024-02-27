import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/ll.jpg';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.avif';
import cameraBackImg from '~/assets/images/baby.avif';
import gasImg from '~/assets/images/gas.avif';
import bcImg from '~/assets/images/p.jpeg';
import bc2Img from '~/assets/images/bc2.jpg';
import bc3Img from '~/assets/images/bc3.webp';
import bc4Img from '~/assets/images/bc4.webp';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>

In-person and  online <span className="hidden md:inline"></span> <span> GCSE tuition that gets results!</span> {' '}
      <span className="sm:whitespace-nowrap"></span>
    </>
  ),
  subtitle: (
    <>
   
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          
        </span>{' '}
        A team of expert tutors with 3 common values: experience, qualifications, and a desire to see your child succeed at STC.
      </span>{' '}
      One-to-one lessons, expertly matched by our client services team at a time and place that suit you.  It couldn’t be simpler.
    </>
  ),
  callToAction: {
    text: 'Book a Lesson',
    href: '/',
    icon: IconDownload,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Online Lesson',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get at <span className="whitespace-nowrap">STC</span>
      </>
    ),
    subtitle:
      "In 2023, 87% of our students exceeded their predicted grades. Trusted by schools, local authorities and parents alike.",
    tagline: '',
  },
  items: [
    {
      title: 'Personalised programmes',
      description:
        "Speak to our knowledgeable client services team, who help 1000s of clients find tutoring solutions tailored to them.",
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Book now',
        href: '/',
      },
    },
    {
      title: 'Expertly matched O & A level tutors',
      description:
        "One-to-one lessons, expertly matched by our client services team at a time and place that suit you.  It couldn’t be simpler.",
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'In-person and online tutoring',
      description:
        'A team of expert tutors with 3 common values: experience, qualifications, and a desire to see your child succeed.',
      icon: IconListCheck,
      callToAction: {
        text: 'Learn more',
        href: '/',
      },
    },
    {
      title: 'A-level tuition',
      description:
        'Our tutors focus on where the gaps are working in a way that works for the individual teenager.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'GCSE tutoring',
      description:
        "Whether you want a quick confidence booster, help with a specific GSCE topic, revision support or a more extended programme, we can find the right tutor for you.",
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Learn more',
        href: '/',
      },
    },

  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Tutors you can trust',
    subtitle: ' Highly experienced and qualified tutors.',
    tagline: '',
  },
  content:
    "We're very (very) picky about who we let tutor. They're experts in over 10 subjects from O up to A Level. Because they're from  uni, they studied (and aced) the same courses as your teen in the last few years. So they explain tricky concepts in a way teens understand - and they double as cool older role models.",
  items: [
    {
      title: 'Trusted by parents & teachers',
      description:
        'And because our tutors get such good results, schools use them to support their teaching. We work with 20+ across the Zim, targeting learning gaps and helping teens everywhere achieve their goals.',
    },
    {
      title: 'Help every step of the way',
      description:
        'We’re always on hand to listen, answer questions and give you the tailored support you need.',
    },
    {
      title: 'At-home visits',
      description:
        'Prefer to see a tutor in your own home? Appointments available 24/7 within Sandton',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Our tutors are experts in the respective subject field, having studied it to degree level, and are highly passionate about it too! Our GCSE tutors promote structured learning and revision, and ultimately foster enjoyment and success.',
  items: [
    {
      title: 'Zimsec and Cambridge Exam Preparation',
    },
    {
      title: 'Comprehensive Subject Coverage',
    },
    {
      title: 'Inspiring Beyond the Syllabus',
    },
    {
      title: 'Revision Materials & Resources',
    },
    {
      title: 'Excellence in one place',
    },
    {
      title: 'Small groups',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Three simple steps to booking your lessons .',
  },
  items: [
    {
      title: 'Step 1: Click on book lesson link',
      description:
        'This will take you to our school calendar with all available slots',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2: Select your days and time slots',
      description:
        'You can days you want to have your lessons and the time thats convinient for you',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3: Wait for approval email',
      description:
        'Once your booking is approved you will get an email of approval',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      "Your trust is our top concern, so read our client's reviews.",
  },
  testimonials: [
    {
      name: 'Tayla Kanengoni',
      job: 'A level',
      testimonial: `I was transformed from an average student to a prize-winner in less than a year. My tutor was comfortable explaining both basic and complex concepts – in both areas his enthusiasm for the subject is plain to see, through his genuinely passionate teaching style. `,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Moyo',
      job: 'Parent of an O level',
      testimonial: `I thought you would like to know that our son has had some good results. He got all A’s in Maths, Chemistry and Music. Many thanks for this and please pass our thanks on to his tutors`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Mpofu',
      job: 'O level',
      testimonial: `I wouldn’t have been able to do it without Cambridge Tutors. Others have tried to explain things but it just didn’t click; my tutor said it in a way I could understand.`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Gara',
      job: 'O level student',
      testimonial: `My tutor’s personal and thorough teaching style has been without a doubt a deciding factor towards my being accepted to study at Imperial. He is an excellent teacher and a life mentor who will undoubtedly guide any student towards reaching his/her full potential, inspiring confidence and ultimately excellence.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Nyoni',
      job: 'Parent of an A level student',
      testimonial: `Our daughter got an A* in A level Maths. Once again thank you for the timely help and guidance. I need to speak to you about Biology and Chemistry tuition`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
 
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Want to know more? ',
    tagline: '',
  },
  items: [
    {
      title: "Are your tutors experienced in teaching curriculum?",
      description: `
      Absolutely. Our team of online tutors comprises experienced educators who are well-versed in the curriculum and assessment criteria. The qualified teacher that you’ll be paired with will posses a deep understanding of the subjects they teach and are skilled in guiding students through the syllabus, providing effective explanations, and offering exam-specific strategies.
      `,
    },
    {
      title: "Can your tutors help with exam techniques and study skills?",
      description: `

      Certainly. Our tutors not only focus on imparting subject content but also on enhancing essential study skills and exam techniques. From time management during exams to effective note-taking, our aim is to equip students with the tools needed to approach exams with confidence and perform at their best.
      `,
    },
    {
      title: "Is online tuition effective?",
      description: `Absolutely, online tutoring at STC has proven to be highly effective. We've harnessed the power of digital platforms to create an engaging and interactive learning environment that mirrors the benefits of in-person tutoring. Our experienced tutors are adept at delivering personalised instruction, tailored to individual student needs, through virtual channels.`,
    },
    {
      title: "Do you offer a first trial lesson?",
      description: `Our first lesson will be free, however we remain in constant contact with both our clients and tutors and are more than happy to re-arrange or re-assign you a new tutor if you are unhappy for any reason. `,
    },
  
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Please note these are starting prices and actual may vary. You can visit or contact us for specified prices.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'O level',
      price: 25,
      period: '45 mins',
      items: [
        {
          description: 'Exam Preparation',
        },
        {
          description: 'Comprehensive Subject Coverage',
        },
        {
          description: 'Guidance on coursework ',
        },
        {
          description: 'Course and revision materials',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Book',
        href: '/',
      },
      hasRibbon: false,
     
    },
    {
      title: 'A level',
      price: 50,
      period: '45 mins',
      items: [
        {
          description: 'Individualised attention',
        },
        {
          description: 'Comprehensive Subject Coverage',
        },
        {
          description: 'Guidance on coursework',
        },
        {
          description: 'Exam Preparation',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Book',
        href: '/',
      },
      hasRibbon: false,

    },
 
    {
      title: 'Online only',
      subtitle: '',
      price: 40,
      period: '45 mins',
      items: [
        {
          description: 'Exam Preparation',
        },
        {
          description: 'Comprehensive Subject Coverage',
        },
        {
          description: 'Guidance on coursework ',
        },
        {
          description: 'Course and revision materials',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Book',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'The team manages the day-to-day operations and the strategy of the hospital.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Sir Frank',
      occupation: 'Commercials',
      image: {
        src: bcImg,
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Sir Benhura',
      occupation: 'Sciences',
      image: {
        src: bcImg,
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Dont hesitate to call us',
    //tagline: 'Contact',
  },
  content:
    'Get in touch with STC. Our specially trained advisors are ready to help with your query today by phone or online.',
  items: [
    {
      title: 'Our Address',
      description: ['1164 2nd Ave Snadton, Mt Hampden', 'Harare, Zim'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +263 783 596 501', 'Mail: sirfrank.stc@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Sunday: 08:00 - 19:00', 'Saturday & Sunday: 08:00 - 17:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Articles and newsletter',
  subtitle:
    'Join thousands of our clients who get in-depth articles (on Fridays) and hand-picked health tips (every month):',
  callToAction: {
    text: 'Teachers blog',
    href: 'h',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Teachers blog',
      description: "Read Sir Frank's blog posts ",
      href: '/',
    },
    {
      title: 'Students blog',
      description: 'Health advice from your care givers.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Subscribe to our newsletter and receive health updates right into your inbox',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
