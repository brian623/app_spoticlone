import { GoNextIcon } from "../../public/Svgs";

const GoNextButton = () => {
    return (
        <button className="rounded-full h-8 w-8 flex items-center justify-center bg-brown-dark text-gray-default cursor-not-allowed">
        {GoNextIcon}
    </button>
    );
}

export default GoNextButton;