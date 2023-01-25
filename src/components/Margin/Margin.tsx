import React from "react";
import styled from "styled-components";

/**
 * 
 * @param px This is the margin-top (px size)
 * @example <Margin px={50}/>
 * @returns A component which will do a margin top
 */

const Margin = styled.div`margin-top: ${props => props.px}px;`;

export default function MarginTop({ px }: { px: number })  {
	return (<Margin px={px} />);
}