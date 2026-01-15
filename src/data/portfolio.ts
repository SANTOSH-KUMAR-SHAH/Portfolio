import { Github, Linkedin, Facebook } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "Santosh Kumar Shah",
        role: "Frontend Engineer",
        tagline: "Bridging the gap between imagination and reality through code.",
        email: "santoshkumarshah266@gmail.com",
        location: "Kathmandu, Nepal",
        hometown: "Gaur, Nepal",
        mantra: "अनुगच्छतु प्रवाहं✍🏻", // "Follow the flow" or similar
    },
    social: [
        { name: "GitHub", url: "https://github.com/SANTOSH-KUMAR-SHAH", icon: Github },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/santosh-kumar-shah-9250503a4/", icon: Linkedin },
        { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61585666994832", icon: Facebook },
    ],
    education: [
        {
            school: "Viswa Niketan College",
            field: "Computer Science (Management)",
            location: "Kathmandu",
            status: "Completed"
        }
    ],
    skills: {
        core: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
        comfortable: ["Vite", "Git", "Responsive Design", "Figma"],
        exploring: ["TypeScript", "Backend Development", "Motion Design"]
    },
    featuredProject: {
        title: "Viswa Niketan Portal",
        description: "A comprehensive digital portal for Viswa Niketan College. Solved the problem of fragmented information access for students and faculty.",
        tech: ["React", "Tailwind", "Vite"],
        repo: "https://github.com/SANTOSH-KUMAR-SHAH/Viswa-Niketan",
        demo: "https://santosh-kumar-shah.github.io/Viswa-Niketan/",
        highlights: [
            "Responsive desktop-first design",
            "Optimized load times with Vite",
            "Clean, academic aesthetic"
        ]
    },
    philosophy: [
        "Code should feel something, not just run.",
        "Clean when needed, chaotic when effective.",
        "I don’t chase trends — I bend them.",
        "If my project looks simple, look closer."
    ],
    funFacts: [
        "Creativity > coffee",
        "Mad by friends (accurate)",
        "Poetry, but in pixels"
    ],
    now: {
        currentFocus: "Deepening React patterns & exploring Backend styling",
        reading: "Refactoring UI by Adam Wathan",
        playing: "Chess & Badminton",
        listening: "Lo-fi Beats for Coding"
    }
};
