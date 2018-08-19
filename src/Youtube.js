import React, {Component} from 'react';

const API='AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelID='UCXgGY0wkgOzynnHvSEVmE3A'
const result=10;

var finalURL=`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component{

  constructor(props){
  	super(props);

  	this.state={
  		resultyt:[]
  	};

  	this.clicked=this.clicked.bind(this);
  }

  clicked(){
  	fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
     // console.log(responseJson);

     const resultyt=responseJson.items.map(obj=>'https://www.youtube.com/embed/'+obj.id.videoId);
     this.setState({resultyt});
     // console.log(this.state.resultyt);
    })
    .catch((error) => {
      console.error(error);
    });
  }


	render(){
		// console.log(finalURL);
		console.log(this.state.resultyt);
     return(
     	<div>
     	<button onClick={this.clicked}>Get Youtube Videos</button>
     	{
     		this.state.resultyt.map((link,i)=>{
     			console.log(link);
     			var frame=< div className='youtube'  key={i}> <iframe  width="560" height="315" src={link}
     	 frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
     	}
     	</div>
     	return frame;
     		})
     	}
     	{this.frame};
     	</div>
     	);
	}
}

export default Youtube;
