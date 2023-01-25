import React from 'react';
import styled from 'styled-components';


interface TextProps {
	text: string;
	textColor?: string;
	subText?: string;
}

/**
 * 
 * @param text This is the Text without color render as a h1 
 * @param textColor This is the Text with color render as a h1 (optional parameter)
 * @param subText This is the sub text render as a h2 (optional parameter)
 * @example <Title text="Hello" textColor="Paul" subText="This is a message."/>
 * @returns A component which display the Title and (or not) subTitle
 */

export default function Title({ text, textColor, subText } : TextProps) {
	return ( 
		<Flex>
			<H1><Text>{text}</Text><TextColor>{textColor}</TextColor></H1>
			{subText ? <SubText>{subText}</SubText> : null}
		</Flex>
	);
}

const Flex = styled.div`
	display:flex;
	flex-direction: column;
	gap: 41px;
	`;

const H1 = styled.h1`
		display: flex;
		flex-direction: row;
		gap: 15px;
	`;

const Text = styled.div`
		font-family:  ${({ theme }) => theme.fontFamily};
		font-style: bold;
		font-weight:  ${({ theme }) => theme.fontWeight + 50};
		font-size: 48px;
	`;

const TextColor = styled(Text)`
		color: ${({ theme }) => theme.colorThird};
	`;


const SubText = styled.h2`
		display: flex;
		flex-direction: row;	
		margin-left: 5px;
		color: ${({ theme }) => theme.colorPrimary};
		font-family:${({ theme }) => theme.fontFamily};
		font-weight:  ${({ theme }) => theme.fontWeight - 100};
		font-size: 19px;
	`;