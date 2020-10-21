import React, { userState } from "react";

export default function Accordion({children, ...restProps}) {
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProops }) {
    return <Title { ...restProps }>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({children, ...restProops }) {
    return <Frame { ...restProps }>{children}</Frame>;
};

Accordion.Item = function AccordionItem({children, ...restProops }) {
    const [toogleShow, setToogleShow] = userState(false);
    return <Item { ...restProps }>{children}</Item>;
};

Accordion.Header = function AccordionHeader({children, ...restProops }) {
    const [toogleShow, setToogleShow] = userState(false);
    return <Header { ...restProps }>{children}</Header>;
};