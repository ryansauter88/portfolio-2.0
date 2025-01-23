import Showcase from "../components/Showcase";
import showcaseData from "../utils/showcaseData";
import { Link, useLocation } from 'react-router-dom';

function ShowcasePage() {
    const makeShowcase = (object) => {
        return <Showcase showObj={object}/>
    }

    const currentPage = useLocation().pathname;
    function FindGame() {
        const pageNum = currentPage.slice(5,6);
        return +pageNum
    }
    
    return (
        <>
            {makeShowcase(showcaseData[FindGame() - 1])}
        </>
    );
}

export default ShowcasePage