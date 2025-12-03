import { CoreValue, SocialPlatform, StatMetric, Testimonial } from './types';

export const SOCIALS: SocialPlatform[] = [
  { name: 'Facebook', handle: 'brysonwanner', url: 'https://www.facebook.com/brysonwanner/', icon: 'facebook', followers: '1.2K' },
  { name: 'YouTube', handle: 'Bryson bHealthy', url: 'https://www.youtube.com/channel/UCOfyeHA9F8RzLqLVUZ8nfbw/', icon: 'youtube', followers: '1.1K' },
  { name: 'TikTok', handle: '@brysonbhealthy', url: 'https://www.tiktok.com/@brysonbhealthy', icon: 'tiktok', followers: '1.5K' },
  { name: 'Instagram', handle: '@brysonbhealthy', url: 'https://www.instagram.com/brysonbhealthy/', icon: 'instagram', followers: '1.1K' },
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    shortDef: "Honesty & Moral Uprightness",
    fullDef: "The quality of being honest and having strong moral principles; moral uprightness. This value is foundational, ensuring actions align with beliefs, and also encompasses the commitment to consistently be true to the person one publicly claims to be.",
    iconName: "ShieldCheck"
  },
  {
    title: "Charity",
    shortDef: "Benevolent Goodwill",
    fullDef: "A selfless, unconditional love for others. Emulating pure love and possessing a strong desire to help others overcome personal struggles.",
    iconName: "Heart"
  },
  {
    title: "Accountability",
    shortDef: "Ownership of Choices",
    fullDef: "Taking ownership of choices and outcomes. Managing responsibility and holding others accountable for their actions with maturity.",
    iconName: "Scale"
  },
  {
    title: "Intelligence",
    shortDef: "Growth & Critical Thinking",
    fullDef: "The ability to acquire and apply knowledge. A skill fostered through continuous efforts to understand, problem solve, and make wise decisions.",
    iconName: "Brain"
  },
  {
    title: "Endurance",
    shortDef: "Resilience in Hardship",
    fullDef: "The capacity to withstand pain or difficult processes without giving way. Seeing challenges as opportunities for growth.",
    iconName: "Mountain"
  },
  {
    title: "Conviction",
    shortDef: "Standing by Principles",
    fullDef: "Firmly held beliefs that provide internal fortitude. Balanced with kindness to prevent rigidity.",
    iconName: "Flame"
  },
  {
    title: "Positivity",
    shortDef: "Constructive Mindset",
    fullDef: "Focusing on the good in situations, maintaining hope, and fostering a constructive mindset even when faced with challenging circumstances.",
    iconName: "Sun"
  },
  {
    title: "Kindness",
    shortDef: "Generosity & Consideration",
    fullDef: "Being friendly, generous, and considerate toward others. Making an effort to alleviate the suffering of others whenever possible.",
    iconName: "HeartHandshake"
  }
];

export const OVERVIEW_STATS: StatMetric[] = [
  { label: 'Total Views', value: '1M+', sub: 'Lifetime across platforms' },
  { label: 'YTD Views', value: '994K', sub: 'Year to Date' },
  { label: 'Recent Reach', value: '105.7K', growth: '+153%', sub: 'Last 90 Days' },
  { label: 'Engagement', value: '63K+', sub: 'Likes (YTD)' },
  { label: 'Followers', value: '~5K', sub: 'Total Community' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "mamagigi44",
    text: "You’re doing such a great job inspiring us all! I’ve been successful at losing weight through a calorie deficit before, but then I gained a lot of weight through illness and menopause. Now, I’m trying again to lose some weight so I can be healthier and live longer. I’m using a calorie deficit diet and exercise again and you are really helping to keep me on track and motivated. 👏"
  },
  {
    author: "Tina E Evans",
    text: "Welcome to the community and thank you for sharing! I will always be here cheering you on, supporting you and enjoying following your journey. I am on a similar journey of forging a healthier path for myself and modeling a healthier way of life for my family after my mom died at 54 largely due to food addiction and its consequences. It’s truly eye opening to see how few people really know about and understand proper nutrition. I always appreciate finding others to add to my support system. Great job and best of luck to you on your continued success! You’re worth it! ❤️"
  },
  {
    author: "Jessie Cleveland Huston",
    text: "You are inspiring and this was a great read for me. I myself am very overweight and need to make some changes. I just got done with chemo and now will have radiation.. once that is done, I really want to make small changes and work on my weight. Thank you for sharing your story"
  },
  {
    author: "Laurel ❤️🧡💛💚💙💜",
    text: "you inspired my weight loss journey. I've lost 43 lbs in 6 months. Slow and steady, gaining muscle!!"
  },
  {
    author: "ElderberryJam",
    text: "You make me realize it's possible to change and grow in ways that seem impossible."
  },
  {
    author: "McKenna Stewart",
    text: "You are REALLY good at giving weight loss advice!!"
  },
  {
    author: "chickpeamiso5280",
    text: "You are great! This is very helpful, thank you! I am especially grateful that you just got this video over with and put it out there as it is. It's Golden because you're being so genuine."
  },
  {
    author: "Dannygarciafilms",
    text: "Bro you're seriously inspiring to me!! Love how much content you've been making!"
  },
  {
    author: "Jai Nichole-Luke Miller",
    text: "I've lost 30 lbs and 3 inches around my whole body just from a calorie deficit... I've never been able to lose weight this fast in a healthy way before and I love the way im looking more and more... this also doesn't make me feel like im dying."
  },
  {
    author: "sethshingleton2794",
    text: "You're my role model man! You just don't give up. A rare quality indeed."
  },
  {
    author: "Charlie Amstone",
    text: "I really love remembering hearing you talk about your goals when you were left picture and to see you living them now with right picture. I'm very proud of you."
  },
  {
    author: "justchill6445",
    text: "Aye man thank you you are doing great work out here and I am rooting for you dog... truly the only thing that really matters in the end is how we treat others and ourself"
  },
  {
    author: "Ed Scriven",
    text: "What an awesome story with a great accomplishment after some sad and scary events. Congratulations on your successes and wishing you all the hope."
  },
  {
    author: "LeAnna Hamblin",
    text: "Your story is beautiful! I'm so grateful you continue to tell other beautiful stories through your chosen craft. My world is better because of you!🖤"
  },
  {
    author: "Traveler's Judgement 5",
    text: "You're awesome man. Keep pushing, stay consistent, let's be successful 😎💪"
  }
];