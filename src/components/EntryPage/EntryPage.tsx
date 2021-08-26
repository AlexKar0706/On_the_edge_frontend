/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './EntryPage.css'
import entryImage from '../../assets/entryImage.png'

function EntryPage() {
    return (
        <div>
		<section>
			<div className="header">
				<h2 className="logo">On The Edge</h2>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="/panel">Admin Panel</a>
					</li>
					<li>
						<a href="/game">Game</a>
					</li>
					<li>
						<a href="#">About us</a>
					</li>
				</ul>
			</div>
            <div className="bannerText">
				<h2>Take a chance</h2><br/>
				<h3>And save lives</h3>
				<p>Эта игра для настоящих пацанов, которые не боятся капелек в трусах после туалета</p>
				<a href="#">Play</a>
			</div>
            <div className="entryImage">
                <img src={entryImage} className="bulb"/>
            </div>
			<div className="element1"></div>
			<div className="element2"></div>
		</section>
        </div>
    )
}

export default EntryPage;