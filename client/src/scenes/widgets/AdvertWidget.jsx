import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const widgetWrapperStyle = {
    marginBottom: '1rem', 
   };
  // ADS


  return (
    <>
    
    <WidgetWrapper style={widgetWrapperStyle}>
    <a href="https://multimedial.utnba.com.ar/" target="blank" style={{ textDecoration: 'none' }}>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Espacio Publicitario Disponible
        </Typography>
        <Typography color={medium}>Crear Publicidad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://assets.utnba.centrodeelearning.com/public-api/files/3d4375c16192f87874b4d302da32faa5/images"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>UNIVERSIDAD TECNOLÓGICA NACIONAL</Typography>
       </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      CURSOS E-LEARNING, ENTERATE DE NUESTRAS OFERTAS A DISTANCIA
      </Typography>
    </a>
    </WidgetWrapper>
 
<WidgetWrapper style={widgetWrapperStyle}>
<a href="https://www.ilovepdf.com/" target="blank" style={{ textDecoration: 'none' }}>
  <FlexBetween>
    <Typography color={dark} variant="h5" fontWeight="500">
      Espacio Publicitario Disponible
    </Typography>
    <Typography color={medium}>Crear Publicidad</Typography>
  </FlexBetween>
  <img
    width="100%"
    height="auto"
    alt="advert"
    src="https://www.ilovepdf.com/img/ilovepdf.svg"
    style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
  />
  <FlexBetween>
    <Typography color={main}>© iLovePDF 2023 ®</Typography>
  </FlexBetween>
  <Typography color={medium} m="0.5rem 0">
  Every tool you need to work with PDFs in one place
  </Typography>
</a>
</WidgetWrapper>

</>
  );
};

export default AdvertWidget;
