import React from "react";
import { TypeAnimation } from "react-type-animation";

const Bienvenida = () => {
    return (
        <div className="w-full h-[calc(100vh-4rem)] flex flex-col justify-evenly">
            <section className="text-2xl flex flex-col sm:text-4xl lg:text-5xl gap-4">
                <p>Hola, soy Xurxo</p>
                <TypeAnimation sequence={["Full-Stack Developer", 1000, "Informático", 1000, "Rockstar Adicted", 1000]} cursor={true} repeat={Infinity} className="text-xmf-pink" />
            </section>
            <div className="md:text-xl">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolor eum itaque distinctio eaque? Corrupti magnam expedita asperiores ut. Maxime nesciunt fugit dolore sed odio
                    expedita vitae? Doloribus, recusandae sequi!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio commodi, nisi tenetur magni rem possimus recusandae totam, laboriosam voluptatibus labore ducimus esse
                    inventore ipsam culpa blanditiis officiis, quasi perspiciatis.
                </p>
            </div>
        </div>
    );
};

export default Bienvenida;
