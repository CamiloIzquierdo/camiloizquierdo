import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { projects } from "../data/Projects";
import * as Data from "../../assets/Index";

export const ProjectsSlider = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    return (
        <Slider
            {...settings}
            className="gap-3 flex my-slider justify-center items-center"
        >
            {projects.map((project) => (
                <div
                    className="grayscale hover:grayscale-0 transition-all hover:scale-110 max-w-[700px] group relative"
                    key={project.id}
                >
                    <div
                        style={{ backgroundImage: `url(${project.image})` }}
                        className="min-h-[400px] object-cover group-hover:blur-[3px] bg-contain bg-no-repeat bg-center "
                    />
                    <div className="absolute gap-5 text-xl max-w-lg px-5 py-5 text-white top-14 left-24 hidden group group-hover:flex flex-col transition-all delay-500 bg-gray-800 bg-opacity-60">
                        <span className="bebas text-5xl">
                            {project.nameProject}
                        </span>
                        <span className="play text-sm">
                            {project.dataProject}
                        </span>
                        <span className="text-center">{project.tec}</span>
                        <div>
                            <div className="flex gap-14 items-center justify-center">
                                <a
                                    href={project.live}
                                    target="__blank"
                                    className="hover:text-blue-500 font-semibold flex gap-2 items-center hover:scale-105 cursor-pointer"
                                >
                                    <img src={Data.Live} width={30} alt="" />
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href={project.code}
                                    target="__blank"
                                    className="hover:text-blue-500 font-semibold flex gap-2 items-center hover:scale-105 cursor-pointer"
                                >
                                    <img src={Data.Github} width={30} alt="" />
                                    <span>Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};
