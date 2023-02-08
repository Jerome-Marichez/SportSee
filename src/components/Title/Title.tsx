import React from 'react';
import styled from 'styled-components';

interface TextProps {
	text: string;
	textColor?: string;
	subText?: string;
}

/**
 * 
 * @param text This is the Text with default color render as a h1 
 * @param textColor This is the Text with 2nd color render as a h1 (optional parameter)
 * @param subText This is the sub text render as a h2 (optional parameter)
 * @example <Title text="Hello" textColor="Paul" subText="This is a message."/>
 * @returns A component which display the Title
 */

export default function Title({ text, textColor, subText }: TextProps) {

	return (
		<FlexTitle>

			<h1>{text}<div className="color">{textColor}</div></h1>
			{subText ? <SubText>{subText}</SubText> : null}
		</FlexTitle>
	);
}

const FlexTitle = styled.div`
	display:flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 70px;
	h1 {
		display: flex;
		flex-direction: row;
		gap: 10px;
		flex-wrap: wrap; 
		
		color: ${({ theme }) => theme.colorPrimary};
		font-family:  ${({ theme }) => theme.fontFamily};
		font-style: bold;
		font-weight:  ${({ theme }) => theme.fontWeight + 50};
		font-size: 48px;
	}

	

	.color {
		color: ${({ theme }) => theme.colorThird};
	}
	`;

const SubText = styled.h2`
		display: flex;
		margin-left: 2px;
		flex-direction: row;	
		color: ${({ theme }) => theme.colorPrimary};
		font-family:${({ theme }) => theme.fontFamily};
		font-weight:  ${({ theme }) => theme.fontWeight - 100};
		font-size: 19px;
	`;