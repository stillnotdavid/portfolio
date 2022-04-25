import * as React from "react";
import { Logo } from "../../../components";
import "./style.scss";

import { Helmet } from "react-helmet";

import hero from "../../../images/projects/currency/hero.png";
import brands from "../../../images/projects/currency/currency-brands.png";
import buttons from "../../../images/projects/currency/buttons.png";
import tokens from "../../../images/projects/currency/tokens.png";
import components from "../../../images/projects/currency/components.png";
import variants from "../../../images/projects/currency/variants.png";
import patterns from "../../../images/projects/currency/patterns.png";
import prototypes from "../../../images/projects/currency/prototypes.png";
import doc from "../../../images/projects/currency/docsite01.png";
import doc2 from "../../../images/projects/currency/docsite02.png";
import doc3 from "../../../images/projects/currency/docsite03.png";
import "../../../styles/main.scss";

// markup
const ProjectPage = () => {
  return (
    <div className="currency">
      <Helmet title="Currency Design System - David Le's Portfolio" />
      <header className={`header`}>
        <div className="header__container">
          <Logo />
        </div>
      </header>
      <div className="project">
        <div className="container">
          <div className="project__hero">
            <img src={hero} />
          </div>
          <div className="project__header">
            <div className="project__name">
              <div className="project__company">M&amp;T Bank</div>
              <h1>Currency Design System</h1>
            </div>
          </div>
          <div className="project__info">
            <div className="project__overview">
              <h2>Overview</h2>
              <p>
                Currency is the official design system of{" "}
                <a href="https://mtb.com">M&amp;T Bank</a>, used by numerous
                design and engineering teams. It is comprised of three parts,
                the Figma component library, the codebase, and the documentation
                standalone site.
              </p>
              <p>
                I joined the bank's Customer Experience Design team in 2018 as
                the second UX Engineer on the Design System team. For the last
                3.5 years, my focus at M&amp;T has been on building Currency
                from the ground up and continuing to grow it as a standalone
                product.
              </p>
              <a
                className="button button--secondary"
                href="https://currency-design-system.netlify.app"
              >
                Visit Live Site
              </a>
            </div>
            <div className="project__role">
              <h2>My Roles</h2>
              <h3>Lead Engineer:</h3>
              <ul>
                <li>
                  I'm currently leading the engineering efforts of Currency,
                  including managing the front-end technology stack, development
                  standards and conventions, approving all pull requests, and
                  responsible for all releases and updates.
                </li>
              </ul>
              <h3>Designer:</h3>
              <ul>
                <li>
                  During its inception, the team was small, so I filled the
                  designer role for several components, as well as fully
                  building the documentation site from scratch.
                </li>
                <li>
                  As a member of the UX team, I am involved in any discussions
                  regarding the design of components and providing guidance on
                  how they are used.
                </li>
              </ul>
            </div>
          </div>

          <div className="project__body">
            <section>
              <h2>Purpose</h2>
              <p>
                The need for a design system is widely known now, almost to the
                point of becoming a new buzzword in the industry, but it was
                only a few years ago that we had to really prove to stakeholders
                and executives the actual value of having one. Design systems
                simply provide consistency, efficiency, and uniformity across a
                brand. Being a UX Engineer, this concept deeply intrigued me as
                I was always the person bridging the gap between engineering and
                design, and a design system in essence is a personification of
                my role at most companies.
              </p>
              <p>
                Design systems remove, or at the very least, migitate the need
                for engineers to go through a design review process in which
                each detail and pixel is examined to see if it matches the
                design that was originally delivered. In fact, this extends even
                to design teams themselves—ensuring that any component or
                element used by one designer is identical to that used by
                another.
              </p>
              <p>
                This of course is not new nor unique to what is branded as a
                "design system". It existed in Sketch as Symbols for quite some
                time, and even moreso in front-end engineering as components. A
                design system takes this principle of consistency and
                reusability and amplifies it across every aspect of the product
                as an umbrella of uniformity. Usage guidelines, content design,
                usability, UI language, tokens, stylesheets, all live and exist
                together under one living, breathing product that is a design
                system.
              </p>
            </section>
            <section>
              <h2>Challenges</h2>
              <h3>In the beginning</h3>
              <p>
                When I first joined, the design system simply did not exist, as
                I was part of the team responsible for creating it from scratch.
                At this time, design systems were a relatively new topic just
                starting to gain popularity. There were only a handful of public
                design systems that we were able to learn and study from, such
                as Shopify's Polaris.
              </p>
              <p>
                My team and I were sent to Clarity in NYC, a design systems
                convention dedicated to guiding and teaching design teams about
                design systems. We learned about various useful topics, such as
                how to sell teams on adapting a design system, component naming
                philosophy, and engineering conventions.
              </p>
              <p>
                Because our team was small, we focused on what was important,
                building what was an MVP of a design system. A Sketch component
                library (we did not switch to Figma until later), a CSS library,
                and a documentation site to showcase and provide guidance on how
                to use our components.
              </p>
              <p>
                To provide value to the company, the components had to not only
                follow every part of the bank's design guidelines, but had to
                also pass vigorous usability testing. On top of that, the
                front-end components had to be cross-browser compatible and
                degrade gracefully on other versions.
              </p>
              <h3>Growing The System</h3>
              <p>
                Convincing teams to adapt a design system was the biggest
                challenge we faced while growing. It didn't matter how great our
                components were, or how clean our code was. Without users, a
                design system serves no purpose as a product. Our design teams
                were enthusiastic about using it, understandably so, as it
                provided them the most value and saved them the most time. From
                a designer's perspective, there were only pros with very little
                cons, since it was easy to simply divert away from it.
              </p>
              <p>
                Getting engineering teams to use our product was another story.
                Developers tend to be more careful with what external
                dependencies they use, have their own conventions and processes
                in place, and overriding code is much more of a hassle than
                overriding design files.
              </p>
              <p>
                Stakeholders were also unsure of the value of having a custom
                design system over something like Google Material that not only
                works straight out of the box but emcompasses more features.
              </p>
              <p>
                On top of acquiring users, we also had the challenge of
                convincing higher ups to allow our team to grow, which was
                incredibly difficult if there were no real teams actively using
                it. It was a catch 22—how could we get the product to be in a
                state where it could be adapted by engineering teams if we
                didn't have the manpower?
              </p>
              <h3>Present Day</h3>
              <p>
                3 years later, our design system is more mature than it was
                before, but certainly not perfect. Design systems are always
                growing, so there's no true final state, but there is still much
                work to do. Even though we've successfully proved our worth,
                scaling was now our biggest challenge.
              </p>
              <p>
                Bug fixes take up the majority of our time and priority, as we
                now have numerous teams using it in their workflow. The more
                use-cases there are, the more bugs to be discovered.
              </p>
              <p>
                There are still more components to build, and we have not found
                a way to efficiently work out external contribution from other
                teams. The process of adding a new component to the design
                system is extensive, and the team isn't growing fast enough to
                compensate for the new demand.
              </p>
            </section>
            <section>
              <h2>Core Principles</h2>
              <p>
                As per its name (by yours truly), Currency is intended to be
                used as bartering system for exchanging [ideas] between
                designers and developers.
              </p>
              <div className="grid">
                <div>
                  <h3>Framework Agnostic</h3>
                  <p>
                    Because it serves such a wide range of teams across the
                    company, Currency itself cannot be tied to a single
                    framework or library, but at the same time, it must be
                    compatible with every engineering stack. To address this, we
                    offer two consumable libraries—a large compiled CSS
                    stylesheet for teams that do not need anything more than
                    pre-existing styles, or a more robust SCSS library. We serve
                    this as an npm package on the company's private registry,
                    allowing any engineering team to quickly make use of it.
                  </p>
                </div>
                <div>
                  <h3>Unopinionated</h3>
                  <p>
                    We understood that the commitment to adapting a design
                    system was huge, so the very least we could do was integrate
                    into product teams without being too invasive. Currency was
                    designed to be a utility belt that allowed itself to be
                    called upon without overriding any existing styles. This was
                    made possible using the BEM naming convention. Additionally,
                    we made it easy to override Currency's styles locally. This
                    was one of our main selling points as to why teams should
                    Currency over Material Design.
                  </p>
                </div>
                <div>
                  <h3>Atomic Design</h3>
                  <p>
                    Coined by Brad Frost, atomic design is a design methodology
                    that groups design elements together based on the atomic
                    theory. Atoms are the smallest building blocks in the
                    natural world, so design elements that cannot be broken down
                    any further are considered atoms. A group of atoms create a
                    molecule, which becomes organisms, and so on. This level of
                    dependency between components allows for seamless
                    scalability and consistency.
                  </p>
                </div>
                <div>
                  <h3>Design Tokens</h3>
                  <p>
                    Tokenizing design artifacts allows for cross-platform
                    synchronization, and goes hand-in-hand with the atomic
                    design methodology. Tokens are essentially subatomic
                    particles (such as an electron), used to form atoms. These
                    tokens are aligned between design assets and code to ensure
                    uniformity. This also allows for more structured code
                    writing.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2>Brands</h2>
              <p>
                Currency is the design system for both M&amp;T Bank and
                Wilmington Trust. Because the brands are simultaneously
                independent and interconnected, the design system has to also
                reflect this.
              </p>
              <img src={brands} />
              <p>
                Components exist for both brands, keeping structural
                similarities and sharing the same codebase, with different
                tokens being fed to them. However, some components are
                brand-exclusive, and while each component exists in the system,
                they are not used unless necessary.
              </p>
              <img src={buttons} />
            </section>
            <section>
              <h2>Design Tokens (Subatoms)</h2>
              <p>
                The smallest possible design element are tokens—or essentially,
                variables. Currency keeps a uniform library of tokens that feeds
                to both the Figma component library and the SCSS codebase.
              </p>
              <img src={tokens} />
              <p>
                The most generic example of tokens are colors, spacing, and
                typography, but they extend beyond the initial level and can
                nest upon one another. For example, while{" "}
                <code>$colorPrimary</code> may be a token,{" "}
                <code>$buttonBackgroundColor</code> is also a token that calls
                on <code>$colorPrimary</code>, although the latter is an atomic
                token, as opposed to a base token.
              </p>
              <img src={prototypes} />
            </section>
            <section>
              <h2>Components (Atoms)</h2>
              <p>Atoms are the most basic design elements of the system.</p>
              <img src={components} />
              <p>
                The basis of an atom is that it cannot exist as a smaller
                standalone element. Labels, inputs, error messages, radio
                buttons, buttons, are all examples of atomic components.
              </p>
              <img src={variants} />
              <p>
                Each component has variants of itself to cater to the different
                usecases. Additionally, interactive components also have
                predetermined states.
              </p>
            </section>
            <section>
              <h2>Patterns (Molecules)</h2>
              <p>
                Patterns are a collection of components placed together to form
                a standalone functional component. They can sometimes, although
                rarely, have elements that do not exist as standalone atomic
                components, as they have no real purpose outside of the pattern.
              </p>
              <img src={patterns} />
            </section>
            <section>
              <h2>Documentation Site</h2>
              <p>
                The third component of Currency is the documentation site, which
                not only serves as guidelines and an information portal, but
                showcases the live components directly from the design system
                codebase itself.
              </p>
              <img src={doc} />
              <img src={doc2} />
              <img src={doc3} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;