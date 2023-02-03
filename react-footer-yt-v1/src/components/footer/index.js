import React from "react";
import { Container,Wrapper,Row,Link,Title } from "./styles/footer";

export default 
function Footer({children, ...restProps})

{
        return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...restPropos}){
    return <Wrapper {...restPropos}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restPropos}){
    return <Row {...restPropos}>{children}</Row>
}

Footer.Link = function FooterLink({children, ...restPropos}){
    return <Link {...restPropos}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restPropos}){
    return <Title {...restPropos}>{children}</Title>
}
