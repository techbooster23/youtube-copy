// import apnaCollage from '..//src/assets/download.png';
// import channelLogo from '..//src/assets/thumbnail1.png';
// import thapaTechnical from '..//src/assets/thumbnail2.png';
// import thumbnail1 from '..//src/assets/thumbnail1.png';

import { data } from "react-router-dom";


const videoData = [
    {
        id: 0,
        image : "/src/assets/download (11).jpeg",
        url: "aWmUVINkzS8?si=vdblG8hD6mhKXyHT",
        video_title: "Watch this before you start coding",
        channel_img: "/src/assets/channels4_profile.jpg",
        channel_name: "Apna Collage",
        views: "15K",
        time: "2 Days ago"
    },
    {
        id: 1,
        image : "/src/assets/download (10).jpeg",
        url: "Az38f7cUzK8?si=Mlk_IILpecfqsyn3",
        video_title: "School | Akash Gupta | Stant-Up-Comedy",
        channel_img: "/src/assets/download.png",
        channel_name: "T Series",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 2,
        image : "/src/assets/download (8).jpeg",
        url: "l2AMaPCsJIQ?si=YTSTECTvbB4xmJY2",
        video_title: "SIKANDAR: Official Trailar | ",
        channel_img: "/src/assets/download.png",
        channel_name: "NadiadwalaGrandson",
        views: "5K",
        time: "12 Days ago"
    },
    // Updation needed
    {
        id: 3,
        image : "/src/assets/download (7).jpeg",
        url: "h9Z4oGN89MU?si=XeNzNQiZAMQig3g4",
        video_title: "How do Graphics Cards Works? Exploring GPU Artitecture ",
        channel_img: "/src/assets/download.png",
        channel_name: "Branch Education",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 4,
        image : "/src/assets/download (6).jpeg",
        url: "1IVopxj8q8U?si=DC8MgO80AIYTQrA6",
        video_title: "Full Stack Development Roadmap | Collage Wallah",
        channel_img: "/src/assets/download.png",
        channel_name: "Collage Wallah",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 5,
        image : "/src/assets/download (5).jpeg",
        url: "z9LPY7B_crU?si=VYFpWlHYMj9HcRer",
        video_title: "1.5 Cr Sallery and 0 Tax in Frontend Developer",
        channel_img: "/src/assets/download.png",
        channel_name: "Fraz Tube",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 6,
        image : "/src/assets/download (4).jpeg",
        url: "TFDM5iZLUvE?si=sCbTXEcmeBAQzQVN",
        video_title: "Harshad Mehta Scam 1992 : The Full Story",
        channel_img: "/src/assets/download.png",
        channel_name: "Shivanshu Agrawal",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 7,
        image : "/src/assets/download (3).jpeg",
        url: "rAejJBmo55Y?si=upot21lOkhPyRMff",
        video_title: "Day in the life of Software Engineer at Google",
        channel_img: "/src/assets/download.png",
        channel_name: "Divyanshi Srivastava",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 8,
        image : "/src/assets/download (2).jpeg",
        url: "N7qtQ_T0aF8?si=XlV5gbKjMzoeNFTS",
        video_title: "How to China solved its Air Pollution Crises",
        channel_img: "/src/assets/download.png",
        channel_name: "The Deshbhakt",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 9,
        image : "/src/assets/download.jpeg",
        url: "CBy1FbuyA6A?si=B9sr9xIxgUYtq4JK",
        video_title: "Aman tries 'FOMO' refreshing drink ",
        channel_img: "/src/assets/download.png",
        channel_name: "Shark Tank India",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 10,
        image : "/src/assets/download (1).jpeg",
        url: "W_NvW0wSh6U?si=9gi-sPfl9oq1Bhdy",
        video_title: "Pain Inside Mashup | Sadness Memory | Nonstop Mashup",
        channel_img: "/src/assets/download.png",
        channel_name: "T-Series Songs",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 11,
        image : "/src/assets/images.jpeg",
        url: "uK70jF0Csyo?si=wQmXpapUQSFQDEsl",
        video_title: "Frontend Developer Interview at Adobs and Claim job",
        channel_img: "/src/assets/download.png",
        channel_name: "React JS Developer",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 12,
        image : "/src/assets/images (1).jpeg",
        url: "vW86G9SYPjk?si=sHFACt3X9NFixvaf",
        video_title: "KRRISH4: Jaadu Returns-Trailar",
        channel_img: "/src/assets/download.png",
        channel_name: "Fantasy Studio",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 13,
        image : "/src/assets/download (12).jpeg",
        url: "WdGMo_g8BD0?si=rMwo6GUowmnetWpP",
        video_title: "Kia Syros 2025 - NEXON is cheeper",
        channel_img: "/src/assets/download.png",
        channel_name: "HER GARAGE",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 14,
        image : "/src/assets/download (13).jpeg",
        url: "4WdKfXXE_5Y?si=delhxhBoIiKRvQKy",
        video_title: "Har Kisi Ko (Slowed+Reverb) Music Edits",
        channel_img: "/src/assets/download.png",
        channel_name: "Music Edits",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 15,
        image : "/src/assets/download (14).jpeg",
        url: "peU4DlLayY4?si=XnLzFIbnSmn0X3QH",
        video_title: "White Hat Vs Black Hat | Breakthrough",
        channel_img: "/src/assets/download.png",
        channel_name: "Nactional Geographics India",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 16,
        image : "/src/assets/download (15).jpeg",
        url: "EHkncEspk6Q?si=MKq7-zUtyvUeCPQk",
        video_title: "Rama Rama Ratte Ratte",
        channel_img: "/src/assets/download.png",
        channel_name: "Saregama Bhakti",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 17,
        image : "/src/assets/download (16).jpeg",
        url: "ox8zEHQBN84?si=B6UFfulG6kdCgd-b",
        video_title: "BEN 10: Live Action Movie - First Trailar",
        channel_img: "/src/assets/download.png",
        channel_name: "Screen Culture",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 18,
        image : "/src/assets/download (17).jpeg",
        url: "_P2aI9SYDbo?si=5SOVVEdrLBCKlUU8",
        video_title: "Garuda Gamana Tava | Shri Naval Kishori",
        channel_img: "/src/assets/download.png",
        channel_name: "Divine Dharohar",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 19,
        image : "/src/assets/download (18).jpeg",
        url: "Qs2-klYtq5Y?si=_VZlKNX6190EJIqy",
        video_title: "The Most BEAUTIFUL Earth Video",
        channel_img: "/src/assets/download.png",
        channel_name: "SK VISION",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 20,
        image : "/src/assets/download (19).jpeg",
        url: "A1vfiGuILwA?si=80GWn-gKzLGkMDdM",
        video_title: "How A Poor Boy Built Obreoi Hotels",
        channel_img: "/src/assets/download.png",
        channel_name: "Shivanshu Agraval",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 21,
        image : "/src/assets/download (20).jpeg",
        url: "qaeHKoq_CLM?si=uI-dyJ257iGsCcJ_",
        video_title: "Tony Stark's Bult Iron Man Suit Ups",
        channel_img: "/src/assets/download.png",
        channel_name: "Marvel Entertainment",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 22,
        image : "/src/assets/download (21).jpeg",
        url: "KchTwrFMAXU?si=ZPzzJdvOaZZLGEsr",
        video_title: "Drishyam 3 - Offical Trailar",
        channel_img: "/src/assets/download.png",
        channel_name: "Cinema",
        views: "5K",
        time: "12 Days ago"
    },
    {
        id: 22,
        image : "src/assets/download (22).jpeg",
        url: "icudf_w_pqU?si=mY3bu-Oz8z92d2kD",
        video_title: "How to Improve English Speaking for Interview",
        channel_img: "/src/assets/download.png",
        channel_name: "Apna COllage",
        views: "5K",
        time: "12 Days ago"
    },

]

export default videoData;