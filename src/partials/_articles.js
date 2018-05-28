import React, {Component} from 'react';

class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            limit: 13,
            existingNonPinnedCount: null
        };
        this.getBlogFeed();
    }
    render() {
      if(!this.state.articles){
            return null;
      }
      return (
        <div>
            Articles Will go Here !!
        </div>      
      );
    }
    
    getBlogFeed(){
        $.fn.getBlogFeed({
            limit: this.state.limit,
            offset: 0,
            onSuccess: (data, textStatus, jqXHR) => {
                console.log(data);
                this.setState({
                    articles:data.articles,
                    existingNonPinnedCount: data.existingNonPinnedCount
                });
            }
        });
    }
}
export default Articles;