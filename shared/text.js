import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 2rem;
    color: ${props => props.color ? props.color: "black"};
`

export const H2 = styled.h2`
    font-size: 1.7 rem;
    color: ${props => props.color ? props.color: "black"};
`
export const H3 = styled.h3`
    font-size: 1.4 rem;
    color: ${props => props.color ? props.color: "black"};
`

export const H4 = styled.h4`
    font-size: 1.1 rem;
    color: ${props => props.color ? props.color: "black"};
`

export const Custom = styled.p`
    font-size: ${props => props.size ? props.size : "0.5rem"};
    font-style: ${props => props.style ? props.style : 'normal'};
    font-weight: ${props => props.weight ? props.weight: "normal"};
    color: ${props => props.color ? props.color: "black"};
    margin: ${props => props.margin ? props.margin: "0"};
    opacity: ${props => props.opacity? props.opacity: "1"};
    display: ${props => props.display? props.display: "block"};
    text-shadow: ${props => props.textShadow ? props.textShadow: "0"};
    border-bottom: ${props => props.bottomBorder ? props.bottomBorder:"0"};
    text-align: ${props => props.align ? props.align : "start"};
    letter-spacing: ${props => props.spacing ? props.spacing : "" };
    font-family: ${props => props.family ? props.family : ""};
    text-transform: ${props => props.transform ? props.transform : "none"};
`;

export const Text = (props) => {
    const { type, children } = props;

    switch (type) {
        case "h1":
            return <H1 {...props}>{children}</H1>
        case "h2":
            return <H2 {...props}>{children}</H2>
        case "h3":
            return <H3 {...props}>{children}</H3>
        case "h4":
            return <H4 {...props}>{children}</H4>
        default:
            return <Custom {...props}>{children}</Custom>
    }
};