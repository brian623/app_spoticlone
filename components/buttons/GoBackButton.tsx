import { goBackIcon } from "../../public/Svgs";

const GoBackButton = () => {
    return (
        <button className="rounded-full h-8 w-8 flex items-center justify-center bg-brown-dark text-gray-default cursor-not-allowed" disabled>
            {goBackIcon}
        </button>
    );
}

export default GoBackButton;