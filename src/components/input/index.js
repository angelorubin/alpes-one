import React from "react";
import * as I from "components/input/styled";

export const Input = () => {
  return <I.Input />;
};

export const InputImageInside = ({ src, alt }) => {
  return (
    <I.Container>
      <I.Image src={src} alt={alt} />
      <I.Input />
    </I.Container>
  );
};
