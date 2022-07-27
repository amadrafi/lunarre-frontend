import styled from "styled-components";

export const PrimaryButton = styled.button`
    font-weight: bold;
    border-style: none;
    cursor: pointer;
    
    box-shadow: ${props => props.shadow ? props.shadow : "0px 3px 8px rgba(0, 0, 0, 0.2)"};
    background: ${props => props.background ? props.background : "#FFFEF3"};
    border-radius: ${props => props.radius ? props.radius:"50px"};
    margin: ${props => props.margin ? props.margin : "1em 0 0 0"};
    padding: ${props => props.padding ? props.padding : "0.75em 2em"};
    font-size: ${props => props.size ? props.size : "1rem"};
    opacity: ${props=>(props.disabled? "0.5": "1")};
    width: ${props => props.width ? props.width : "100%"};
    border: ${props => props.border ? props.border : "none"};
    letter-spacing: ${props => props.spacing ? props.spacing : "" };
    font-family: ${props => props.family ? props.family : ""};
`

export const SecondaryButton = styled(PrimaryButton)`
    background: #F8B67A;
`

export const TertiaryButton = styled(PrimaryButton)`
    background: #3B3F46;
    color: white;
`

export const Button = (props) => {
    const { type, children } = props;

    switch (type) {
        case "primary":
            return <PrimaryButton {...props}>{children}</PrimaryButton>
        case "secondary":
            return <SecondaryButton {...props}>{children}</SecondaryButton>
        case "tertiary":
            return <TertiaryButton {...props}>{children}</TertiaryButton>
        default:
            return <PrimaryButton {...props}>{children}</PrimaryButton>
    }
};