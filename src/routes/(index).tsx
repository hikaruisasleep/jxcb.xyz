import { Title } from "solid-start";
import Navbar from "~/components/Navbar";
import Background from "~/components/StarsBackground";
import "~/components/Global.scss"

export default function Home() {
    return (
        <main>
            <Navbar />
            <Title>jxcb</Title>
            <Background />
        </main>
    );
}
