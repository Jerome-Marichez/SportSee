import React from 'react';
import styled from 'styled-components';

export default function Title({ text, textColor }) {


	const H1flex = styled.h1`
	display:flex;
	gap: 15px;
	
	`
	const Title = styled.div`
		font-family:  ${({ theme }) => theme.fontFamily};
		font-style: bold;
		font-weight:  ${({ theme }) => theme.fontWeight + 100};
		font-size: 48px;
	`;

	const TitleColor = styled(Title)`
		color: ${({ theme }) => theme.colorThird};
	`;

	return (
		<>
			<H1flex>
				<Title>{text}</Title><TitleColor>{textColor}</TitleColor>
			</H1flex>
		</>
	);
}