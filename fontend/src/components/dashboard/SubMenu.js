import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarLink = styled(Link)`
	display: flex;
	color: #F3F4F5;
	padding: 10px;
	list-style: none;
	height: 48px;
	text-decoration: none;
	font-size: 14px;
	font-weight: 700;
	&:hover {
		background: white;
		opacity: 0.5;
		cursor: pointer;
		color: #182537;
	}
`;

export const SidebarLabel = styled.span`
	margin-left: 12px;
`;

export const DropdownLink = styled(Link)`
	height: 48px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: white;
	font-size: 14px;
	font-weight: 500;
	&:hover {
		background: gray;
		cursor: pointer;
		color: #182537;
	}
`;

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);
	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
		<SidebarLink to={item.path}
		onClick={item.subNav && showSubnav}>
			<div>
			{item.icon}
			<SidebarLabel>{item.title}</SidebarLabel>
			</div>
			<div>
			{item.subNav && subnav
				? item.iconOpened
				: item.subNav
				? item.iconClosed
				: null}
			</div>
		</SidebarLink>
		{subnav &&
			item.subNav.map((item, index) => {
				return (
					<DropdownLink to={item.path} key={index}>
						{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
					</DropdownLink>
				);
			}
		)}
		</>
	);
};
export default SubMenu;
