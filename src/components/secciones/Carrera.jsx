import React from "react";

const Carrera = () => {
    return (
        <section className="w-full pb-36">
            <h1 className="pb-12 text-center font-bold text-2xl lg:text-3xl">ESTUDIOS Y TRABAJOS</h1>
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-8 items-center lg:justify-center lg:items-start">
                <section className="bg-xmf-dark-blue dark:bg-opacity-5 dark:bg-xmf-light-white bg-opacity-5 border border-xmf-dark-blue dark:border-xmf-light-white dark:border-opacity-10 border-opacity-10 rounded-2xl shadow-xl w-full max-w-lg lg:self-stretch p-8 text-center">
                    <h2 className="text-2xl w-fit m-auto px-4 pb-2 mb-8 border-b-2 border-xmf-pink">ESTUDIOS</h2>
                    <ul className="flex flex-col gap-4">
                        <li>Ciclo Medio Montaje y Mantenimiento de Sistemas Microinformáticos y Redes</li>
                        <li>Ciclo Superior Desarrollo de Aplicaciones Web</li>
                    </ul>
                </section>
                <section className="bg-xmf-dark-blue dark:bg-opacity-5 dark:bg-xmf-light-white bg-opacity-5 border border-xmf-dark-blue dark:border-xmf-light-white dark:border-opacity-10 border-opacity-10 rounded-2xl shadow-xl w-full max-w-lg lg:self-stretch p-8 text-center">
                    <h2 className="text-2xl w-fit m-auto px-4 pb-2 mb-8 border-b-2 border-xmf-pink">TRABAJOS</h2>
                    <ul className="flex flex-col gap-4">
                        <li>Hmmm... un poco vacío esto no??</li>
                        <li>Creo que la experiencia laboral no es mi fuerte por ahora.</li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Carrera;
