import React from 'react'

class Tweet extends React.component {
	render() {
		return (
			<div className="tweet">
				<img src="http://twitter.com/some-avatr.png" className="tweet_avatar"/>
				<div className="tweet_body">
				<p> "We're writing this tweet in JSX. Holy moly!" </p>
				</div>
     		</div>
			)
	}
}