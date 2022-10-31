import React from "react";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
    return (
        <section className="w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center gap-20 pb-12">
            <section className="text-2xl sm:text-5xl flex flex-col gap-4">
                <p>Hola, soy Xurxo</p>
                <TypeAnimation sequence={["Full-Stack Developer", 1500, "Informático", 1500, "Técnico en redes", 1500]} cursor={true} repeat={Infinity} speed="20" className="text-xmf-pink" />
            </section>
            <div className="md:text-2xl max-w-4xl flex flex-col gap-4">
                <p>
                    Apasionado y titulado en desarrollo de <span className="text-xmf-pink">Front-end</span>, <span className="text-xmf-pink">UI</span> y <span className="text-xmf-pink">UX</span>. Con
                    conocimiento y titulación en desarrollo de <span className="text-xmf-pink">Back-end</span> y <span className="text-xmf-pink">Técnico Informático y en Redes</span>.
                </p>
                <p>Nunca feliz con lo que ya sé, siempre aprendiendo y perfeccionando nuevas tecnologías y habilidades.</p>
            </div>
        </section>
    );
};

export default AboutMe;
