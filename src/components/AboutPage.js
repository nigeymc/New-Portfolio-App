import React from "react";
import { Container, Col } from 'react-bootstrap';
import { updateMyAge } from '../helper-functions/helpers';
import PageHeader from "../components/PageHeader";

const pageTitle = {
    firstWord: "My",
    secondWord: "Story"
}

const { firstWord, secondWord } = pageTitle;

const AboutPage = () => (

    <Container fluid className="p-0">
        <section className="general-section" id="about" >
            <PageHeader firstWord={firstWord} secondWord={secondWord} />
            <div className="general-section__content">
                <Col>
                    <div>
                        <h2>Then</h2>

                        <p>I'm {updateMyAge()} years old &amp; I'm from a small town called Omagh, in Northern Ireland. I've been living in London since 2012, moving down from Leeds where I lived for 4 years prior to this.</p>
                        <p>I've been designing, coding &amp; generally hacking together websites <em>&amp; more recently </em> web applications for over 10 years as a Front End Engineer &amp; Web Designer. In this time, I've been lucky enough to have worked for some great companies, gaining loads of valuable experience and learning a wide range of skills professionally &amp; personally. </p>
                        <p>I started out on this journey in 2003 during my first year at University, when I learned the basics of HTML, CSS, Photoshop &amp; Flash (remember that?). It wasn't long before I was building websites for family &amp; friend's businesses. After completing my BSc Interactive Multimedia Design degree at the University of Ulster in Belfast, I moved to the city of Leeds to find work in Web Development at the beginning of 2008. Having spent 4 years in Leeds, working as a Web Designer/Developer for both a small local creative agency and a large commercial airline & package holidays company (Jet2.com) I made the move to London to further my professional development in January 2012.</p>
                        <p>Over the past 8 years in London, I've worked in some great engineering teams for e-commerce companies like River Island, Net A Porter and Stella &amp; Dot.</p>
                        <h2>Now</h2>
                        <p>I am currently looking for the next step in my career development, having finished employment with River Island in August 2020 after 4 years, due to the Covid-19 pandemic. In August 2020, I made the decision not to jump straight back in to full time employment. Having recently gotten married just 2 weeks before the pandemic struck in March 2020 &amp; having been furloughed for 4 months, I decided to take some more time out to support my wife at this time, as she's a Front Line NHS nurse.</p>
                        <p>Leaving my employment with River Island was unexpected &amp; a disruption to my own personal development, as I was working on exciting projects and learning new skills everyday. Despite the current circumstances I have also been using this time to upskill; honing my ReactJS &amp; Redux skills. Learning &amp; coding with all of the newest features in the ReactJS library including Hooks and the Context API. I also keep myself busy working on small freelance projects where I get to design &amp; code for friends &amp; family.</p>
                        <h2>The Future</h2>
                        <p>I hope to be back in employment soon, &amp; working on exciting &amp; challenging projects. With over 10 years of experience in Front End Engineering roles, I believe I have a lot to offer. Having taken some time out, I am refreshed and eager to get back to work &amp; continue adding to, as well as offering the knowledge &amp; experience I already have. </p>
                        <p>If you have a role you believe I'd be a good fit for, then why not get in touch :-)</p>
                    </div>
                </Col>
            </div>
        </section>
    </Container>)

export { AboutPage as default };