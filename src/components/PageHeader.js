import React from "react";

const PageHeader = (props) => (
    <h1 className="mb-0">{props.firstWord}<span className="text-primary">{props.secondWord}</span>{props.thirdWord}<span className="text-primary">{props.fourthWord}</span></h1>
);

export { PageHeader as default };