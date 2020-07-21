import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Navigation = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<div className="nav-container">
			<div className="main-heading">Hello</div>

			<div className="menu-tag-container">
				{/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<div className="menu-tags">JavaScript</div>

					<DropdownMenu>
						<DropdownItem>Header</DropdownItem>
						<DropdownItem>Some Action</DropdownItem>
						<DropdownItem>Action (disabled)</DropdownItem>
						<DropdownItem />
						<DropdownItem>Foo Action</DropdownItem>
						<DropdownItem>Bar Action</DropdownItem>
						<DropdownItem>Quo Action</DropdownItem>
					</DropdownMenu>
				</Dropdown> */}

				<div class="dropdown">
					<div className="menu-tags">JavaScript</div>
				</div>

				<div className="menu-tags">MySQL</div>
				<div className="menu-tags">Python</div>
				<div className="menu-tags">Java</div>
				<div className="menu-tags">Natural Language Processing</div>
			</div>
		</div>
	);
};

export default Navigation;