import React, { userState, userContext, createContext } from "react";

const ToogleContext = createContext();

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
    return(
        <ToogleContext.Provider value={{ toogleShow, setToogleShow}}>
            <Item { ...restProps }>{children}</ToogleContext.ProviderItem>;
        </ToogleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({children, ...restProops }) {
    return <Header onClick={() => setToogle()} { ...restProps }>
        {children}
    </Header>;
};