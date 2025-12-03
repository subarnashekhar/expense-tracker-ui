import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="text-center py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                    Take Control of Your Finances
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">
                    Your foundation for secure, intelligent financial management. Effortlessly track your income and expenses to achieve your financial goals.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;