import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';
import {
  features4Services,
  features5Services,
} from '~/shared/data/pages/services.data';
import BlogCarousel from '~/components/BlogCarousel';
import { BlogItemProps } from '~/components/blog';
import BlogFeaturedHero from '~/components/BlogFeaturedHero';
import Features4 from '~/components/widgets/Features4';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {

   
  let data1: BlogItemProps = {
    id: 1,
  date: '2024-02-27T08:10:00Z',
  modified: "2024-02-27T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "Personalised programmes",
  },
  content: {
    rendered: "The London Clinic has been a registered charity since 1935. We proudly demonstrate our commitment to our charitable status through reinvesting any surplus income back into the hospital. ",
    markdown: "default",
    protected: true,
  },
  excerpt: {
    rendered: "We understand that each student is unique..",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url:  "/images/f1.avif",
  total_views_count: 2,  
  }


  let data2: BlogItemProps = {
    id: 2,
    date: '2024-02-27T08:10:00Z',
  modified: "2024-02-27T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "Expertly matched GCSE tutors",
  },
  content: {
    rendered: "Exceptional patient care is a way of life for us.",
    markdown: "Exceptional patient care is a way of life for us.",
    protected: true,
  },
  excerpt: {
    rendered: "Our tutors are highly experienced and work closely with students on a one-on-one basis.",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url:  "/images/f2.avif",
  total_views_count: 2,  
  }

  let data3: BlogItemProps = {
    id: 3,
    date: '2024-02-27T08:10:00Z',
  modified: "2024-02-27T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "In-person and online GCSE tutoring",
  },
  content: {
    rendered: "We work together as one to guide you through each step of your experience",
    markdown: "We work together as one to guide you through each step of your experience",
    protected: true,
  },
  excerpt: {
    rendered: "Our tutors are experts in the respective subject field,",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url:  "/images/f3.avif",
  total_views_count: 2,  
  }

  let data4: BlogItemProps = {
    id: 4,
    date: '2024-02-27T08:10:00Z',
  modified: "2024-02-27T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "GCSE Exam Preparation",
  },
  content: {
    rendered: "We proudly demonstrate our commitment to our charitable status",
    markdown: "We proudly demonstrate our commitment to our charitable status",
    protected: true,
  },
  excerpt: {
    rendered: "We strongly believe that school is about more than the curriculum,",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url:  "/images/f4.avif",
  total_views_count: 2,  
  }


  let data5: BlogItemProps = {
    id: 5,
    date: '2024-02-07T08:10:00Z',
  modified: "2019-10-25T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "default",
  },
  content: {
    rendered: "default",
    markdown: "default",
    protected: true,
  },
  excerpt: {
    rendered: "default",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url: "https://images.unsplash.com/photo-1565307528294-f70f3c7094e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  total_views_count: 2,  
  }

  const featuredData: BlogItemProps[] = [data1, data2, data3, data4, data5]


  return (
    <>
       <div className="mx-auto  dark:bg-slate-900 md:max-w-7xl md:px-4 sm:px-6">
      <BlogFeaturedHero data={featuredData} />
      </div>

      {/* <SocialProof {...socialProofHome} /> */}
      <Hero {...heroHome} />
   
     
      {/* <BlogCarousel/> */}
   
      <Features  {...featuresHome} />
  
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
