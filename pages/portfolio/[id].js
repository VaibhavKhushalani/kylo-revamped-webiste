import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import LetsWork from "../../components/LetsWork";
import PageHeader from "../../components/PageHeader";
import PortfolioDetails from "../../components/PortfolioDetails";

const TeamPage = () => {
  return (
    <Layout pageTitle=" KYLO APPS | Transforming businesses through">
      <PageHeader title="Portfolio Details" crumbTitle="Portfolio Details" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <PortfolioDetails />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default TeamPage;
