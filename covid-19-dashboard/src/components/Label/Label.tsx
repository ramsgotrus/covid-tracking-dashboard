import React, { FC } from "react";

interface LabelProps {
    className?: string,
    header?: string,
    subHeader?: string,
    alignment?: string,
    color?: string
}
const Label: FC<LabelProps> = ({ header, subHeader, color }): JSX.Element => {
    return (
        <div>
            <h1
                style={{
                    color: color
                }}
            >
                {header}
            </h1>
            <p className="area-chart-label-subheader">{subHeader}</p>
        </div>
    );
};

export default Label;
