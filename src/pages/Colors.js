import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import Layout from './../components/Layout';
import MainTitleSection from './../components/MainTitleSection';
import SubtitleSection from './../components/SubtitleSection';
import ColorsList from '../components/ColorsList';

const Colors = (props) => {
  return (
    <Layout>
      <section>
        <MainTitleSection title="Colors"></MainTitleSection>
        <SubtitleSection subtitle="How awesome are all this colors!"></SubtitleSection>
        <ColorsList />
        <ReactQueryDevtools initialIsOpen={false} />
      </section>
    </Layout>
  );
};

export default Colors;
