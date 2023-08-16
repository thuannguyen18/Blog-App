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
        username: "Emily Osment",
        email: "Emily_Osten@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p1.jpeg",
        followers: [],
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[1],
        username: "Jane Roger",
        email: "JaneRoger@gmail.com",
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p2.jpeg",
        followers: [],
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[2],
        username: "Peter Thomson",
        email: "peterThomson@gmail.com",
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        profilePicturePath: "p3.jpeg",
        followers: [],
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },
    {
        _id: userIds[3],
        username: "Edward Norton",
        email: "EdwardNorton@gmail.com",
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
        username: "John Lee",
        email: "JohnLee@gmail.com",
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
        username: "Carly",
        email: "carlyvowel@gmail.com",
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
        email: "SteveHop@gmail.com",
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p10.jpeg",
        followers: [],
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[10],
        username: "Annie Chambers",
        email: "AnmieChams@gmail.com",
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
        username: "Alex Robinson",
        email: "Alex@gmail.com",
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
        username: "Emma Walker",
        email: "emma@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        profilePicturePath: "p17.jpeg",
        followers: [],
        createdAt: 1369908044,
        updatedAt: 1359322268,
        __v: 0,
    },
    {
        _id: userIds[17],
        username: "Ronald Lyon",
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
        username: "Bruce Myer",
        email: "Myer1224@gmail.com",
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
        username: "Emily Osment",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Entertainment",
        picturePath: "po1.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ])
    },
    {
        _id: blogIds[1],
        userId: userIds[18],
        username: "Bruce Myer",
        userPicturePath: "p19.jpeg",
        title: "The graphic designer toolkit: 5 pieces of hardware to create your best work",
        subTitle: "Good hardware is the foundation for any quality graphic design work. Check out five pieces of hardware every graphic designer needs to create their very best work.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "History",
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
        ])
    },
    {
        _id: blogIds[2],
        userId: userIds[16],
        username: "Emma Walker",
        userPicturePath: "p17.jpeg",
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
            Why would you say this? One, it's fun to share exciting news. Two, they won't worry about sharing you since you are growing your team. Some clients actually do worry that you won't be available anymore, or that you'll become more expensive as a result. You can address this by saying
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design-Tips",
        picturePath: "po3.png",
        likes: new Map([
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
        ])
    },
    {
        _id: blogIds[3],
        userId: userIds[11],
        username: "Anna Geller",
        userPicturePath: "p12.jpeg",
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
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.`,
        category: "Education",
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
        ])
    },
    {
        _id: blogIds[4],
        userId: userIds[11],
        username: "Anna Geller",
        userPicturePath: "p12.jpeg",
        title: "This BIG mistake could cost you your job as a UX designer",
        subTitle: "Learn how to avoid the biggest pitfall in UX design. (Hint: It’s not just about the client.)",
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
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.`,
        category: "Life Style",
        picturePath: "po5.png",
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
        ])
    },
    {
        _id: blogIds[5],
        userId: userIds[1],
        username: "Jane Roger",
        userPicturePath: "p2.jpeg",
        title: "5 steps to improve DEI representation in your creative work",
        subTitle: "Discover five essential steps to help you amplify representation, foster inclusivity, and create impactful campaigns that resonate with audiences worldwide.",
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
            Why would you say this? One, it's fun to share exciting news. Two, they won't worry about sharing you since you are growing your team. Some clients actually do worry that you won't be available anymore, or that you'll become more expensive as a result. You can address this by saying
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Health",
        picturePath: "po6.jpg",
        likes: new Map([
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[1], true],
            [userIds[9], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
        ])
    },
    {
        _id: blogIds[6],
        userId: userIds[14],
        username: "Lois",
        userPicturePath: "p15.jpeg",
        title: "How did you land your first design job? We asked, you answered.",
        subTitle: "There’s nothing like reminiscing on your first job. We asked our community how they landed their first design jobs, and here’s what they said!",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Health",
        picturePath: "po7.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
        ])
    },
    {
        _id: blogIds[7],
        userId: userIds[10],
        username: "Annie Chambers",
        userPicturePath: "p11.jpeg",
        title: "5 tips to stay inspired this back-to-school season",
        subTitle: "Discover how designers and content creators can make the most out of back-to-school season and get inspired to create your best work yet.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Beauty",
        picturePath: "po8.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[9], true],
            [userIds[0], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[19], true],
            [userIds[16], true],
        ])
    },
    {
        _id: blogIds[8],
        userId: userIds[5],
        username: "Harvey Dun",
        userPicturePath: "p6.jpeg",
        title: "Pride by Design: 7 designers explore the impact of art and design",
        subTitle: "Seven designers on Dribbble shed light on the immense impact that art and design can have on amplifying queer voices.",
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
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.`,
        category: "Art",
        picturePath: "po9.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[9], true],
            [userIds[10], true],
            [userIds[11], true],
        ])
    },
    {
        _id: blogIds[9],
        userId: userIds[7],
        username: "Jessica",
        userPicturePath: "p8.jpeg",
        title: "21 must-have design freebies you can get on Dribbble",
        subTitle: "Upgrade your design toolkit with 21 must-have assets you can download for free on Dribbble. Happy designing!",
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
            Why would you say this? One, it's fun to share exciting news. Two, they won't worry about sharing you since you are growing your team. Some clients actually do worry that you won't be available anymore, or that you'll become more expensive as a result. You can address this by saying
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Business",
        picturePath: "po10.png",
        likes: new Map([
            [userIds[5], true],
        ])
    },
    {
        _id: blogIds[10],
        userId: userIds[2],
        username: "Peter Thomson",
        userPicturePath: "p3.jpeg",
        title: "5 non-negotiable marketing tools every designer needs in 2023",
        subTitle: "From high-converting landing pages to email and SMS marketing, learn how to promote your work, connect with clients, and drive your business to new heights.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Design",
        picturePath: "po11.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
        ])
    },
    {
        _id: blogIds[11],
        userId: userIds[14],
        username: "Lois",
        userPicturePath: "p15.jpeg",
        title: "7 impressive design system case studies by Dribbble's latest graduates",
        subTitle: "Learn from the best! See the impressive design system case studies completed by Dribbble’s latest Design System Course graduates. Explore each designer’s process and discover their secrets to success!",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Fitness",
        picturePath: "po12.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[9], true],
        ])
    },
    {
        _id: blogIds[12],
        userId: userIds[17],
        username: "Ronald Lyon",
        userPicturePath: "p18.jpeg",
        title: "Blockchain for a better planet: Meet the first high-performance, carbon-negative blockchain",
        subTitle: "As blockchain technology becomes more mainstream, eco-friendly development is essential.",
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
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.`,
        category: "Technology",
        picturePath: "po13.png",
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
        ])
    },
    {
        _id: blogIds[13],
        userId: userIds[5],
        username: "Harvey Dun",
        userPicturePath: "p6.jpeg",
        title: "Why workplace diversity matters more than ever in today’s remote work",
        subTitle: "Discover the advantages of being a multicultural remote team with powerful insights from Balkan Brother’s Head of People & Culture, Ana Tomašić.",
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
            Why would you say this? One, it's fun to share exciting news. Two, they won't worry about sharing you since you are growing your team. Some clients actually do worry that you won't be available anymore, or that you'll become more expensive as a result. You can address this by saying
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design-Tip",
        picturePath: "po14.png",
        likes: new Map([
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
        ])
    },
    {
        _id: blogIds[14],
        userId: userIds[1],
        username: "Jane Roger",
        userPicturePath: "p2.jpeg",
        title: "'Don’t be fearful of scaling'. — A chat with agency founder Oleg Davydov",
        subTitle: "Meet agency founder Oleg Davydov and discover how to grow your creative business and expand your team with confidence.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Music",
        picturePath: "po15.png",
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
        ])
    },
    {
        _id: blogIds[15],
        userId: userIds[10],
        username: "Annie Chambers",
        userPicturePath: "p11.jpeg",
        title: "Meet Tiffany Yeh, Dribbble Graduate and UI/UX Designer at Capital One",
        subTitle: "With a background in marketing and graphic design, Tiffany Yeh is eager to grow her Product Design career. Get inspired by Tiffany’s career journey!",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Fashion",
        picturePath: "po16.png",
        likes: new Map([
            [userIds[0], true],
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
        ])
    },
    {
        _id: blogIds[16],
        userId: userIds[3],
        username: "Edward Norton",
        userPicturePath: "p4.jpeg",
        title: "What do your clients value most? Hint: It's not just great design",
        subTitle: "Read on for an inspiring chat with Ofir Design studio on the key to building long-lasting, fruitful client relationships.",
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
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.`,
        category: "Design",
        picturePath: "po17.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
        ])
    },
    {
        _id: blogIds[17],
        userId: userIds[4],
        username: "Jane Doe",
        userPicturePath: "p5.jpeg",
        title: "5 tips to protect your artwork from being stolen",
        subTitle: "Art theft is wrong, but it’s also difficult to control. Here are five tips to protect your designs from theft and infringement.",
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
            Why would you say this? One, it's fun to share exciting news. Two, they won't worry about sharing you since you are growing your team. Some clients actually do worry that you won't be available anymore, or that you'll become more expensive as a result. You can address this by saying
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Careers",
        picturePath: "po18.png",
        likes: new Map([
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
        ])
    },
    {
        _id: blogIds[18],
        userId: userIds[6],
        username: "John Lee",
        userPicturePath: "p7.jpeg",
        title: "From graphic design to content design: Make your mark in the ‘Big Content’ era",
        subTitle: "Content design and publishing are ripe with more opportunities than ever before. Learn how designers can make their mark in the Big Content era.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Music",
        picturePath: "po19.png",
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
        ])
    },
    {
        _id: blogIds[19],
        userId: userIds[8],
        username: "Carly",
        userPicturePath: "p9.jpeg",
        title: "How to handle rejection as a creative professional",
        subTitle: "Get five different strategies for handling rejection as a designer. Learn how to turn an unpleasant experience into a positive one!",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design-Tip",
        picturePath: "po20.png",
        likes: new Map([
            [userIds[0], true],
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
        ])
    },
    {
        _id: blogIds[20],
        userId: userIds[9],
        username: "Steven Hopkin",
        userPicturePath: "p10.jpeg",
        title: "5 excellent free stock photo websites you probably didn’t know about",
        subTitle: "We scoured the web to discover the best free stock photo websites that designers often overlook, from public domain photos that are free to use to Creative Commons images with attribution.",
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
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.`,
        category: "History",
        picturePath: "po21.jpg",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
        ])
    },
    {
        _id: blogIds[21],
        userId: userIds[12],
        username: "Alex Robinson",
        userPicturePath: "p13.jpeg",
        title: "Turns out, your ideal client does exist. Here's how to find them",
        subTitle: "Good clients exist, and there are a lot more than you think. Founder of Fried Cactus Studio Aron Leah explains how to find your ideal client and stop working with assholes. Forever!",
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
            Why would you say this? One, it's fun to share exciting news. Two, they won't worry about sharing you since you are growing your team. Some clients actually do worry that you won't be available anymore, or that you'll become more expensive as a result. You can address this by saying
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Photography",
        picturePath: "po22.png",
        likes: new Map([
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
        ])
    },
    {
        _id: blogIds[22],
        userId: userIds[13],
        username: "Henry Mark",
        userPicturePath: "p14.jpeg",
        title: "10 Step Guide To Become A Freelance Designer [Free Resources]",
        subTitle: "There’s nothing quite like the thrill of starting your own freelance graphic design business. We’ve compiled a proven 10-step guide to becoming a freelance designer in 2022.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Food",
        picturePath: "po23.png",
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
        ])
    },
    {
        _id: blogIds[23],
        userId: userIds[15],
        username: "Brian Smith",
        userPicturePath: "p16.jpeg",
        title: "Cybersecurity 101: A practical guide for freelancers & agencies",
        subTitle: "Familiarize yourself with the most common cybercrime threats and how to protect yourself against them before they happen.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Technology",
        picturePath: "po24.png",
        likes: new Map([
            [userIds[0], true],
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
        ])
    },
    {
        _id: blogIds[24],
        userId: userIds[19],
        username: "Alex Morgan",
        userPicturePath: "p20.jpeg",
        title: "3 reasons why UI/UX is the final step to unlocking Web3 mass adoption",
        subTitle: "Explore the world of Web3 and learn how today’s UI/UX designers can shape the future of the internet.",
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
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.`,
        category: "Art",
        picturePath: "po25.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
        ])
    },
    {
        _id: blogIds[25],
        userId: userIds[19],
        username: "Alex Morgan",
        userPicturePath: "p20.jpeg",
        title: "10 excellent design blogs to follow for endless inspiration",
        subTitle: "Styles may come and go, but these design blogs are forever!",
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
            ✅ Pro tip: Hold the mindset that the money you put into a tax account is not technically yours.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            I get tired of fielding questions around how to get more clients, so I've decided to write an article on things you need to do right now before going online and asking, “Help. How do I get more clients?”
            Before you go hire a business coach or salesperson, or follow a get rich quick scheme, do this first. Warning, this is a long list of things to do. No easy answers, no quick fixes, but the bare minimum of what you need to do before looking for more help.     
            Remember, people hire who they know, who they like, and who they trust. So time to get known. #GetKnown      
            Build a website.
            State what you do clearly, then back it up with great examples. Show me. Don't tell me. Make sure your site is responsive, and avoid anything that will slow down or impair the ability of someone to navigate your site. This includes:         
            Cinemagraphs
            Parallax effects
            Tricky animation
            Unconventional interfaces.
            A simple hamburger menu with the following will work: Work, About, Contact.`,
        category: "Careers",
        picturePath: "po26.jpg",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
        ])
    },
    {
        _id: blogIds[26],
        userId: userIds[13],
        username: "Henry Mark",
        userPicturePath: "p14.jpeg",
        title: "How to design award-winning websites with no code on Tilda: Full review",
        subTitle: "Having award-winning websites in your portfolio is a great way to gain trust among customers and recognition in the industry. In this post, learn how to create one-of-a-kind websites without code using Tilda.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Science",
        picturePath: "po27.png",
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
        ])
    },
    {
        _id: blogIds[27],
        userId: userIds[3],
        username: "Edward Norton",
        userPicturePath: "p4.jpeg",
        title: "5 things I wish I knew when I started freelance designing",
        subTitle: "New to freelance design? In this guest post by freelancer Emily Melling, get tips and advice to guide you along your new freelancing journey.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design",
        picturePath: "po28.jpg",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
        ])
    },
    {
        _id: blogIds[28],
        userId: userIds[8],
        username: "Carly",
        userPicturePath: "p9.jpeg",
        title: "How to unlock your creative voice: 5 tips for designers",
        subTitle: "Your creative voice may evolve over time, but getting started is often the most challenging part of the process. Here are some of the best ways to discover your unique creative voice as a designer.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Education",
        picturePath: "po29.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ])
    },
    {
        _id: blogIds[29],
        userId: userIds[17],
        username: "Ronald Lyon",
        userPicturePath: "p18.jpeg",
        title: "Our Commitment to Support Ukraine",
        subTitle: "We believe creativity thrives when human beings are free to design their lives without fear of violence. That’s why we’re partnering with the International Rescue Committee to provide relief to Ukrainians seeking refuge.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "History",
        picturePath: "po30.jpg",
        likes: new Map([
            [userIds[0], true],
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
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
        ])
    },
    {
        _id: blogIds[30],
        userId: userIds[2],
        username: "Peter Thomson",
        userPicturePath: "p3.jpeg",
        title: "6 unexpected ways to overcome 'designer's block'",
        subTitle: "Win back your creativity and accomplish your design goals with these six unconventional tips.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design",
        picturePath: "po31.jpg",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
            [userIds[8], true],
            [userIds[9], true],
        ])
    },
    {
        _id: blogIds[31],
        userId: userIds[12],
        username: "Alex Robinson",
        userPicturePath: "p12.jpeg",
        title: "Give effective feedback while working remotely: 8 best practices",
        subTitle: "Great feedback is the key to a productive remote team. Here’s a handy guide to remote feedback for creative teams, design leads, and just about anyone working remotely.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Book",
        picturePath: "po32.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ])
    },
    {
        _id: blogIds[32],
        userId: userIds[2],
        username: "Peter Thomson",
        userPicturePath: "p3.jpeg",
        title: "How to break into 3D design & illustration (5 steps)",
        subTitle: "Learn how to break into the rapidly growing field of 3D design, what tools and programs you need, and how to get hired.",
        content: `In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            If you're on the market for a graphic design laptop, Acer's ConceptD 7 Ezel is an excellent choice that meets all of these criteria. It has a PANTONE Validated 4K screen and offers multiple display modes for professional designers who want to be able to sketch, finalize, and present their work all on one device. On top of that, the ConceptD Ezel doubles as a drawing tablet!
            Similar to a laptop, graphic designers should invest in a monitor with high color accuracy, (ideally a PANTONE validated display), and wide viewing angles to evaluate your work with utmost clarity.
            Acer's line of ConceptD monitors are an excellent choice for any creative professional. Check out the ConceptD CP7 for a top-of-line monitor built with color technologies that ensure vivid, true-to-life color reproduction. Plus, a built-in light-shielding hood helps block out any ambient light so you can focus on your design work.
            In this article, well share five pieces of hardware every graphic designer needs to create their very best work. Plus, we'll recommend some excellent pieces of hardware built especially for creators that are worth the investment. Let's get straight into it.
            As a professional graphic designer, color accuracy and CPU will be the most important specs to look out for. A fast and powerful CPU allows you to run complex design software without a hitch, and a color-accurate display will ensure that the colors in your design work are reproduced on the screen as intended.
            f you're a Marvel fan, you've probably watched most of the movies or TV shows in their collection—especially Phase Four. You might know all of the characters, the crazy Reddit theories, and you can't wait for the new Thor: Love and Thunder.
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
            It can take decades to build a reputation in your industry organically. I can’t count the number of times I’ve heard someone say “I’ll just let my good work speak for itself.” Two or three years later, despite consistently creating good (and hard) work, they’re still struggling. The reality is, in today’s hyper-competitive market, being good at what you do isn’t enough.`,
        category: "Art",
        picturePath: "po33.png",
        likes: new Map([
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ])
    },
    {
        _id: blogIds[33],
        userId: userIds[5],
        username: "Harvey Dun",
        userPicturePath: "p6.jpeg",
        title: "Make your client relationships a breeze: 5 tips to start using now",
        subTitle: "The secret to great client relationships might be more familiar than you think. Get actionable tips for building trust, setting boundaries, and allowing for more flexibility.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Music",
        picturePath: "po34.png",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[16], true],
            [userIds[17], true],
            [userIds[18], true],
            [userIds[9], true],
            [userIds[19], true],
            [userIds[16], true],
        ])
    },
    {
        _id: blogIds[34],
        userId: userIds[7],
        username: "Jessica",
        userPicturePath: "p8.jpeg",
        title: "Dealing with impostor syndrome? 3 ways to build your creative confidence",
        subTitle: "Learn how to overcome your biggest insecurities as a creative professional. Get advice for cultivating your creative confidence and take your career to new heights.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Health",
        picturePath: "po35.png",
        likes: new Map([
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
        ])
    },
    {
        _id: blogIds[35],
        userId: userIds[6],
        username: "John Lee",
        userPicturePath: "p7.jpeg",
        title: "What's Next For Design? Explore Dribbble's Design Industry Trends Report",
        subTitle: "Get insights to navigate your design career: Dribbble’s Design Industry Trends Report explores the current landscape of design and the evolving lifestyle of work. Explore the report.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design-Tip",
        picturePath: "po36.png",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
        ])
    },
    {
        _id: blogIds[36],
        userId: userIds[0],
        username: "Emily Osment",
        userPicturePath: "p1.jpeg",
        title: "How to get ahead as a creative professional in 2022",
        subTitle: "Ready to kick off your most creative year yet? Start the year with our top tips to help you succeed both creatively and professionally in 2022.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Music",
        picturePath: "po37.png",
        likes: new Map([
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
        ])
    },
    {
        _id: blogIds[37],
        userId: userIds[2],
        username: "Peter Thomson",
        userPicturePath: "p3.jpeg",
        title: "Staying creative on-the-go: 3 essential tips for designers",
        subTitle: "Learn how to create your best work yet with a mobile-friendly design lifestyle that helps you maximize your creative potential, no matter where you are.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Life Style",
        picturePath: "po38.png",
        likes: new Map([
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
        ])
    },
    {
        _id: blogIds[38],
        userId: userIds[5],
        username: "Harvey Dun",
        userPicturePath: "p6.jpeg",
        title: "Dear New Design Grads",
        subTitle: "Former hiring manager at Google and CEO of Playbook.com, Jessica Ko, shares her expert tips and advice for new design grads and job seekers.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design - Tip",
        picturePath: "po39.png",
        likes: new Map([
            [userIds[10], true],
            [userIds[11], true],
            [userIds[12], true],
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
            [userIds[17], true],
            [userIds[18], true],
            [userIds[19], true],
        ])
    },
    {
        _id: blogIds[39],
        userId: userIds[10],
        username: "Annie Chambers",
        userPicturePath: "p11.jpeg",
        title: "5 steps to becoming an award-winning designer",
        subTitle: "Head of Design at Logitech shares his top tips for making the most out of your design career. Keep reading for insights from the product designer behind the world’s number 1 mouse: MX Master 3.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Travel",
        picturePath: "po40.png",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ])
    },
    {
        _id: blogIds[40],
        userId: userIds[15],
        username: "Brian Smith",
        userPicturePath: "p16.jpeg",
        title: "Red Dead Redemption 2 Mod Restores Cut Dialogue",
        subTitle: "A recent Red Dead Redemption 2 mod restores hundreds of lines of dialogue that are present in the game's files but were never utilized.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Game",
        picturePath: "po41.avif",
        likes: new Map([
            [userIds[0], true],
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
            [userIds[13], true],
            [userIds[14], true],
        ])
    },
    {
        _id: blogIds[41],
        userId: userIds[16],
        username: "Emma Walker",
        userPicturePath: "p17.jpeg",
        title: "Which design team suits you best? Take this test to find out.",
        subTitle: "Every designer deserves a special team they truly connect with. But which type of design role will give you the most happiness? Take this test to find out.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design-Tip",
        picturePath: "po42.png",
        likes: new Map([
            [userIds[0], true],
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
            [userIds[13], true],
            [userIds[14], true],
        ])
    },
    {
        _id: blogIds[42],
        userId: userIds[18],
        username: "Bruce Myer",
        userPicturePath: "p19.jpeg",
        title: "Overwatch 2 Could Not Locate Resources [Easily Fixed]",
        subTitle: "Even though there are excellent moments in Overwatch 2 compared to the original, it seems to be more of an update than a true sequel. While there have been some solid changes to the game's foundations, you can also notice a lack of new…",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Game",
        picturePath: "po43.jpg",
        likes: new Map([
            [userIds[0], true],
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
            [userIds[13], true],
            [userIds[14], true],
            [userIds[15], true],
            [userIds[16], true],
            [userIds[17], true],
            [userIds[18], true],
            [userIds[19], true],
        ])
    },
    {
        _id: blogIds[43],
        userId: userIds[9],
        username: "Steven Hopkin",
        userPicturePath: "p10.jpeg",
        title: "TikTok To Invest ‘Billions of Dollars’ Into Southeast Asian Businesses in Coming Years",
        subTitle: "SMEs will be the ones that stand to benefit.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Business",
        picturePath: "po44.webp",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
        ])
    },
    {
        _id: blogIds[44],
        userId: userIds[4],
        username: "Jane Doe",
        userPicturePath: "p5.jpeg",
        title: "Why Is League Of Legends So Popular In Asia?",
        subTitle: "Visual elements are just some of the components that support LoL in gaining so much popularity in Asia. Read this article and discover more!",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Game",
        picturePath: "po45.jpg",
        likes: new Map([
            [userIds[0], true],
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
        ])
    },
    {
        _id: blogIds[45],
        userId: userIds[17],
        username: "Ronald Lyon",
        userPicturePath: "p18.jpeg",
        title: "Genetically Rescued Organism: Toward A Solution For Sudden Oak Death",
        subTitle: "Sudden oak death, caused by the pathogen Phythophthora ramorum, is one of the most ecologically devastating forest diseases in North America, responsible for the deaths of millions of oaks and tanoaks along the coast.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Science",
        picturePath: "po46.png",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
        ])
    },
    {
        _id: blogIds[46],
        userId: userIds[2],
        username: "Peter Thomson",
        userPicturePath: "p3.jpeg",
        title: "3 do’s & don’ts when crafting your design portfolio",
        subTitle: "To help you stand out in the hiring pool, here are some essential dos & don’ts when it comes to what you should include in your portfolio.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Design",
        picturePath: "po47.png",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ])
    },
    {
        _id: blogIds[47],
        userId: userIds[16],
        username: "Emma Walker",
        userPicturePath: "p17.jpeg",
        title: "Everything We Know About Grand Theft Auto 6",
        subTitle: "Thanks to last year's mega-leaks for GTA 6, we know a whole lot more than we’re supposed to right now",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Game",
        picturePath: "po48.webp",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
            [userIds[6], true],
            [userIds[7], true],
        ])
    },
    {
        _id: blogIds[48],
        userId: userIds[12],
        username: "Alex Robinson",
        userPicturePath: "p13.jpeg",
        title: "Why Is Everyone Wearing These Cartoonish Red Boots?",
        subTitle: "Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Fashion",
        picturePath: "po49.webp",
        likes: new Map([
            [userIds[0], true],
            [userIds[1], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
            [userIds[5], true],
        ])
    },
    {
        _id: blogIds[49],
        userId: userIds[8],
        username: "Carly",
        userPicturePath: "p9.jpeg",
        title: "NASA selects San Antonio firm to help build lunar landing pad with moon dust",
        subTitle: "NASA’s goal is to land an astronaut on Mars by the late 2030s. But before then, it needs to build a lunar base as a midway point. And to build a lunar base, it needs a landing pad. To build a landing pad, it needs a space architect.",
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
            Your personal brand is essentially your reputation. Whether you’ve worked towards intentionally developing it or not, you have one. So, why not work on it? After all, if you’re going to be an Avenger, why not be a recognizable one!
            As freelancers, we often sit with these common questions regarding financial management: Should I maintain separate bank accounts? How can I effectively build my savings? What is the recommended amount to save for taxes and retirement? Are there tools to help me manage my finances?
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
        category: "Technology",
        picturePath: "po50.webp",
        likes: new Map([
            [userIds[0], true],
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
        ])
    },
];

export const comments = [
    /* BLOG ID: 0 */
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