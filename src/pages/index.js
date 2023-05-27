import * as React from "react"
import '../styles/global.css'
import Layout from "../components/layout"
import Hero from "../components/hero"
import Business from "../components/business"
import Technology from "../components/technology"
import RecentPost from "../components/recentpost"
import Videos from "../components/video"
import Lifestyle from "../components/lifestyle"
import Popularpost  from '../components/asidepost'
import Videopost  from '../components/asidepost1'
import Ads from '../components/ads'
import Ads1 from '../components/ads1'
const Home=()=> { 
  return (
    <Layout>
      <>
        <Hero /> 
        {/* ------------Buiness---------------------- */}
        <section className="post_section">
          {/* **********left */}
          <article className="section1">
            <Business />
            {/* ----------------------------- */}
          </article>
          {/* ******************right*/}
          <article className="section2">
            <Popularpost title="random post" />
          </article>
        </section>
        {/* ----------------Technology */}
        <section className="post_section">
          {/* **********left */}
          <article className="section1">
            <Technology />
            {/* ----------------------------- */}
          </article>
          {/* ******************right*/}
          <article className="section2">
            <Ads />
          </article>
        </section>
        {/* -----------Recent post------------------- */}
        <section className="post_section">
          {/* **********left */}
          <article className="section1">
            <RecentPost />
            {/* ----------------------------- */}
          </article>
          {/* ******************right*/}
          <article className="section2">
            <Videopost title="Trending videos" />
          </article>
        </section>
        {/* ---------------Videos------------------------------ */}
        <section className="post_section">
          {/* **********left */}
          <article className="section1">
            <Videos />
            {/* ----------------------------- */}
          </article>
          {/* ******************right*/}
          <article className="section2">
            <Ads />
          </article>
        </section>
        {/* -----------------------Lifestyle-------------------------------- */}
        <section className="post_section">
          {/* **********left */}
          <article className="section1">
            <Lifestyle />
            {/* ----------------------------- */}
          </article>
          {/* ******************right*/}
          <article className="section2"><Ads1/></article>
        </section>
      </>
    </Layout>
  );
}

export default Home