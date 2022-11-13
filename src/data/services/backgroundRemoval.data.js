import img1 from "./../../assets/images/solutions/background-remove/Background-removal-services--raw-(2).jpg";
import imgEdited1 from "./../../assets/images/solutions/background-remove/Background removal services-edit (2).png";
import img2 from "./../../assets/images/solutions/background-remove/Background removal services- raw (3).jpg";
import imgEdited2 from "./../../assets/images/solutions/background-remove/Background removal services-edit (3).png";
import img3 from "./../../assets/images/solutions/background-remove/Background removal services- raw (4).jpg";
import imgEdited3 from "./../../assets/images/solutions/background-remove/Background removal services-edit (4).png";
import img4 from "./../../assets/images/solutions/background-remove/Background removal services- raw (5).jpg";
import imgEdited4 from "./../../assets/images/solutions/background-remove/Background removal services-edit (5).png";
import img5 from "./../../assets/images/solutions/background-remove/Background removal services- raw (6).jpg";
import imgEdited5 from "./../../assets/images/solutions/background-remove/Background removal services-edit (6).png";
import img6 from "./../../assets/images/solutions/background-remove/Background removal services- raw (7).jpg";
import imgEdited6 from "./../../assets/images/solutions/background-remove/Background removal services-edit (7).png";
import img7 from "./../../assets/images/solutions/background-remove/Background removal services- raw.jpg";
import imgEdited7 from "./../../assets/images/solutions/background-remove/Background removal services-edit.png";

import cloudIcon from "./../../assets/icons/services/cloud-upload.svg";
import approvedIcon from "./../../assets/icons/services/approved.svg";
import subscriptionIcon from "./../../assets/icons/services/subscription-plan.svg";
// background removal data
const data = {
    banner: {
        img1: img1,
        img2: imgEdited1,
        title1: "Reliable",
        highlightTitle: "Background Removal",
        title3: "Service",
        description: "Reliable photo background removal services",
        buttonText: "10 Free Sample Images"
    },
    workInAction: {
        subTitle: "Background Removal examples",
        images: [
            {
                id: "11",
                img1: img2,
                img2: imgEdited2
            },
            {
                id: "12",
                img1: img3,
                img2: imgEdited3
            },
            {
                id: "13",
                img1: img4,
                img2: imgEdited4
            },
            {
                id: "15",
                img1: img5,
                img2: imgEdited5
            },
        ]
    },
    whyUseThis: {
        img: img7,
        imgEdited: imgEdited7,
        title: "The reasons to use background removal",
        description: `There are several important reasons to use a background removal service for your product photos. By removing the background, you can eliminate distractions and make it easier for customers to focus on your products. 
<br/> <br/>
        Additionally, removing the background can help reduce the file size of your images, making them easier to upload and download. Additionally, using a consistent background across all your product photos can create a more professional look for your eCommerce site. 
        <br/> <br/>
        Finally, some online marketplaces require that product photos have a white background in order to be compliant. Using a background removal service can help you meet these requirements.`,

    },
    customizeServiceCard: [
        {
            id: 1011,
            icon: cloudIcon,
            title: "File Outputs",
            listItems: [
                'PNG',
                'JPG',
                'PSD',
                'TIFF'
            ]
        },
        {
            id: 1011,
            icon: approvedIcon,
            title: "Background Colors",
            listItems: [
                'White',
                'Grey',
                'Black',
                'Transparent',
                'Custom'
            ]
        },
        {
            id: 1011,
            icon: subscriptionIcon,
            title: "Advanced Services",
            listItems: [
                'Cropping and Scaling',
                'Background Extension',
                'Prop Removal',
                'Clipping Path',
                'Background Retouching'
            ]
        },
    ]
}
export default data