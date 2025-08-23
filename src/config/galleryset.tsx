import  Header from "../images/Header.svg";

export type Galleryprops = {
    menu: string[];
    title: string;
    description: string;
    image: string[];
    sourcelain: string[];
}

export const gallerySet: Galleryprops = {
    menu: ["All", "Web Design", "Mobile Design", "UI/UX", "Branding"],

    title: "Gallery",
    description: "Explore our collection of stunning designs and creative works.",
    
    image:[
        "../src/images/Part1.png",
        "../src/images/Part2.png",
        "../src/images/Part3.png",
    ], 
    sourcelain: [
        Header,
        "../public/images/Part2.png",
    ]

}