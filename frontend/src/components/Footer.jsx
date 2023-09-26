import React from "react";
import Container from "components/Container";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsYoutube } from "react-icons/bs";

const list = [
    {
        title: "Solution",
        listContent: ["Marketing", "Analytics", "Commerce", "Insights"]
    },
    {
        title: "Support",
        listContent: ["Pricing", "Documentation", "Guide", "API Status"]
    },
    {
        title: "Company",
        listContent: ["About us", "Blog", "Jobs", "Press", "Partner"]
    },
    {
        title: "Legal",
        listContent: ["Claim", "Privacy policy", "Terms"]
    }
];

const socialMediaIcons = [
    {
        id: 1,
        name: <BsFacebook />
    },
    {
        id: 2,
        name: <BsInstagram />
    },
    {
        id: 3,
        name: <BsTwitter />
    },
    {
        id: 4,
        name: <BsGithub />
    },
    {
        id: 5,
        name: <BsYoutube />
    },
];

export default function Footer() {
    return (
        <footer className="mt-12 py-8 px-4 border-t border-gray-150">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-3 pb-4 border-b border-gray-150">
                    <div className="col-span-5 my-4 lg:my-0">
                        <h3 className="font-semibold">Subscribe to our newsletter</h3>
                        <p className="text-sm mt-1 text-gray-750">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    </div>
                    <div className="col-span-3 w-full md:h-10 flex flex-col md:flex-row justify-between">
                        <input type="email" placeholder="Enter your email" className="flex-1 py-2 px-3 border rounded" />
                        <button className="bg-sky-500 text-white rounded py-2 px-3 mt-4 md:ml-2 md:mt-0">Subscribe</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-4 py-8 border-b border-gray-150">
                    {list.map(listItem => (
                        <div key={listItem.title} className="w-full">
                            <h3 className="font-semibold">{listItem.title}</h3>
                            <ul className="mt-6">
                                {listItem.listContent.map(item => (
                                    <li key={item} className="mt-4 text-gray-750 text-sm">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8">
                    <p className="text-gray-750">© 2023 Made by Thuận</p>
                    <ul className="flex items-center mt-8 md:mt-0">
                        {socialMediaIcons.map(icon => (
                            <li key={icon.id} className="ml-8 text-gray-250 text-2xl">
                                {icon.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
}