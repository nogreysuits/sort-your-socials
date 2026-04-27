export const COLORS = {
  teal: "#00adb0",
  coral: "#fc6f65",
  yellow: "#fdd900",
  orange: "#fa7a39",
};

export const DAY_COLORS = [COLORS.teal, COLORS.coral, COLORS.yellow, COLORS.orange, COLORS.teal];

export const DAYS = [
  {
    num: 1,
    title: "The Audit",
    subtitle: "What's actually going on with your socials right now",
    sections: [
      {
        heading: "The Basics",
        questions: [
          { id: "business_name", type: "text", label: "What's your business name?", placeholder: "e.g. No Grey Suits" },
          { id: "business_what", type: "textarea", label: "In one or two sentences, what does your business do and who do you do it for?", placeholder: "e.g. I'm a wedding photographer for couples who hate posed photos. I make social media less painful for small business owners." },
          { id: "website_url", type: "text", label: "What's your website URL? (So we can tailor your plan to your actual offers.)", placeholder: "e.g. www.yourbusiness.com.au" },
          { id: "platforms_on", type: "multi", label: "Which platforms do you have an account on?", options: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "Pinterest", "Threads", "X / Twitter"] },
          { id: "platforms_active", type: "multi", label: "Which ones are you actually active on? (Be honest.)", options: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "Pinterest", "Threads", "X / Twitter", "None of them, really"] },
          { id: "platforms_dread", type: "multi", label: "Which ones do you dread opening?", options: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "Pinterest", "Threads", "X / Twitter", "All of them"] },
          { id: "last_post", type: "select", label: "When was the last time you posted on your main platform?", options: ["Today or yesterday", "This week", "This month", "A few months ago", "I genuinely can't remember"] },
        ],
      },
      {
        heading: "The Numbers (no judgement zone)",
        description: "Go check. I'll wait. Don't guess  - actually look.",
        questions: [
          { id: "followers_main", type: "text", label: "How many followers on your main platform?", placeholder: "e.g. 340" },
          { id: "avg_likes", type: "text", label: "Average likes on your last 5 posts?", placeholder: "e.g. 12" },
          { id: "avg_comments", type: "text", label: "Average comments on your last 5 posts?", placeholder: "e.g. 2" },
          { id: "enquiries_social", type: "select", label: "How many DMs or enquiries from social media in the last 3 months?", options: ["None", "1-3", "4-10", "More than 10", "No idea"] },
        ],
      },
      {
        heading: "The Content Check",
        description: "Scroll through your last 10 posts and be real with yourself.",
        questions: [
          { id: "content_mix", type: "select", label: "Most of your recent posts are:", options: ["Educational / tips", "Personal / behind the scenes", "Selling something", "Reshares of other people's stuff", "A chaotic mix of all of the above", "There aren't 10 recent posts to look at"] },
          { id: "best_post", type: "textarea", label: "What was your best performing post in the last 3 months? What was it about?", placeholder: "Describe it briefly  - topic, format, what made it work" },
          { id: "favourite_post", type: "textarea", label: "Which post did you actually enjoy making the most?", placeholder: "Even if it didn't perform well" },
        ],
      },
      {
        heading: "The Honest Bit",
        questions: [
          { id: "bio_clear", type: "select", label: "Does your bio clearly say what you do and who you help?", options: ["Yes, it's clear", "Sort of, but it could be better", "It says my job title and that's about it", "It's a motivational quote and a sunset emoji"] },
          { id: "stranger_test", type: "select", label: "If a stranger landed on your profile, would they know what your business does within 5 seconds?", options: ["Yes", "Probably not", "They'd think I'm a lifestyle blogger", "They'd have no idea"] },
          { id: "photo_current", type: "select", label: "Is your profile photo current and does it actually look like you?", options: ["Yes, recent and recognisable", "It's me but from a few years ago", "It's my logo", "It's my dog / kid / a sunset", "I don't have one"] },
          { id: "links_current", type: "select", label: "Are your links up to date?", options: ["Yes, all good", "Probably not, haven't checked in a while", "What links?"] },
        ],
      },
    ],
  },
  {
    num: 2,
    title: "Your Content DNA",
    subtitle: "What you actually want to say and who you're saying it to",
    sections: [
      {
        heading: "Who Are You Talking To?",
        description: "Not 'everyone.' An actual person. Think of your favourite client, or the person you wish would find you.",
        questions: [
          { id: "ideal_client", type: "textarea", label: "Describe your ideal client like you're telling a friend about them. What's stressing them out? What have they tried that hasn't worked?", placeholder: "e.g. She's a yoga teacher who hates Instagram but knows she needs it. She's tried posting every day and burned out in two weeks..." },
          { id: "client_scrollstop", type: "textarea", label: "What would make them stop scrolling and go 'oh, that's me'?", placeholder: "What's the sentence that would make them feel seen?" },
          { id: "client_need_to_hear", type: "textarea", label: "What do they need to hear that nobody's saying?", placeholder: "The thing you wish you could tell every one of them" },
        ],
      },
      {
        heading: "What Do You Actually Want To Talk About?",
        questions: [
          { id: "topics", type: "textarea", label: "List 3-4 topics you could talk about for 10 minutes without any prep. These are your zones.", placeholder: "e.g. 1. Why small businesses overthink content\n2. Video confidence\n3. Working from home with kids\n4. Using AI tools without losing your voice" },
          { id: "spicy_opinions", type: "textarea", label: "For each topic above, write one opinion you have that not everyone agrees with.", placeholder: "e.g. You don't need to post every day. Hashtags are dead. Canva templates are making everyone look the same." },
          { id: "personal_comfort", type: "multi", label: "What personal stuff are you comfortable sharing?", options: ["Family / kids", "Behind the scenes of work", "Fails and mistakes", "Pets", "Home / workspace", "Opinions and hot takes", "Mental health / neurodivergence", "Wins and celebrations", "Hobbies", "I'd rather keep it strictly business"] },
        ],
      },
      {
        heading: "The Vibe Check",
        questions: [
          { id: "audience_feel", type: "multi", label: "When someone reads your content, how do you want them to feel? (Pick 2-3)", options: ["Seen / understood", "Entertained", "Motivated", "Educated", "Connected", "Relieved", "Inspired", "Like they found their person"] },
          { id: "content_inspiration", type: "textarea", label: "Name a brand or person whose content you love. What is it about their stuff that draws you in?", placeholder: "e.g. I love how [person] makes complex stuff feel simple and funny" },
          { id: "never_sound_like", type: "textarea", label: "What do you never want your content to sound like?", placeholder: "e.g. Corporate, salesy, try-hard, boring, like a textbook..." },
        ],
      },
    ],
  },
  {
    num: 3,
    title: "The Real Life Posting Plan",
    subtitle: "A plan that fits your actual capacity, not your fantasy one",
    sections: [
      {
        heading: "Time Reality Check",
        description: "Not how much time you think you should have. How much you actually have.",
        questions: [
          { id: "hours_per_week", type: "select", label: "How many hours per week can you realistically spend on content?", options: ["Less than 1 hour", "1-2 hours", "2-4 hours", "4-6 hours", "More than 6 hours"] },
          { id: "best_days", type: "multi", label: "What days are easiest for you to create content?", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "It changes every week honestly"] },
          { id: "batch_or_moment", type: "select", label: "Are you a batch creator or an 'in the moment' person?", options: ["Batch  - give me one block and I'll smash out a week's worth", "In the moment  - I post when inspiration hits", "A messy combination of both", "Neither. I just don't create content."] },
          { id: "brain_time", type: "select", label: "What time of day does your brain actually cooperate?", options: ["Early morning", "Mid morning", "Lunchtime-ish", "Afternoon", "Evening after the kids are asleep", "It's completely unpredictable"] },
        ],
      },
      {
        heading: "Your Posting Rhythm",
        questions: [
          { id: "posts_per_week", type: "select", label: "How many posts per week can you commit to for the next 3 months? (Not wish. Will.)", options: ["1 per week", "2 per week", "3 per week", "4-5 per week", "Let's be real, I'll be lucky to do fortnightly"] },
          { id: "priority_platform", type: "select", label: "Which ONE platform is your priority?", options: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "I genuinely don't know"] },
          { id: "easiest_format", type: "multi", label: "Rank these from 'yeah I can do that' to 'I'd rather eat glass'. Pick all you're willing to do.", options: ["Text posts / captions", "Photo + caption", "Short video / Reel", "Carousel / multi-image", "Stories", "Going live"] },
        ],
      },
      {
        heading: "The 'I Fell Off' Plan",
        description: "Because you will miss a week. That's fine. Let's plan for it now.",
        questions: [
          { id: "comeback_post", type: "textarea", label: "When you miss a week (because you will), what's your one-post comeback? Write it now so future-you doesn't have to think.", placeholder: "e.g. A photo of my desk with a caption about getting back to it. A reel about what I've been working on behind the scenes..." },
          { id: "emergency_post", type: "textarea", label: "What's the smallest piece of content you can make in under 10 minutes? That's your emergency post.", placeholder: "e.g. A text post with a quick opinion. A story poll. A photo of my workspace..." },
        ],
      },
    ],
  },
  {
    num: 4,
    title: "The Content Sprint",
    subtitle: "Enough planning. We're actually making something today.",
    sections: [
      {
        heading: "Pick Your Prompt",
        description: "Choose ONE of these and make it today. Not tomorrow. Today. It doesn't have to be perfect. It has to exist.",
        questions: [
          { id: "sprint_choice", type: "select", label: "Which format are you going for?", options: ["Text post or caption (no image needed)", "Photo + caption (use your phone, right now)", "Reel or short video (under 60 seconds)", "Carousel or multi-image", "Story (casual, low pressure)"] },
        ],
      },
      {
        heading: "Your Content",
        description: "Write it, film it, make it. Then come back here and tell me you did it.",
        questions: [
          { id: "sprint_topic", type: "textarea", label: "What's the topic or idea you're going with?", placeholder: "e.g. A hot take about my industry, a behind the scenes of my day, a tip I always give clients..." },
          { id: "sprint_hook", type: "textarea", label: "What's your opening line / hook?", placeholder: "The first sentence someone reads or hears. Make it something that stops the scroll." },
          { id: "sprint_caption", type: "textarea", label: "Write your caption or script here. Use this as your draft.", placeholder: "Just get it out. You can tweak it before posting but get the first draft down now." },
          { id: "sprint_posted", type: "select", label: "Have you posted it?", options: ["YES! It's live!", "Not yet but I'm about to", "I've drafted it and I'll post it today", "I'm scared but I'm doing it", "I need a minute"] },
        ],
      },
    ],
  },
  {
    num: 5,
    title: "The Anti-Fall-Off Setup",
    subtitle: "Making this stick past Friday",
    sections: [
      {
        heading: "Staying Organised",
        questions: [
          { id: "ideas_location", type: "select", label: "Where are you going to keep your content ideas so you actually find them later?", options: ["Notes app on my phone", "A Monday board", "A Google Doc", "A notebook on my desk", "A Trello board", "I'll figure it out (no you won't, pick one)"] },
        ],
      },
      {
        heading: "Systems That Help",
        questions: [
          { id: "scheduling_approach", type: "select", label: "Are you going to schedule posts in advance or post in real time?", options: ["Schedule in advance  - I need the structure", "Real time  - I post when I'm ready", "A bit of both", "What's scheduling?"] },
          { id: "reminder_set", type: "select", label: "Have you set a recurring reminder in your phone for your content creation day?", options: ["Done!", "I'll do it right now", "I'll do it later (narrator: she did not do it later)", "I don't need a reminder (narrator: she did need a reminder)"] },
        ],
      },
      {
        heading: "The Permission Slip",
        questions: [
          { id: "good_enough", type: "textarea", label: "Write down what 'good enough' looks like for your content. Not perfect. Good enough.", placeholder: "e.g. It sounds like me. It's not a Canva masterpiece but the message is clear. I didn't spend 3 hours on it." },
          { id: "biggest_difference", type: "textarea", label: "What's the one thing from this week that made the biggest difference?", placeholder: "Could be a mindset shift, a practical tool, or just the kick up the bum you needed" },
          { id: "keep_doing", type: "textarea", label: "What's the one thing you're going to keep doing after this challenge?", placeholder: "Pick one. Just one. Make it stick." },
          { id: "still_stuck", type: "textarea", label: "Is there anything you're still stuck on?", placeholder: "Be honest  - this helps me know what to help with next" },
        ],
      },
    ],
  },
];
