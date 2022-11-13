// benefit
import dollar from "./../assets/icons/pricing/noun-free-3353393 1.svg";
import discount from "./../assets/icons/pricing/noun-discount-5080842 1.svg";
import fastDelivery from "./../assets/icons/pricing/noun-fast-delivery-4589232 1.svg";
import invoice from "./../assets/icons/pricing/noun-invoice-2844416 1.svg";
import planning from "./../assets/icons/pricing/noun-planning-2080558 1.svg";
import secure from "./../assets/icons/pricing/noun-secure-data-4532126 1.svg";

export const priceData = [
    {
        id: "101",
        name: "Image",
        initialPrice: "0.50",
        data: [
            {
                id: "001",
                title: "Background removal",
                price: "0.60"
            },
            {
                id: "002",
                title: "Invisible mannequin",
                price: "0.80"
            },
            {
                id: "003",
                title: "Shadow",
                price: "0.50"
            },
            {
                id: "004",
                title: "Essential Retouch",
                price: "0.75"
            },
            {
                id: "005",
                title: "Color Matching",
                price: "0.50"
            },
            {
                id: "006",
                title: "Advanced Retouch",
                price: "0.85"
            },
        ]
    },
    {
        id: "102",
        name: "CGI",
        initialPrice: "50.00",
        data: [
            {
                id: "011",
                title: "Product Rendering",
                price: "80.30"
            },
            {
                id: "012",
                title: "360 Product Spins",
                price: "80.00"
            },
            {
                id: "013",
                title: "3D Product Animation",
                price: "90.00"
            },
            {
                id: "014",
                title: "3D lifestyle scenes",
                price: "90.00"
            },
            {
                id: "015",
                title: "3D product visualization",
                price: "50.30"
            },
            {
                id: "016",
                title: "Virtual photography",
                price: "85.00"
            },
        ]
    }
]


// benefits data

export const benefits = [
    {
        id: "001",
        title: "Free trial",
        description: "You are always welcome to do a Free Evaluation Trial Job with us any time, just to have a better understanding of our quality, pricing, and turnover time.",
        icon: dollar
    },
    {
        id: "002",
        title: "24h delivery or sooner",
        description: "We recognize the importance of solving bottlenecks for our clients. All orders placed are handled within 24 hours or sooner. This we guaranteed 24-7, all year round.",
        icon: fastDelivery
    },
    {
        id: "003",
        title: "Enjoy great discounts",
        description: "Special project or large volume? No hassle with our one-price-fits-all policy. Ask for a custom quote that fits your needs. Get in contact by filling out the contact form or feel free to give us a call.",
        icon: discount
    },
    {
        id: "004",
        title: "Payment & invoicing",
        description: "At the end of each month we will send an invoice for all the job done(we can send invoice individually for each project too if require) Invoice should be paid within 15-30 days from invoice date.",
        icon: invoice
    },
    {
        id: "005",
        title: "Your data is secure",
        description: "You can be sure that our systems are safe. Our specialists have set up the most secure environment to process your images and data. So don't worry, you are safe with us.",
        icon: secure
    },
    {
        id: "006",
        title: "Perfect plan ",
        description: "Whatever your tasks volume may be, we offer the perfect plan to tailor to your every need.",
        icon: planning
    },
]