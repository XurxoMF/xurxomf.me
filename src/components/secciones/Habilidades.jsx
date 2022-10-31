import React from "react";

const Habilidades = () => {
    return (
        <section className="w-full pb-36">
            <h1 className="py-12 text-center font-bold text-2xl lg:text-3xl">HABILIDADES</h1>
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-8 items-center lg:justify-center lg:items-start">
                <section className="bg-xmf-dark-blue dark:bg-opacity-5 dark:bg-xmf-light-white bg-opacity-5 border border-xmf-dark-blue dark:border-xmf-light-white dark:border-opacity-10 border-opacity-10 rounded-2xl shadow-xl w-full max-w-xs lg:self-stretch p-8 text-center">
                    <h2 className="text-2xl w-fit m-auto px-4 pb-2 mb-8 border-b-2 border-xmf-pink">FRONT-END</h2>
                    <ul className="flex flex-col gap-4">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScrip</li>
                        <li>React.js + React Router</li>
                        <li>TailwindCSS</li>
                        <li>SASS & SCSS</li>
                        <li>Pug</li>
                    </ul>
                </section>
                <section className="bg-xmf-dark-blue dark:bg-opacity-5 dark:bg-xmf-light-white bg-opacity-5 border border-xmf-dark-blue dark:border-xmf-light-white dark:border-opacity-10 border-opacity-10 rounded-2xl shadow-xl w-full max-w-xs lg:self-stretch p-8 text-center">
                    <h2 className="text-2xl w-fit m-auto px-4 pb-2 mb-8 border-b-2 border-xmf-pink">BACK-END</h2>
                    <ul className="flex flex-col gap-4">
                        <li>PHP</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>SQL</li>
                        <li>SQLite3</li>
                        <li>Node.js (Estudiando)</li>
                    </ul>
                </section>
                <section className="bg-xmf-dark-blue dark:bg-opacity-5 dark:bg-xmf-light-white bg-opacity-5 border border-xmf-dark-blue dark:border-xmf-light-white dark:border-opacity-10 border-opacity-10 rounded-2xl shadow-xl w-full max-w-xs lg:self-stretch p-8 text-center">
                    <h2 className="text-2xl w-fit m-auto px-4 pb-2 mb-8 border-b-2 border-xmf-pink">OTRAS</h2>
                    <ul className="flex flex-col gap-4">
                        <li>Java</li>
                        <li>Linux</li>
                        <li>Windows</li>
                        <li>Docker</li>
                        <li>Git & GitHub</li>
                        <li>NPM</li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Habilidades;
