import { ProjectsSlider } from "./ProjectsSlider";

export const Projects = () => {
    return (
        <div className="h-screen bg-black items-center justify-center flex w-full">
            <div className="w-[1800px] h-full py-32 items-center justify-center gap-5">
                <h2 className="text-9xl text-white text-center pb-12 bebas">
                    Sus proyectos
                </h2>
                <ProjectsSlider />
            </div>
        </div>
    );
};
