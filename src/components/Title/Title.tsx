import React from 'react';
import styled from 'styled-components';


interface TextProps { 
	title: string;
	titleColor?: string;
	subTitle?: string; 
}

export default function Title({title,titleColor,subTitle}:TextProps) {


	const Flex = styled.div`
	display:flex;
	flex-direction: column;
	 ${title ? "gap: 41px;" : null}
	`

	const H1 = styled.h1`
		display: flex;
		flex-direction: row;
		gap: 15px;
	`;

	const Title = styled.div`
		font-family:  ${({ theme }) => theme.fontFamily};
		font-style: bold;
		font-weight:  ${({ theme }) => theme.fontWeight + 50};
		font-size: 48px;
	`;

	const TitleColor = styled(Title)`
		color: ${({ theme }) => theme.colorThird};
	`;


	const SubTitle = styled.h2`
		display: flex;
		flex-direction: row;	
		margin-left: 5px;
		color: ${({ theme }) => theme.colorPrimary};
		font-family:${({ theme }) => theme.fontFamily};
		font-weight:  ${({ theme }) => theme.fontWeight - 100};
		font-size: 19px;
	`;


	return (
		<>
			<Flex>
				<H1><Title>{title}</Title><TitleColor>{titleColor}</TitleColor></H1>
				{subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
			</Flex>
		</>
	);
}