import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

const blogIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

const commentIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users = [
    {
        _id: userIds[0],
        username: "John Doe",
        email: "johndoe@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p1.jpeg",
        followers: [],
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[1],
        username: "Steve Roger",
        email: "captainameria@gmail.com",
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p2.jpeg",
        followers: [],
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[2],
        username: "Peter Griffin",
        email: "someguy@gmail.com",
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        profilePicturePath: "p3.jpeg",
        followers: [],
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },
    {
        _id: userIds[3],
        username: "Saddy",
        email: "whatchadoing@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p4.jpeg",
        followers: [],
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0,
    },
    {
        _id: userIds[4],
        username: "Jane Doe",
        email: "janedoe@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p5.jpeg",
        followers: [],
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0,
    },
    {
        _id: userIds[5],
        username: "Harvey Dun",
        email: "harveydunn@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p6.jpeg",
        followers: [],
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0,
    },
    {
        _id: userIds[6],
        username: "Carly",
        email: "carlyvowel@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p7.jpeg",
        followers: [],
        createdAt: 1714704324,
        updatedAt: 1642716557,
        __v: 0,
    },
    {
        _id: userIds[7],
        username: "Jessica",
        email: "jessicadunn@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p8.jpeg",
        followers: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
    {
        _id: userIds[8],
        username: "John Lee",
        email: "johnlee@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p9.jpeg",
        followers: [],
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[9],
        username: "Steven Hopkin",
        email: "thataaa@gmail.com",
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p10.jpeg",
        followers: [],
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[10],
        username: "Robert Chambers",
        email: "robert@gmail.com",
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        profilePicturePath: "p11.jpeg",
        followers: [],
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },
    {
        _id: userIds[11],
        username: "Anna Geller",
        email: "maga@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p12.jpeg",
        followers: [],
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0,
    },
    {
        _id: userIds[12],
        username: "Justin Robinson",
        email: "justin@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p13.jpeg",
        followers: [],
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0,
    },
    {
        _id: userIds[13],
        username: "Henry Mark",
        email: "mHenry@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p14.jpeg",
        followers: [],
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0,
    },
    {
        _id: userIds[14],
        username: "Lois",
        email: "lois@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p15.jpeg",
        followers: [],
        createdAt: 1714704324,
        updatedAt: 1642716557,
        __v: 0,
    },
    {
        _id: userIds[15],
        username: "Biran Smith",
        email: "brian@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p16.jpeg",
        followers: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
    {
        _id: userIds[16],
        username: "Hacker113",
        email: "hacker113@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p17.jpeg",
        followers: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
    {
        _id: userIds[17],
        username: "Ronald",
        email: "ronald@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p18.jpeg",
        followers: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
    {
        _id: userIds[18],
        username: "Bruce Wayne",
        email: "batman@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p19.jpeg",
        followers: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
    {
        _id: userIds[19],
        username: "Alex Morgan",
        email: "leesin@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p20.jpeg",
        followers: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
];

export const posts = [
    {
        _id: blogIds[0],
        userId: userIds[0],
        username: "John Doe",
        userPicturePath: "p1.jpeg",
        title: "3 key phases for building your personal brand (and why it matters)",
        subTitle: "In today's hyper-competitive market, being good at what you do isn't enough. Learn how to leverage your personal brand to find new clients and success in your industry.",
        content: `If you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
            Now think about your friends—the ones that are not into Marvel or maybe just watch it because it's popular and they love going to the movie theater. I'm going to assume you know a few of these people. I know I do. Here's the thing: When talking about The Avengers, I noticed most of them recognize names like Iron Man, Thor, and Black Widow. They might even mention Captain America and Hulk (or the big green guy), but the one name they will almost always forget is Hawkeye.
            It's a serious branding issue, one that Marvel is completely aware of. So much so that in their recent TV show Hawkeye, Kate Bishop (future Young Avenger) explains to Clint Burton (Hawkeye) that he has a branding problem which is why no one likes him, and that he should do something about it—which is absolutely true! Her efforts convey the entire meaning of the Hawkeye series as a whole, an attempt to turn the least marketable Avenger into something more. And they succeed in that, to a certain extent.\nWhile Hawkeye may not be looking for more attention, Kate is, and she learns from his branding mistakes. As a result, she starts building her personal brand at the very beginning of her career (first season in the MCU) which is something you should do too.
            Phase 1: Discover and define your personal brand
            Imagine that a handful of key people in your industry get together for a dinner party and your name comes up in conversation. Wouldn't it be nice (and great for your business) if you could pre-determine what they say about you? Of course, it would. That's the power of a personal brand.\nRemember, it's not about putting on a show for the masses, it's all about engineering a powerful reputation amongst the key people of influence in your industry.\nIf you're starting from scratch, try to summarize three aspects of yourself—aspects that you'll want to be reflected in your personal brand. Your brand will be a driving force behind your career, so it should make you feel alive and uncompromised. If it doesn't inspire you, how can you expect it to inspire others to want to work with you?
            📌 PRO TIP: YOU DON'T NEED TO APPEAL TO EVERYONE
            A common issue people run into when developing their personal brand is trying to appeal to everyone. This shouldn't be your goal. By doing so, you risk appealing to no one. More importantly, you'll potentially miss out on new clients who would've otherwise been drawn to your brand. Ignore the people that don't mesh with your aesthetic and work towards better servicing those that do. It's about sorting, not convincing.
            Phase 2: Build your online presence (put yourself out there).
            From Twitter to podcasts, blog posts, to Dribbble, it's important to get your voice out there to establish your personal brand. Your first step should be to secure things like URLs and social handles that are the best fit for your brand before someone else does. This includes both your personal website and any social networks you choose to join.
            Once you define how you'd like to present yourself via a personal brand statement, commit to memory and share widely. Whenever you're asked to introduce yourself or write a short biographical summary, refer to your brand.
            Designing a personal website (or a portfolio) is another important way to start broadcasting your brand. Think of it as a corner of the internet dedicated solely to your skills and life updates. Then, create social media pages, business cards, and email signatures that not only capture your personal brand sentiment, but also direct peers to your personal website (or portfolio) to learn more. Having an interconnected online presence helps people find you online and showcases your most favorable assets.
            📌 PRO TIP: GET A PERSONAL DOMAIN NAME
            Choosing a domain name for your personal website is an important decision you'll have to make. Investing in a personalized domain name is critical to owning the search results that come up when someone Googles your name. Remember, potential clients and employers will do their research. Having a personalized domain that links to your design portfolio will enable you to own the results that come up when anyone searches your name.
            Choose a personalized domain name that speaks to who you are. We recommend .ME, a trusted domain extension that many creatives from around the world have already chosen as their online home. .ME allows you to brand your website, blog, or portfolio with a domain name that's just as unique as you!
            Phase 3: Become the go-to expert and constantly deliver value
            Create content that positions you as the star of your brand. Try to create content that engages and disrupts—content that makes your audience to stop scrolling. Check out hashtags in your niche, and start scrolling through social media Reels to see what type of content surfaces to the top. Come up with a plan: Pick a theme for a specific day, for example, where you can dive deep into a topic. Then, just share from your heart. Don't be afraid to be unconventional. Take risks.
            Publish your thoughts via blog posts or articles (like this one) so that you can become known (and, fingers crossed, respected) for your ideas.
            📌 PRO TIP: DON'T FORGET TO TREAT YOUR WEBSITE AS YOUR CENTRAL PILLAR
            Everything you do on the internet should link back to your website and it should always be up to date. That way, you 'own your name' online so when people search you, they find your website and see the content you want them to.
            Start building your personal brand today
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!`,
        category: "Tips",
        picturePath: "po1.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        comments: [
            commentIds[0],
            commentIds[1],
            commentIds[2],
            commentIds[3],
        ],
    },
    {
        _id: blogIds[1],
        userId: userIds[0],
        username: "John Doe",
        userPicturePath: "p1.jpeg",
        title: "The graphic designer toolkit: 5 pieces of hardware to create your best work",
        subTitle: "Good hardware is the foundation for any quality graphic design work. Check out five pieces of hardware every graphic designer needs to create their very best work.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.`,
        category: "Design",
        picturePath: "po2.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
        ]),
        comments: [
            commentIds[4],
            commentIds[5],
            commentIds[6],
            commentIds[7],
            commentIds[8],
            commentIds[9],
            commentIds[10],
            commentIds[11],
        ],
    },
    {
        _id: blogIds[2],
        userId: userIds[1],
        username: "Steve Roger",
        userPicturePath: "p2.jpeg",
        title: "Help. How do I get more clients?",
        subTitle: "The Futur's Chris Do shares ten powerful tips to help you get more freelance clients and leads.",
        content: `I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.      
            Use a legible and neutral typeface. Limit the number of colors you use. Have a simple logo. If you don't have one, just typeset your name in Helvetica Bold using upper/lower case.           
            Make your site SEO-friendly. Name the images on your site with descriptive names. “Untitled” or “Final_final_03” doesn't count as being descriptive. Instead, try “Los-Angles-Design-Branding-Anime-Expo”. Basically, help Google classify the images so that if someone is searching for you, they can find you.
            Update your LinkedIn profile.Start with having a professionally shot photo. Keep it simple (white, grey, or black backdrop). It's worth the investment since you'll be able to use this elsewhere. Ask yourself, would I hire me based on this photo? Would I dive deeper into this persons' profile? Do they appear professional, credible, and friendly? Is this someone I can trust with my money? Is this someone I can see myself being around for a long period of time?
            Write a captivating headline instead of a job title. Focus on a user/customer benefit vs describing what you do. What do you do for them? An example could be “I help small brands look like big brands.”
            Update your education, work history, awards, and accolades. Get a few, well-written, but sincere testimonials.
            Ask for referrals.
            Reach out to current and past clients and ask them for a referral. Tell them that you're growing your business and have additional capacity to take on more work, that you'd appreciate any referrals or recommendations to anyone that could use your services.
            If they know someone, offer to contact them directly vs. leaving it in their hands to follow through. People are busy after all and you don't want to add any additional work to their plate.
            Why would you say this? One, it's fun to share exciting news. Two, they won't worry about sharing you since you are growing your team. Some clients actually do worry that you won't be available anymore, or that you'll become more expensive as a result. You can address this by saying`,
        category: "Tips",
        picturePath: "po3.png",
        likes: new Map([
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
        ]),
        comments: [
            commentIds[12],
            commentIds[13],
            commentIds[14],
            commentIds[15],
        ],
    },
    {
        _id: blogIds[3],
        userId: userIds[1],
        username: "Steve Roger",
        userPicturePath: "p2.jpeg",
        title: "A guide to mastering financial security: 5 tips from freelancing experts",
        subTitle: "Get actionable tips and lessons learned from financial experts who specialize in assisting freelancers and entrepreneurs!",
        content: `As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
            It is well-known that setting up and managing finances as a self-employed individual can be a daunting task. The world of freelancing brings with it a unique set of financial challenges, from separating personal and business expenses to dealing with unpredictable income.
            To put your mind at ease, we have gathered actionable tips and lessons learned from financial experts who specialize in assisting freelancers and entrepreneurs. Let's dive into these useful tips, focusing on how freelancers can establish a solid financial foundation for long-term success!
            Thanks to our friends at SumIt for sponsoring this blog post!            
            What's the first thing self-employed creatives should do to set up their finances for long-term success?
            When you're a self-employed individual, it's hard to have a sense of you versus your business. It is essential to have a visual setup for “what's mine, and what's not.” This can be achieved by setting up a business account, creating a tangible barrier that helps you mentally separate the two realms.           
            By having a dedicated business account, you can better track your income and expenses, ensuring a clearer financial picture for your freelancer venture. No more digging through a jumble of personal transactions to figure out which ones are business-related. It's like finally untangling that mess of charging cables in your drawer.
            ✅ Pro tip: It's essential to have a visual set up for “what's mine and what's not.”
            What's a common mistake freelancers make with their finances?
            One common mistake is neglecting your business needs, particularly when it comes to taxes. It's essential to address tax obligations promptly to avoid being caught off guard.
            In addition to maintaining a business account separation, it's crucial to establish a tax separation. Remember, the money allocated for taxes is not technically yours, and by keeping this mindset, you'll be better prepared for tax obligations. Remember, almost all business owners spend Q1 trying to figure out how to pay taxes from last year. Don't be that person!
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.`,
        category: "Science-Technology",
        picturePath: "po4.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[9], true],
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
        ]),
        comments: [
            commentIds[16],
            commentIds[17],
            commentIds[18],
            commentIds[19],
            commentIds[20],
            commentIds[21],
            commentIds[22],
            commentIds[23],
            commentIds[24],
            commentIds[25],
            commentIds[26],
            commentIds[27],
        ],
    },
];

export const comments = [
    {
        _id: commentIds[0],
        userId: userIds[1],
        username: "Steve Roger",
        userPicturePath: "p2.jpeg",
        blogId: blogIds[0],
        content: "This is a comment 1 at blog 1, just testing the comment feature"
    },
    {
        _id: commentIds[1],
        userId: userIds[2],
        username: "Peter Griffin",
        profilePicturePath: "p3.jpeg",
        blogId: blogIds[0],
        content: "This is a comment 2 at blog 1, just testing the comment feature"
    },
    {
        _id: commentIds[2],
        userId: userIds[3],
        username: "Saddy",
        profilePicturePath: "p4.jpeg",
        blogId: blogIds[0],
        content: "This is a comment 3 at blog 1, just testing the comment feature"
    },
    {
        _id: commentIds[3],
        userId: userIds[4],
        username: "Jane Doe",
        profilePicturePath: "p5.jpeg",
        blogId: blogIds[0],
        content: "This is a comment 4 at blog 1, just testing the comment feature"
    },
    /** */
    {
        _id: commentIds[4],
        userId: userIds[1],
        username: "Steve Roger",
        userPicturePath: "p2.jpeg",
        blogId: blogIds[1],
        content: "This is a comment 1 at blog 2, just testing the comment feature"
    },
    {
        _id: commentIds[5],
        userId: userIds[2],
        username: "Peter Griffin",
        profilePicturePath: "p3.jpeg",
        blogId: blogIds[1],
        content: "This is a comment 2 at blog 2, just testing the comment feature"
    },
    {
        _id: commentIds[6],
        userId: userIds[3],
        username: "Saddy",
        profilePicturePath: "p4.jpeg",
        blogId: blogIds[1],
        content: "This is a comment 3 at blog 2, just testing the comment feature"
    },
    {
        _id: commentIds[7],
        userId: userIds[4],
        username: "Jane Doe",
        profilePicturePath: "p5.jpeg",
        blogId: blogIds[1],
        content: "This is a comment 4 at blog 2, just testing the comment feature"
    },
    {
        _id: commentIds[8],
        userId: userIds[5],
        username: "Harvey Dun",
        profilePicturePath: "p6.jpeg",
        blogId: blogIds[1],
        content: "This is a comment 5 at blog 2, just testing the comment feature"
    },
    {
        _id: commentIds[9],
        userId: userIds[6],
        username: "Carly",
        profilePicturePath: "p7.jpeg",
        blogId: blogIds[1],
        content: "This is a comment 6 at blog 2, just testing the comment feature"
    },
    {
        _id: commentIds[10],
        userId: userIds[7],
        username: "Jessica",
        profilePicturePath: "p8.jpeg",
        blogId: blogIds[1],
        content: "This is a comment 7 at blog 2, just testing the comment feature"
    },
    {
        _id: commentIds[11],
        userId: userIds[8],
        username: "John Lee",
        profilePicturePath: "p9.jpeg",
        blogId: blogIds[1],
        content: "This is a comment 8 at blog 2, just testing the comment feature"
    },
    /** */
    {
        _id: commentIds[12],
        userId: userIds[5],
        username: "Harvey Dun",
        profilePicturePath: "p6.jpeg",
        blogId: blogIds[2],
        content: "This is a comment 1 at blog 3, just testing the comment feature"
    },
    {
        _id: commentIds[13],
        userId: userIds[6],
        username: "Carly",
        profilePicturePath: "p7.jpeg",
        blogId: blogIds[2],
        content: "This is a comment 2 at blog 3, just testing the comment feature"
    },
    {
        _id: commentIds[14],
        userId: userIds[7],
        username: "Jessica",
        profilePicturePath: "p8.jpeg",
        blogId: blogIds[2],
        content: "This is a comment 3 at blog 3, just testing the comment feature"
    },
    {
        _id: commentIds[15],
        userId: userIds[8],
        username: "John Lee",
        profilePicturePath: "p9.jpeg",
        blogId: blogIds[2],
        content: "This is a comment 4 at blog 3, just testing the comment feature"
    },
    /** */
    {
        _id: commentIds[16],
        userId: userIds[1],
        username: "Steven Roger",
        profilePicturePath: "p2.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 1 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[17],
        userId: userIds[2],
        username: "Peter Griffin",
        profilePicturePath: "p3.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 2 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[18],
        userId: userIds[3],
        username: "Saddy",
        profilePicturePath: "p4.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 3 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[19],
        userId: userIds[4],
        username: "Jane Doe",
        profilePicturePath: "p5.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 4 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[20],
        userId: userIds[5],
        username: "Harvey Dun",
        profilePicturePath: "p6.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 5 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[21],
        userId: userIds[6],
        username: "Carly",
        profilePicturePath: "p7.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 6 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[22],
        userId: userIds[7],
        username: "Jessica",
        profilePicturePath: "p8.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 7 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[23],
        userId: userIds[8],
        username: "John Lee",
        profilePicturePath: "p9.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 8 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[24],
        userId: userIds[9],
        username: "Stephen Hopkin",
        profilePicturePath: "p10.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 9 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[25],
        userId: userIds[10],
        username: "Robert Chambers",
        profilePicturePath: "p11.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 10 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[26],
        userId: userIds[11],
        username: "Anna Geller",
        profilePicturePath: "p12.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 11 at blog 4, just testing the comment feature"
    },
    {
        _id: commentIds[27],
        userId: userIds[12],
        username: "Justin Robinson",
        profilePicturePath: "p13.jpeg",
        blogId: blogIds[3],
        content: "This is a comment 12 at blog 4, just testing the comment feature"
    },
];