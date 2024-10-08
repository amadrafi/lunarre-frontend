import styled from "styled-components";

const plainContainer = (props)=>{
    const {children} = props
    return (<div {...props}>{children}</div>)
}

export const DefaultContainer = styled.div`
    display: block;
    margin: ${props => props.margin ? props.margin : "0"};
    width: ${props => props.width ? props.width : ""};
    height: ${props => props.height ? props.height : ""};
    max-height: ${props => props.maxHeight ? props.maxHeight : ""};
    flex: ${props => props.flex ? props.flex : "0 1 auto"}; 
    padding: ${props => props.padding ? props.padding : "0"};
    background-color: ${props => props.color ? props.color : "none"};
    border-bottom: ${props => props.borderBottom ? props.borderBottom : "medium none color"};
    position: ${props => props.position ? props.position : "static"};
    border-radius: ${props => props.radius ? props.radius : "0"};
    z-index: ${props => props.zIndex ? props.zIndex: "0"};
    opacity: ${props => props.opacity ? props.opacity: ""};
    top: ${props => props.top ? props.top : "auto"};
    right: ${props => props.right ? props.right : "auto"};
    inset: ${props => props.inset ? props.inset : "none"};
    backdrop-filter: ${props => props.backdrop_filter ? props.backdrop_filter : "none"};
    transform: ${props => props.transform ? props.transform : "0"};
    transition: ${props => props.transition ? props.transition : "none"};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : "none"};
`

export const FlexContainer = styled(DefaultContainer)`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
    align-items: ${props => props.align ? props.align : "stretch"};
    flex-direction: ${props => props.direction ? props.direction : "row"};
    `

export const GridContainer = styled(DefaultContainer)`
    display: grid;
    grid-template-columns: ${props => props.column ? props.column: ""}; 
    grid-template-rows: ${props => props.row ? props.row: ""}; 
    gap: ${props => props.gap ? props.gap: ""}; 
    
`

export const ImageContainer = styled(DefaultContainer)`
    position: relative;
    height: ${props => props.height ? props.height: "auto"};
    width: ${props => props.width ? props.width: "auto"};
`

export const Container = (props) => {
    const { type, children } = props;

    switch (type) {
        case "block":
            return <DefaultContainer {...props}>{children}</DefaultContainer>
        case "flex":
            return <FlexContainer {...props}>{children}</FlexContainer>
        case "grid":
            return <GridContainer {...props}>{children}</GridContainer>
        case "image":
            return <ImageContainer {...props}>{children}</ImageContainer>
        default:
            return <DefaultContainer {...props}>{children}</DefaultContainer>
    }
};