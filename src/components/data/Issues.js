import depressionImg from "../../images/Depression.png";
import depressionImg1 from "../../images/Depression1.png";
import depressionImg2 from "../../images/Depression2.png";
import anxietyImg from "../../images/Anxiety.jpg";
import anxietyImg1 from "../../images/Anxiety1.png";
import anxietyImg2 from "../../images/Anxiety2.png";
import griefImg from "../../images/Loss.jpg";
import griefImg1 from "../../images/Loss1.jpg";
import griefImg2 from "../../images/Loss2.jpg";
import selfconfidenceImg from "../../images/Confidence.png";
import selfconfidenceImg1 from "../../images/Confidence1.png";
import selfconfidenceImg2 from "../../images/Confidence2.png";
import stressImg from "../../images/Stress.png";
import stressImg1 from "../../images/Stress1.png";
import stressImg2 from "../../images/Stress2.png";
import relationshipImg from "../../images/Relationship.png";
import relationshipImg1 from "../../images/Relationship1.png";
import relationshipImg2 from "../../images/Relationship2.png";
import eatingImg from "../../images/Eating.png";
import eatingImg1 from "../../images/Eating1.png";
import eatingImg2 from "../../images/Eating2.png";
import substanceImg from "../../images/Abuse.png";
import substanceImg1 from "../../images/Abuse1.png";
import substanceImg2 from "../../images/Abuse2.png";
import socialImg from "../../images/Social.png";
import socialImg1 from "../../images/Social1.png";
import socialImg2 from "../../images/Social2.png";


const Issues = {
  "Depression": {
    title: "Depression",
    mainImage: depressionImg,
    aloneImage: depressionImg1,
    groupImg: depressionImg2,
    description: "Depression affects millions worldwide, often silently. Our depression treatment program provides compassionate care and evidence-based approaches to help you find your way back to joy and fulfillment.",
    whatIsIt: "Depression is more than just feeling sad—it's a complex condition that affects your mind, body, and spirit. Our depression treatment combines personalized therapy, medication management when appropriate, and lifestyle support to address all aspects of your wellbeing and help you rebuild a meaningful life.",
    benefits: [
      { title: "Renewed Hope", description: "Regain a sense of possibility and optimism as you work through your depression with proven therapeutic techniques.", icon: "AddCircleIcon" },
      { title: "Improved Daily Functioning", description: "Gradually recover your energy, motivation, and ability to engage in activities that bring you fulfillment.", icon: "BatteryAlertIcon" },
      { title: "Better Self-Understanding", description: "Gain insights into your thought patterns and develop healthier ways of relating to yourself and others.", icon: "FavoriteBorderIcon" },
      { title: "Long-term Resilience", description: "Build skills to manage future challenges and prevent relapse through sustainable coping strategies.", icon: "TipsAndUpdatesIcon" }
    ],
    testimonial: { text: "After years of struggling with depression, I finally found a team that truly understood what I was going through. Their comprehensive approach has given me back my life and taught me how to navigate difficult emotions.", name: "Sarah M.", role: "Client From Canada" },
    statistic: "1 in 5 Adults Experience Depression in Their Lifetime",
    resources: {
      youtube: [
        { title: "Understanding Depression", url: "https://www.youtube.com/watch?v=A4L0WZ1z1xE&t=35s" },
        { title: "8 Signs of Major Depressive Disorder", url: "https://www.youtube.com/watch?v=KSClXw4Wfxs" },
        { title: "6 Signs of Concealed Depression", url: "https://www.youtube.com/watch?v=kYunYTrA6Ks" }
      ],
      articles: [
        { title: "What is Depression?", url: "https://www.psychiatry.org/patients-families/depression/what-is-depression" },
        { title: "Managing Depression", url: "https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/depression-treatment-and-management" }
      ]
    }
  },
  "Anxiety": {
    title: "Anxiety",
    mainImage: anxietyImg,
    aloneImage: anxietyImg1,
    groupImg: anxietyImg2,
    description: "Anxiety can feel overwhelming, but it doesn't have to control your life. Our anxiety treatment program helps you understand, manage, and eventually overcome the constant worry and fear.",
    whatIsIt: "Our anxiety treatment program combines cognitive-behavioral techniques, mindfulness practices, and personalized coping strategies to help you break free from the cycle of anxiety. We focus on both immediate symptom relief and developing long-term skills for lasting peace of mind.",
    benefits: [
      { title: "Reduced Physical Symptoms", description: "Learn techniques to manage the physical manifestations of anxiety like rapid heartbeat, shallow breathing, and muscle tension.", icon: "AddCircleIcon" },
      { title: "Mental Clarity", description: "Clear the mental fog of anxious thoughts and develop a more balanced perspective on life's challenges.", icon: "BatteryAlertIcon" },
      { title: "Improved Social Confidence", description: "Reconnect with others without the interference of social anxiety or constant worry about judgment.", icon: "FavoriteBorderIcon" },
      { title: "Greater Life Engagement", description: "Stop avoiding situations due to anxiety and start fully participating in activities that bring you joy and fulfillment.", icon: "TipsAndUpdatesIcon" }
    ],
    testimonial: { text: "The tools I've gained through this anxiety program have completely transformed how I respond to stress. Instead of being paralyzed by worry, I now have practical strategies that help me stay grounded and move forward.", name: "Michael T.", role: "Client From Australia" },
    statistic: "Anxiety Disorders Affect 40 Million Adults in the United States",
    resources: {
      youtube: [
        { title: "The Different Levels of Anxiety", url: "https://www.youtube.com/watch?v=ZtBlAXo8LsY" },
        { title: "What is anxiety", url: "https://www.youtube.com/watch?v=NYzowu-EaPY" }
      ],
      articles: [
        { title: "Anxiety Overview", url: "https://www.medicalnewstoday.com/articles/323454" },
        { title: "Coping with Anxiety", url: "https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety#:~:text=Effective%20Coping%20Techniques%20for%20Anxiety&text=Journaling%2C%20grounding%20techniques%2C%20moving%20more,reduce%20and%20manage%20anxiety%20symptoms." }
      ]
    }
  },
  "Grief & Loss": {
    title: "Grief & Loss",
    mainImage: griefImg,
    aloneImage: griefImg2,
    groupImg: griefImg1 , 
    description: "Grief is a natural response to loss, but navigating it alone can be overwhelming. Our grief therapy provides a compassionate space to process your emotions and find a path forward while honoring your loss.",
    whatIsIt: "Our grief therapy acknowledges that everyone's grief journey is unique. We offer a supportive environment where you can express your feelings without judgment, make sense of your loss, and gradually rebuild your life while maintaining meaningful connections to what has been lost.",
    benefits: [
      { title: "Emotional Processing", description: "Find healthy ways to express and work through complex emotions associated with grief including sadness, anger, guilt, and relief.", icon: "AddCircleIcon" },
      { title: "Meaning Making", description: "Develop a narrative that helps you make sense of your loss and integrate it into your life story in a meaningful way.", icon: "BatteryAlertIcon" },
      { title: "Coping Strategies", description: "Learn practical ways to manage grief triggers, difficult anniversaries, and the day-to-day challenges of life after loss.", icon: "FavoriteBorderIcon" },
      { title: "New Identity Formation", description: "Discover who you are now and how to move forward while keeping the memory of what you've lost as part of your life.", icon: "TipsAndUpdatesIcon" }
    ],
    testimonial: { text: "I never thought I would smile again after my loss, but the gentle guidance I received helped me find joy without feeling guilty. They taught me that healing doesn't mean forgetting - it means finding a new way to carry what matters.", name: "Rebecca L.", role: "Client From Ireland" },
    statistic: "Over 2 Million People Experience the Death of a Loved One Each Year",
    resources: {
      youtube: [
        { title: "Navigating Grief", url: "https://www.youtube.com/watch?v=eEcaUhxAH2g" },
        { title: "Healing from Loss", url: "https://www.youtube.com/watch?v=Z2zu_jp-O_E" }
      ],
      articles: [
        { title: "Understanding Grief", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5033290/" },
        { title: "Coping with Loss", url: "https://www.psychologytoday.com/us/blog/everyday-life-simplified/202109/the-process-of-coping-with-grief-and-loss" }
      ]
    }
  },
  "Stress Management": {
    title: "Stress Management",
    mainImage: stressImg,
    aloneImage: stressImg1,
    groupImg: stressImg2,
    description: "Stress is an inescapable part of modern life, but its impact can be managed. Our stress management program offers personalized solutions to help you regain control of your work and your life.",
    whatIsIt: "We understand that the weight of stress can take a toll on your well-being. Introducing our personal and group therapy for the Stress Management Psychological Treatment, a holistic approach that empowers you to regain control over your life and find lasting relief from the burdens of stress through our personalized assessments, practical coping techniques and regular therapy sessions.",
    benefits: [
      { title: "Improved Mental Health", description: "Effective work life stress management contributes to better physical and mental health a long run.", icon: "AddCircleIcon" },
      { title: "Enhanced Mental Resilience", description: "You will develop increased resilience to face more of life's challenges and ready to manage more stress in your life.", icon: "BatteryAlertIcon" },
      { title: "Better Personal Relationships", description: "Reduced stress can lead to improved life relationships and more effective communication with each other.", icon: "FavoriteBorderIcon" },
      { title: "Enhanced Work Productivity", description: "You will discover increased productivity and enhanced focus, be it in your daily life or your work life.", icon: "TipsAndUpdatesIcon" }
    ],
    testimonial: { text: "Thanks for their unwavering support during a challenging period in my life. The care and understanding of their team, coupled with effective therapeutic approaches, truly made a difference in my fulfilling life.", name: "Leonard V.", role: "Client From England" },
    statistic: "2 out of 10 Office Workers Suffer from Stress",
    resources: {
      youtube: [
        { title: "Stress Management Tips", url: "https://www.youtube.com/watch?v=TK5KOXLT15g" },
        { title: "Reducing Stress", url: "https://www.youtube.com/watch?v=Wh5HyJ1rxzk" },
        { title: "Stress Relief For Kids", url: "https://www.youtube.com/watch?v=h2zWopNUUJE" },
      ],
      articles: [
        { title: "Stress Relief Strategies", url: "https://www.helpguide.org/mental-health/stress/stress-management" },
        { title: "Managing Work Stress", url: "https://www.apa.org/topics/healthy-workplaces/work-stress" }
      ]
    }
  },
  "Self-Confidence": {
    title: "Self-Confidence",
    mainImage: selfconfidenceImg,
    aloneImage: selfconfidenceImg1,
    groupImg: selfconfidenceImg2,
    description: "Self-confidence is the belief in your abilities and judgment. It's the foundation of mental health and personal development. Our self-confidence therapy helps you build a positive self-image and the courage to take on life's challenges.",
    whatIsIt: "Our self-confidence therapy focuses on enhancing your self-worth, breaking through negative self-beliefs, and developing the tools to assert yourself in both personal and professional life. We create a supportive space to empower you to thrive.",
    benefits: [
      { title: "Self-Awareness", description: "Gain a clear understanding of your strengths and areas for growth, enabling you to embrace your true self.", icon: "FaceIcon" },
      { title: "Positive Thinking", description: "Learn techniques to overcome self-doubt and foster a mindset that supports success and personal growth.", icon: "StarOutlineIcon" },
      { title: "Resilience Building", description: "Develop strategies to overcome setbacks and remain positive in challenging situations.", icon: "BuildIcon" },
      { title: "Assertiveness Training", description: "Learn to express yourself with confidence, set boundaries, and communicate your needs effectively.", icon: "SendIcon" }
    ],
    testimonial: { text: "Working on my self-confidence transformed my life. I no longer feel small or incapable – I can face challenges with optimism and conviction.", name: "John D.", role: "Client From USA" },
    statistic: "Over 60% of adults report low self-confidence impacting their daily lives.",
    resources: {
      youtube: [
        { title: "Building Self-Confidence", url: "https://www.youtube.com/watch?v=_RtUt0RsGMc" },
        { title: "Confidence Boosters", url: "https://www.youtube.com/watch?v=l_NYrWqUR40" }
      ],
      articles: [
        { title: "Self-Confidence Tips", url: "https://www.verywellmind.com/how-to-boost-your-self-confidence-4163098" },
        { title: "Boosting Self-Esteem", url: "https://thrivingcenterofpsych.com/blog/boosting-self-esteem-building-confidence-and-self-worth/" }
      ]
    }
  },
  "Relationship Issues": {
    title: "Relationship Issues",
    mainImage: relationshipImg,
    aloneImage: relationshipImg1,
    groupImg: relationshipImg2,
    description: "Relationship issues can stem from communication breakdowns, trust issues, or differing expectations. Our therapy helps couples and individuals navigate these challenges, enhancing understanding and fostering healthy connections.",
    whatIsIt: "Our therapy focuses on improving communication, rebuilding trust, and creating healthier patterns in relationships. Whether you're navigating a romantic partnership, family dynamic, or friendship, we offer practical tools to resolve conflicts and strengthen bonds.",
    benefits: [
      { title: "Improved Communication", description: "Learn how to express your needs and listen effectively to others, fostering mutual respect and understanding.", icon: "ChatIcon" },
      { title: "Trust Building", description: "Rebuild trust by addressing past hurts, clarifying expectations, and developing openness in your relationship.", icon: "LockOpenIcon" },
      { title: "Conflict Resolution", description: "Gain strategies to navigate disagreements respectfully, promoting compromise and resolution.", icon: "GavelIcon" },
      { title: "Strengthening Emotional Connection", description: "Reignite emotional intimacy and create deeper bonds based on empathy, affection, and respect.", icon: "FavoriteIcon" }
    ],
    testimonial: { text: "Our relationship was on the brink of falling apart. With the therapist's guidance, we rebuilt our connection and now communicate better than ever.", name: "Sophia and Liam", role: "Couple From Canada" },
    statistic: "Around 40% of marriages in the U.S. experience significant relationship challenges.",
    resources: {
      youtube: [
        { title: "Healthy Relationships", url: "https://www.youtube.com/watch?v=4c5dFcC4LNY" },
        { title: "Communication in Relationships", url: "https://www.youtube.com/watch?v=s4R6dZCQdjw" }
      ],
      articles: [
        { title: "Relationship Advice", url: "https://www.helpguide.org/relationships/social-connection/relationship-help" },
        { title: "Building Strong Bonds", url: "https://newsinhealth.nih.gov/2018/04/building-social-bonds" }
      ]
    }
  },
  "Eating Disorder": {
    title: "Eating Disorder",
    mainImage: eatingImg,
    aloneImage: eatingImg1,
    groupImg: eatingImg2,
    description: "Eating disorders are complex conditions that affect mental health and physical well-being. Our therapy offers a compassionate, evidence-based approach to address the underlying causes of disordered eating behaviors.",
    whatIsIt: "We provide a holistic approach to healing from eating disorders, focusing on developing a healthy relationship with food, body acceptance, and emotional regulation. Our therapists work collaboratively with you to understand the root causes of your behaviors and provide the tools to achieve long-term recovery.",
    benefits: [
      { title: "Body Image Healing", description: "Work through negative body image and learn to appreciate your body for what it can do, not how it looks.", icon: "FitnessCenterIcon" },
      { title: "Mindful Eating", description: "Learn how to eat mindfully, making choices that support your body and emotional health.", icon: "RestaurantIcon" },
      { title: "Emotional Regulation", description: "Gain tools to cope with emotions without turning to food, fostering healthier responses to stress and triggers.", icon: "SentimentDissatisfiedIcon" },
      { title: "Behavioral Change", description: "Break free from the cycles of restrictive eating or bingeing, adopting healthier habits and mindsets.", icon: "LoopIcon" }
    ],
    testimonial: { text: "I thought I would never be free from my eating disorder, but with the support I received, I’ve rebuilt my relationship with food and my body.", name: "Emily W.", role: "Client From UK" },
    statistic: "1 in 10 people will struggle with an eating disorder at some point in their lives.",
    resources: {
      youtube: [
        { title: "5 Things NOT To Say To Someone With an Eating Disorder", url: "https://www.youtube.com/watch?v=wc5p3biHif8" },
        { title: "6 Types of Eating Disorders", url: "https://www.youtube.com/watch?v=0SRmccgFIs8&t=116s" }
      ],
      articles: [
        { title: "Understanding Eating Disorders", url: "https://www.sciencedirect.com/science/article/abs/pii/S0018506X06001723" },
        { title: "Recovery from Eating Disorders", url: "https://withinhealth.com/learn/articles/eating-disorder-recovery" }
      ]
    }
  },
  "Substance Abuse": {
    title: "Substance Abuse",
    mainImage: substanceImg,
    aloneImage: substanceImg1,
    groupImg: substanceImg2,
    description: "Substance abuse can have a significant impact on every aspect of life. Our therapy helps individuals break free from addiction, heal emotionally, and rebuild a healthy lifestyle.",
    whatIsIt: "Our substance abuse therapy focuses on understanding the root causes of addiction, offering support through detoxification, and helping individuals develop coping mechanisms and strategies for long-term recovery.",
    benefits: [
      { title: "Addiction Recovery", description: "Develop a personalized plan to overcome substance dependence and gain the strength to stay sober.", icon: "LocalDrinkIcon" },
      { title: "Coping Strategies", description: "Learn healthy ways to cope with triggers and stress without turning to substances.", icon: "ThermostatIcon" },
      { title: "Relapse Prevention", description: "Build resilience and a support network to prevent relapse and maintain your sobriety.", icon: "AddAlertIcon" },
      { title: "Life Skills Development", description: "Develop essential life skills to navigate social situations, work, and personal relationships effectively.", icon: "SchoolIcon" }
    ],
    testimonial: { text: "Thanks to the therapy I received, I’ve been sober for over a year now and am living a life full of hope and purpose.", name: "Michael S.", role: "Client From Australia" },
    statistic: "Over 20 million people in the U.S. struggle with a substance use disorder.",
    resources: {
      youtube: [
        { title: "What Abuse Does To Your Brain", url: "https://www.youtube.com/watch?v=set1w_YI6qw" },
        { title: "8 Ways Emotional Abuse Traumatizes You", url: "https://www.youtube.com/watch?v=uYWz7NR20Ko" }
      ],
      articles: [
        { title: "Effects Child Abuse", url: "https://www.mcleanhospital.org/essential/effects-child-abuse" },
        { title: "Domestic Violence And Abuse", url: "https://www.helpguide.org/relationships/domestic-abuse/domestic-violence-and-abuse" }
      ]
    }
  },
  "Social Anxiety": {
    title: "Social Anxiety",
    mainImage: socialImg,
    aloneImage: socialImg1,
    groupImg: socialImg2,
    description: "Social anxiety affects your ability to interact confidently in social situations. Our therapy provides tools to manage anxiety, increase self-esteem, and empower you to engage more comfortably in social environments.",
    whatIsIt: "Social anxiety therapy helps you face your fears of judgment, embarrassment, and rejection. We work together to build confidence, challenge negative thoughts, and increase your ability to navigate social situations with ease.",
    benefits: [
      { title: "Cognitive Restructuring", description: "Identify and challenge negative beliefs that fuel your anxiety, replacing them with healthier, realistic thoughts.", icon: "PsychologyIcon" },
      { title: "Exposure Therapy", description: "Gradually face feared social situations to desensitize yourself to anxiety-provoking experiences.", icon: "GroupIcon" },
      { title: "Confidence Building", description: "Develop the skills and mindset needed to interact confidently, whether in small groups or large gatherings.", icon: "GroupAddIcon" },
      { title: "Relaxation Techniques", description: "Learn techniques such as deep breathing and mindfulness to calm your nerves before and during social interactions.", icon: "SpaIcon" }
    ],
    testimonial: { text: "Therapy helped me overcome my social anxiety, and now I feel comfortable in situations I used to avoid. I’ve regained control of my social life.", name: "Sarah T.", role: "Client From Germany" },
    statistic: "Approximately 15 million adults in the U.S. struggle with social anxiety disorder.",
    resources: {
      youtube: [
        { title: "Overcoming Social Anxiety", url: "https://www.youtube.com/watch?v=X_ZKkvhXNJk" },
        { title: "Social Confidence Tips", url: "https://www.youtube.com/watch?v=XIrQKo-d7h4" }
      ],
      articles: [
        { title: "Managing Social Anxiety", url: "https://www.health.harvard.edu/mind-and-mood/social-anxiety-disorder-treatments-and-tips-for-managing-this-challenging-condition" },
        { title: "Social Anxiety Strategies", url: "https://positivepsychology.com/social-anxiety/" }
      ]
    }
  }
};

export default Issues;