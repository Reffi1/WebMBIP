
import AboutPage from "@/app/components/About";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Mitrabhakti Inti Persada",
};

export default function Page() {
    return (
        <>
        <AboutPage />
        </>
    );
};
