import "./global.css";

export const metadata = {
    title: "NBAGPT",
    description: "NBA - Tournament GPT",
}

const Rootlayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

export default Rootlayout;