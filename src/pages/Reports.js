import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 1rem;
  font-size: 1rem;
  display: inline-block;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Reports = () => {
  return (
    <div className="home">
      <Title>
        Compromisos de Gestión del Fondo de Estimulo al desempeño y logro de
        Resultados sociales
      </Title>

      <IframeContainer>
        <iframe
          src="https://app.powerbi.com/view?r=eyJrIjoiZjhiNzZiNmMtMDFmNS00MDUzLWE0MzMtMTY3OWRhZDhhNjM3IiwidCI6ImQ5OWFkOWI5LTE1ZDQtNGJlYy05MDE3LWFmOTdhOGFlMTk0MSIsImMiOjR9"
          frameborder="0"
          title="test"
          width="100%"
          height="100%"
        ></iframe>
      </IframeContainer>
    </div>
  );
};

export default Reports;
