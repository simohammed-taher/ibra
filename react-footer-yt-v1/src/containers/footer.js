import React from "react";
import Footer from "../components/footer";


export function FooterContainer() {
    return(
        <Footer>
              <footer.Wrapper> 
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Client</Footer.Link>
                     <Footer.Link href="#">Testimonias</Footer.Link>
                </Footer.Column>
              </footer.Wrapper>
        </Footer>
    )
}