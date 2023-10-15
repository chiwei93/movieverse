import React from "react";
import Navbar from "./Navbar";

describe(
  "<Navbar /> in mobile viewport",
  { viewportHeight: 800, viewportWidth: 375 },
  () => {
    it("should not render any navigation links and search input field", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="navbarLinks"]').should("not.be.visible");
      cy.get('[data-cy="searchInput"]').should("not.be.visible");
    });

    it("should render the hamburger menu, search icon and logo", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="searchIcon"]').should("be.visible");
      cy.get('[data-cy="hamburgerMenu"]').should("be.visible");
      cy.get('[data-cy="navbarLogo"]').should("be.visible");
    });
  },
);

describe(
  "<Navbar /> in tablet viewport",
  { viewportHeight: 900, viewportWidth: 768 },
  () => {
    it("should not render hamburger menu and search input field", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="hamburgerMenu"]').should("not.be.visible");
      cy.get('[data-cy="searchInput"]').should("not.be.visible");
    });

    it("should render search icon, logo and navigation links", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="navbarLogo"]').should("be.visible");
      cy.get('[data-cy="searchIcon"]').should("be.visible");
      cy.get('[data-cy="navbarLinks"]').should("be.visible");
    });

    it("should render 3 navigation links", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="navbarLinks"]')
        .children("li")
        .should((children) => {
          expect(children.length).to.eq(3);
        });
    });
  },
);

describe(
  "<Navbar /> in desktop viewport",
  { viewportHeight: 1000, viewportWidth: 1280 },
  () => {
    it("should not render search icon and hamburger menu", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="hamburgerMenu"]').should("not.be.visible");
      cy.get('[data-cy="searchIcon"]').should("not.be.visible");
    });

    it("should render logo, navigation links and search input field", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="navbarLogo"]').should("be.visible");
      cy.get('[data-cy="navbarLinks"]').should("be.visible");
      cy.get('[data-cy="searchInput"]').should("be.visible");
    });

    it("should render 3 navigation links", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="navbarLinks"]')
        .children("li")
        .should((children) => {
          expect(children.length).to.eq(3);
        });
    });
  },
);
