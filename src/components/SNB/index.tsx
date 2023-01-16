import styled from 'styled-components';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';

const SNB = () => {
	return (
		<Container>
			<ul>
				<section>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>Home</p>
					</li>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>Explore</p>
					</li>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>Subscriptions</p>
					</li>
				</section>
				<section>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>Library</p>
					</li>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>History</p>
					</li>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>Watch later</p>
					</li>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>Linked videos</p>
					</li>
				</section>
				<section>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>Settings</p>
					</li>
					<li>
						<i>
							<AiFillHome color="white" />
						</i>
						<p>Report history</p>
					</li>
				</section>
			</ul>
		</Container>
	);
};

const Container = styled.nav`
	background-color: black;
`;
export default SNB;
