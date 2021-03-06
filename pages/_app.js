import "../assets/scss/style.scss";
import { Provider } from "react-redux";
import { useStore } from "../store";
import ScrollToTop from "../helpers/scroll-top";
import { ToastProvider } from "react-toast-notifications";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import {
  fetchProducts,
  fetchLingerie,
  fetchBrochures,
  fetchLookbooks,
  fetchPbanners,
  fetchSliders
} from "../redux/actions/productActions";
import client from "../constants/config";
import { useRouter } from "next/router";

import { firebaseCloudMessaging } from "../utils/webPush";

import LoadingScreen from "../helpers/LoadingScreen";
import React, { Fragment, useEffect, useState } from "react";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
        navigator.serviceWorker.register("/firebase-messaging-sw.js").then(
          function(registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
            firebaseCloudMessaging.init();
          },
          function(err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
        // navigator.serviceWorker.register("/service-worker.js").then(registration=>console.log("NWsW registered with scope : ",registration.scope))
        // .catch(e=>console.log("NWsW registration failed: ", e))
      });
    }
    const handleRouteChange = () => {
      setIsLoading(true);
    };
    const completion = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", completion);
  }, [isLoading]);
  const store = useStore(pageProps.initialReduxState);
  
  var productMap = [];
  var lowerCords = [];
  var lingeries = [];
  var brochures = [];
  var lookbooks = [];
  var promotionBanners = [];
  var lpSliders = [];

  const fetchEntry = (contentType, limit, container) => {
    return Promise.resolve(
      client
        .getEntries({
          content_type: contentType,
          limit: limit
        })
        .then(function(entries) {
          entries.items.map(function(entry, i) {
            if (entry.fields) {
              // fetch products

              container[i] = entry.fields;
            }
          });
          container = [...new Set(container)];
        })
    );
  };

  fetchEntry("products", 600, productMap)
    .then(fetchEntry("lowerCoordinate", 100, lowerCords))
    .then(fetchEntry("lingerie", 100, lingeries))
    .then(fetchEntry("promotionBanner", 100, promotionBanners))
    .then(fetchEntry("brochures", 100, brochures))
    .then(fetchEntry("lookbook", 100, lookbooks))
    .then(fetchEntry("landingPageSliders", 100, lpSliders))
    .then(() => {
      store.dispatch(fetchProducts([productMap, lowerCords, lingeries].flat()));
      store.dispatch(fetchLingerie(lingeries));
      store.dispatch(fetchBrochures(brochures));
      store.dispatch(fetchLookbooks(lookbooks));
      store.dispatch(fetchPbanners(promotionBanners));
      store.dispatch(fetchSliders(lpSliders));
    });
  return (
    <Provider store={store}>
      <ToastProvider placement="bottom-left">
        <BreadcrumbsProvider>
          <ScrollToTop>
            <Fragment>
              {/* <Component {...pageProps} /> */}
              {isLoading ? <LoadingScreen /> : <Component {...pageProps} />}
            </Fragment>
          </ScrollToTop>
        </BreadcrumbsProvider>
      </ToastProvider>
    </Provider>
  );
};

export default App;
