import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon.png" />
      <link rel="icon" type="image/png" href="/img/favicon.png" />
      <title>Coign Analytics Portal For Training And Administration</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
      <link id="pagestyle" href="/css/custom.css" rel="stylesheet" />
      <link href="/css/nucleo-icons.css" rel="stylesheet" />
      <link href="/css/custom.css" rel="stylesheet" />
      <link href="/css/nucleo-svg.css" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>
      <link id="pagestyle" href="/css/argon-dashboard.css?v=2.0.4" rel="stylesheet" />
    </Helmet>
  );
};

export default Layout;
