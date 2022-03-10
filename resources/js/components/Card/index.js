import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardFooterCollapse from "./CardFooterCollapse";

export default Object.assign(Card, {
    Body: CardBody, 
    Header: CardHeader,
    Footer: CardFooter,
    FooterCollapse: CardFooterCollapse,
});
