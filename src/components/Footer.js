import React from 'react';
import styled from 'styled-components';

function Footer()
{
	return(
		<FooterContainer className="main-footer">
		<div className="footer-middle">
		<div className="container">
		<div className="row">
		<div className="col-md-3 col-sm-6">
		<h4>Contact</h4>
		<ul className="list-unstyled">
		<li>Address</li>
		<li>Telephone</li>
		<li>E-mail</li>
		</ul>
		</div>
			<div className="col-md-3 col-sm-6">
		<h4>Links</h4>
		<ul className="list-unstyled">
		<li><a href="#">Links</a></li>
		<li><a href="#">Links</a></li>
		<li><a href="#">Links</a></li>
		<li><a href="#">Links</a></li>
		</ul>
		</div>
		<div className="col-md-3 col-sm-6">
		<h4>Links</h4>
		<ul className="list-unstyled">
		<li><a href="#">Links</a></li>
		<li><a href="#">Links</a></li>
		<li><a href="#">Links</a></li>
		<li><a href="#">Links</a></li>
		</ul>
		</div>
		</div>
		 <div className="footer-bottom">
		 <p className="text-xs-center">
		 &copy;{new Date().getFullYear()} Visit Jaipur - All Rights Reserved
		 </p>
		 </div>
		</div>
		</div>
		</FooterContainer>
		)
}

export default Footer;

const FooterContainer =styled.footer`
	.footer-middle{
		background: black;
		padding-top: 3rem;
		color: white;
	}

	.footer-bottom
	{
		padding-top: 3rem;
		padding-bottom: 3rem;
	}

	ul li a {
		color: rgb(109, 109, 109);
	}

	ul li a:hover
	{
		color: white;
		text-decoration:none;
	}

`;