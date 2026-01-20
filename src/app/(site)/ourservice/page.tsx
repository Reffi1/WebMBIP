import OurService from "@/app/components/ourservice";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Mitrabhakti Inti Persada",
};

export default function Page() {
    return (
        <>
        <OurService />
        </>
    );
};