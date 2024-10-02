export interface CarouselElement {
    icon: string;
    title: string;
    description: string;
    link: string;
}

export const carouselElements: CarouselElement[] = [
    {
        icon: "/img/drop-out-watch.png",
        title: "Análisis de la deserción estudiantil",
        description: "Se estudia la probabilidad de deserción estudiantil con base en registros históricos de desertores en la universidad de Antioquia.",
        link: "https://github.com/andresm05/dropout_watch.git"
    }
    , {
        icon: "/img/dao.jpg",
        title: "DAO",
        description: "Se implementa un DAO para la toma de decisiones en una organización descentralizada sobre el protocolo ICP.",
        link: "https://github.com/GovernCycle/govern-cycle.git"
    },
    {
        icon: "/img/adn.jpg",
        title: "Bloom Filter aplicado al ADN",
        description: "Se toma una muestra de ADN K-merizada que proviene de colecciones de cálculo dental humano. A partir de esta base de datos se crea el Bloom Filter y se compara con otras muestras de ADN, que pueden ser de cálculo dentral o de alguna otra especie, y se determina el porcentaje de contaminación.",
        link: "https://github.com/andresm05/Bloom_Filter_DNA.git"
    }
]