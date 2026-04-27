export function buildPrompt(answers) {
  const a = answers;
  let p = `Here are someone's answers from a 5-day social media challenge for small business owners. Generate them a personalised content plan.\n\n`;

  p += `## DAY 1 — AUDIT\n`;
  p += `Business name: ${a.business_name || "Not specified"}\n`;
  p += `What the business does: ${a.business_what || "Not specified"}\n`;
  p += `Website: ${a.website_url || "Not provided"}\n`;
  p += `Platforms they're on: ${(a.platforms_on || []).join(", ") || "Not specified"}\n`;
  p += `Actually active on: ${(a.platforms_active || []).join(", ") || "Not specified"}\n`;
  p += `Dread opening: ${(a.platforms_dread || []).join(", ") || "Not specified"}\n`;
  p += `Last post: ${a.last_post || "Not specified"}\n`;
  p += `Followers on main platform: ${a.followers_main || "Not specified"}\n`;
  p += `Average likes: ${a.avg_likes || "Not specified"}\n`;
  p += `Average comments: ${a.avg_comments || "Not specified"}\n`;
  p += `Enquiries from social: ${a.enquiries_social || "Not specified"}\n`;
  p += `Content mix: ${a.content_mix || "Not specified"}\n`;
  p += `Best performing post: ${a.best_post || "Not specified"}\n`;
  p += `Favourite post to make: ${a.favourite_post || "Not specified"}\n`;
  p += `Bio clarity: ${a.bio_clear || "Not specified"}\n`;
  p += `Stranger test: ${a.stranger_test || "Not specified"}\n`;
  p += `Profile photo: ${a.photo_current || "Not specified"}\n`;
  p += `Links current: ${a.links_current || "Not specified"}\n`;

  p += `\n## DAY 2 — CONTENT DNA\n`;
  p += `Ideal client description: ${a.ideal_client || "Not specified"}\n`;
  p += `What stops their scroll: ${a.client_scrollstop || "Not specified"}\n`;
  p += `What they need to hear: ${a.client_need_to_hear || "Not specified"}\n`;
  p += `Topics they can talk about: ${a.topics || "Not specified"}\n`;
  p += `Spicy opinions: ${a.spicy_opinions || "Not specified"}\n`;
  p += `Comfortable sharing: ${(a.personal_comfort || []).join(", ") || "Not specified"}\n`;
  p += `Want audience to feel: ${(a.audience_feel || []).join(", ") || "Not specified"}\n`;
  p += `Content inspiration: ${a.content_inspiration || "Not specified"}\n`;
  p += `Never want to sound like: ${a.never_sound_like || "Not specified"}\n`;

  p += `\n## DAY 3 — POSTING PLAN\n`;
  p += `Hours per week for content: ${a.hours_per_week || "Not specified"}\n`;
  p += `Best days: ${(a.best_days || []).join(", ") || "Not specified"}\n`;
  p += `Batch or in the moment: ${a.batch_or_moment || "Not specified"}\n`;
  p += `Brain cooperates at: ${a.brain_time || "Not specified"}\n`;
  p += `Posts per week commitment: ${a.posts_per_week || "Not specified"}\n`;
  p += `Priority platform: ${a.priority_platform || "Not specified"}\n`;
  p += `Formats willing to do: ${(a.easiest_format || []).join(", ") || "Not specified"}\n`;
  p += `Comeback post plan: ${a.comeback_post || "Not specified"}\n`;
  p += `Emergency post: ${a.emergency_post || "Not specified"}\n`;

  p += `\n## DAY 4 — CONTENT SPRINT\n`;
  p += `Format chosen: ${a.sprint_choice || "Not specified"}\n`;
  p += `Topic: ${a.sprint_topic || "Not specified"}\n`;
  p += `Hook written: ${a.sprint_hook || "Not specified"}\n`;
  p += `Posted: ${a.sprint_posted || "Not specified"}\n`;

  p += `\n## DAY 5 — SETUP\n`;
  p += `Ideas storage preference: ${a.ideas_location || "Not specified"}\n`;
  p += `Scheduling approach: ${a.scheduling_approach || "Not specified"}\n`;
  p += `Good enough definition: ${a.good_enough || "Not specified"}\n`;
  p += `Biggest difference from challenge: ${a.biggest_difference || "Not specified"}\n`;
  p += `Will keep doing: ${a.keep_doing || "Not specified"}\n`;
  p += `Still stuck on: ${a.still_stuck || "Not specified"}\n`;

  p += `\nNow generate their personalised content plan. Be specific to THEIR business, THEIR topics, THEIR audience, and THEIR capacity. Use their exact words where it helps. Don't be generic. This should feel like it was written for them specifically by someone who actually read their answers. IMPORTANT: Generate 10 specific content ideas for their business based on their topics, opinions, and audience from Day 2. These should be ready-to-use post ideas, not generic suggestions.`;

  return p;
}

export const SYSTEM_PROMPT = `You are a social media strategist for small business owners. You write in a warm, direct, Australian voice. No jargon, no fluff, no corporate speak. You're practical and a little bit funny. You generate personalised content plans based on someone's specific answers from a 5-day challenge.

Use their actual words and details. Make recommendations specific to THEIR business, THEIR topics, THEIR audience, and THEIR capacity. Don't be generic. If they provided a website URL, reference their actual offers and services in your recommendations.

Structure the plan with clear sections using ## headers. Use **bold** for emphasis. Use - for list items. Keep it under 2000 words.

The plan should include:
- Their priority platform and why (based on their answers)
- Quick wins to fix right now (bio, photo, links if they flagged issues)
- A realistic weekly posting rhythm based on their actual available hours and preferred formats
- 10 specific, ready-to-use content ideas tailored to THEIR business, topics, opinions, and audience. These should be actual post ideas they can run with, not vague suggestions. Include a mix of formats based on what they said they're willing to do.
- A suggested first week schedule with specific post prompts for each day they said they'd post
- Their comeback plan for when they fall off (use their own words from Day 3)
- A reminder of what good enough means for them (use their own words from Day 5)

End with a brief, warm note that if they want ongoing support to stick to this plan, the No Grey Suits Club launches in June. Don't be salesy about it. Just mention it exists.`;
