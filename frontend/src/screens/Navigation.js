import React, { useState } from 'react';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Navigation = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<div className="nav-container">
			<div className="main-heading">Hello</div>

			<div className="menu-tag-container">
				<UncontrolledButtonDropdown>
					<DropdownToggle tag="span" className="menu-tags">JavaScript</DropdownToggle>

					<DropdownMenu className="dropdown-menu">
						<DropdownItem>Header</DropdownItem>
						<DropdownItem>Some Action</DropdownItem>
						<DropdownItem>Action (disabled)</DropdownItem>
						<DropdownItem />
						<DropdownItem>Foo Action</DropdownItem>
						<DropdownItem>Bar Action</DropdownItem>
						<DropdownItem>Quo Action</DropdownItem>
					</DropdownMenu>
				</UncontrolledButtonDropdown>

				<UncontrolledButtonDropdown>
					<DropdownToggle tag="span" className="menu-tags">MySQL</DropdownToggle>

					<DropdownMenu className="dropdown-menu">
						<DropdownItem>Header</DropdownItem>
						<DropdownItem>Some Action</DropdownItem>
						<DropdownItem>Action (disabled)</DropdownItem>
						<DropdownItem />
						<DropdownItem>Foo Action</DropdownItem>
						<DropdownItem>Bar Action</DropdownItem>
						<DropdownItem>Quo Action</DropdownItem>
					</DropdownMenu>
				</UncontrolledButtonDropdown>

				<UncontrolledButtonDropdown>
					<DropdownToggle tag="span" className="menu-tags">Python</DropdownToggle>

					<DropdownMenu className="dropdown-menu">
						<DropdownItem>Header</DropdownItem>
						<DropdownItem>Some Action</DropdownItem>
						<DropdownItem>Action (disabled)</DropdownItem>
						<DropdownItem />
						<DropdownItem>Foo Action</DropdownItem>
						<DropdownItem>Bar Action</DropdownItem>
						<DropdownItem>Quo Action</DropdownItem>
					</DropdownMenu>
				</UncontrolledButtonDropdown>

				<UncontrolledButtonDropdown>
					<DropdownToggle tag="span" className="menu-tags">Java</DropdownToggle>

					<DropdownMenu className="dropdown-menu">
						<DropdownItem>Header</DropdownItem>
						<DropdownItem>Some Action</DropdownItem>
						<DropdownItem>Action (disabled)</DropdownItem>
						<DropdownItem />
						<DropdownItem>Foo Action</DropdownItem>
						<DropdownItem>Bar Action</DropdownItem>
						<DropdownItem>Quo Action</DropdownItem>
					</DropdownMenu>
				</UncontrolledButtonDropdown>
				
				<UncontrolledButtonDropdown>
					<DropdownToggle tag="span" className="menu-tags">Natural Language Processing</DropdownToggle>

					<DropdownMenu className="dropdown-menu">
						<DropdownItem>Header</DropdownItem>
						<DropdownItem>Some Action</DropdownItem>
						<DropdownItem>Action (disabled)</DropdownItem>
						<DropdownItem />
						<DropdownItem>Foo Action</DropdownItem>
						<DropdownItem>Bar Action</DropdownItem>
						<DropdownItem>Quo Action</DropdownItem>
					</DropdownMenu>
				</UncontrolledButtonDropdown>
			</div>
		</div>
	);
};

export default Navigation;