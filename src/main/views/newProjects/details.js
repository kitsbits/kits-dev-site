import { misc, dbsDiary, countMy, nativeWeather, pinglist, ponder, logos } from "../../assets/assets";

export const projects = [
    {
        title: "Ponder Me and You",
        description: "Ecommerce site designed and built for a local digital artist",
        web: ponder.pictures,
        code: "https://github.com/noblepaper/ponder-me-and-you",
        frameworks: [logos.sketch, logos.react, logos.glamorous, logos.redux, logos.reactRouter, logos.mongodb, logos.express],
        header: ponder.header,
    },
    {
        title: "Count My URL",
        description: "Easily access social share counts for any website.",
        web: countMy.pictures,
        code: "https://github.com/noblepaper/count-my-url",
        frameworks: [logos.react, logos.glamorous, logos.d3, logos.webpack],
        header: countMy.header,
    },
    {
        title: "DBs Diary",
        description: "A simple, purposefully dated, user interface for uninhibited journaling... and other things.",
        web: dbsDiary.pictures,
        code: "https://github.com/noblepaper/dbs-diary",
        frameworks: [logos.sketch, logos.react, logos.redux, logos.reactRouter, logos.mongodb, logos.express],
        header: dbsDiary.header,
    },
    {
        title: "Native Weather",
        description: "React Native IOS weather app with wildly unneccessary user authentication",
        web: nativeWeather.pictures,
        code: "https://github.com/noblepaper/native-weather",
        frameworks: [logos.react, logos.redux, logos.mongodb, logos.express],
        header: nativeWeather.header,
    },
    {
        title: "Pinglist",
        description: "App design for API monitoring service",
        web: pinglist.pictures,
        frameworks: [logos.sketch],
        header: pinglist.header,
    },
]
