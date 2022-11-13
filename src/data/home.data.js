

// feature component
import transparency from "./../assets/icons/homepage/noun-transparency-4268817 1.svg";
import approved from "./../assets/icons/homepage/noun-approved-2626137 1.svg";
import subscription from "./../assets/icons/homepage/noun-subscription-plan-4251237 1.svg";
// services component
import nonTransparent from "./../assets/icons/homepage/noun-transparent-background-3191078 1.svg";
import mannequin from "./../assets/icons/homepage/invisible-mannequin.svg";
import retouch from "./../assets/icons/homepage/noun-retouching-72486 1.svg";
import treeDModel from "./../assets/icons/homepage/noun-3d-model-4127846 1.svg";
import rotate360 from "./../assets/icons/homepage/noun-360-rotate-1317704 1.svg";
import animation3d from "./../assets/icons/homepage/noun-3d-animation-2298473 1.svg";


// feature data
export const features = [
    {
        percentage: -45,
        title: "Lower Cost",
        description: "Our editing infrastructure is set up in such a way we can offer you the  lowest total cost of editing possible."
    },
    {
        percentage: -65,
        title: "Faster Delivery",
        description: "Turnaround times and first-time-right ratio (99%) guarantees for consistent, reliable quality."
    },
    {
        percentage: +24,
        title: "Sales Lift",
        description: "Remove the back and forth to reach the perfect result."
    }
]

export const featuresCard = [
    {
        id: "01",
        icon: transparency,
        title: "Always Transparent",
        description: "We will not waste your time. We only promise what we can deliver at scale."
    },
    {
        id: "02",
        icon: approved,
        title: "Quality Guarantee",
        description: "We reprocess free of charge until you are satisfied. Reprocessed images are fixed with high priority."
    },
    {
        id: "03",
        icon: subscription,
        title: "Perfect Plan",
        description: "Whatever your tasks volume may be, we offer the perfect plan to tailor to your every need."
    },
]



// services data

export const services = [
    {
        id: "001",
        title: "Background Removal",
        description: "Cutouts, knock-outs, etching, silhouettes, etc. However, you call it, removing the background from a product image is an essential photo editing task.",
        icon: nonTransparent
    },
    {
        id: "002",
        title: "Invisible Mannequin",
        description: "Give life to your products by removing the mannequin from e-commerce product images.",
        icon: mannequin
    },
    {
        id: "003",
        title: "Photo Retouching",
        description: "Photo retouching makes beautiful images even more amazing & creates consistency over time.",
        icon: retouch
    },
    {
        id: "004",
        title: "Product Rendering",
        description: "Leveraging 3D modeling is key to benefiting from cutting-edge e-Commerce solutions and makes expensive product photoshoots redundant.",
        icon: treeDModel
    },
    {
        id: "005",
        title: "360 Product Spins",
        description: "Transform your 2D images into 3D on the website – let the customers view your product from all the angles. Great opportunity to test the market before investing into production.",
        icon: rotate360
    },
    {
        id: "006",
        title: "3d Product Animation",
        description: "Product animation gives the power to show off the product in unseen ways like in live action films. For example stunning exploded views can show all of the products insides.",
        icon: animation3d
    },
]



// solutions mega menu data 

export const solutions = [
    {
        label: "Image Editing",
        listItem: [
            {
                id: "001",
                title: "Background Removal",
                path: "/background-removal",
                icon: nonTransparent
            },
            {
                id: "002",
                title: "Invisible Mannequin",
                path: "/invisible-mannequin",
                icon: mannequin
            },
            {
                id: "003",
                title: "Photo Retouching",
                path: "/photo-retouching",
                icon: retouch
            },
        ]
    },
    {
        label: "CGI",
        listItem: [
            {
                id: "004",
                title: "Product Rendering",
                path: "/product-rendering",
                icon: treeDModel
            },
            {
                id: "005",
                title: "360 Product Spins",
                path: "/product-spins-360",
                icon: rotate360
            },
            {
                id: "006",
                title: "3d Product Animation",
                path: "/product-animation-3d",
                icon: animation3d
            },
        ]
    }
]