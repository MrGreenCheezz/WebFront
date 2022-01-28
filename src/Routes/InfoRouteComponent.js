import { Typography } from "@mui/material";
import React, { Component } from "react";
import "../Styles/InfoPageStyles.css";

export class InfoRouteComponent extends Component {
  render() {
    return (
      <div className="InfoPageComponent">
        <Typography variant="h3" color="primary" className="HeaderOfPage">
          О нас:{" "}
        </Typography>
        <div className="MainContainerOfInfo">
        
        <div className="ContactsContainer">
          <Typography variant="h4" color="common.dark" className="ChildHeader">
            {" "}
            Телефоны:{" "}
          </Typography>
          <Typography variant="h6" color="common.dark" className="InfoContent">
            {" "}
            +7 777 42 38 055{" "}
          </Typography>
          <Typography variant="h6" color="common.dark" className="InfoContent">
            {" "}
            +7 777 42 38 055{" "}
          </Typography>
          <Typography variant="h6" color="common.dark" className="InfoContent">
            {" "}
            +7 777 42 38 055{" "}
          </Typography>
          <Typography variant="h4" color="common.dark" className="ChildHeader">
            {" "}
            Email:{" "}
          </Typography>
          <Typography variant="h6" color="common.dark" className="InfoContent">
            {" "}
            olenenok-bodrik@mail.ru{" "}
          </Typography>
          <Typography variant="h6" color="common.dark" className="InfoContent">
            {" "}
            mcolorcompany@gmail.com{" "}
          </Typography>
        </div>
        <div className="AdresContainer">
          <Typography variant="h4" color="common.dark" className="AdresInfo">
            {" "}
            Адрес:{" "}
          </Typography>
          <Typography variant="h6" color="common.dark" className="AdresText">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab his
            oratores, ab his imperatores ac rerum publicarum principes
            extiterunt. Falli igitur possumus. Inquit, respondet: Quia, nisi
            quod honestum est, nullum est aliud bonum! Non quaero iam verumne
            sit; Universa enim illorum ratione cum tota vestra confligendum
            puto.
          </Typography>
          <div className="MapContainer">
            <a
              className="dg-widget-link"
              href="http://2gis.kz/almaty/profiles/70000001044017046,70000001044016768/center/76.85211181640625,43.28370379473646/zoom/12?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
            >
              Посмотреть на карте Алматы
            </a>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <a
                href="https://yandex.kz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Алматы
              </a>
              <a
                href="https://yandex.kz/maps/profile?ll=76.939485%2C43.277659&utm_medium=mapframe&utm_source=maps&z=18.6"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Яндекс.Карты — транспорт, навигация, поиск мест
              </a>
              <iframe
                src="https://yandex.kz/map-widget/v1/-/CCUyrFGzGA"
                width="560"
                height="400"
                frameBorder="1"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default InfoRouteComponent;
