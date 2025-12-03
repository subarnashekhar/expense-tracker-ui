import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";

const LandingPage = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            <Header />
            <main>
                <HeroSection/>
            </main>
        </div>
    )
}

export default LandingPage;