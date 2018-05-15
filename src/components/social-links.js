import React, {Component} from 'react';

const SocialLinks = (props) => {
        if(!props.socialData){
            return null;
        }
        const obj = props.socialData;
        let flag = 0;
        for(let key in obj){
            if(obj[key]){
                flag = 1;
            }
        }
        if(flag == 0){
            return null;
        }
        return (
            <div className="footer-main__container__social">
                {props.socialData.facebook && <a href={props.socialData.facebook} target="_blank"><i className="fa fa-facebook-official"></i></a>}
                {props.socialData.twitter && <a href={props.socialData.twitter} target="_blank"><i className="fa fa-twitter"></i></a>}
                {props.socialData.instagram && <a href={props.socialData.instagram} target="_blank"><i className="fa fa-instagram"></i></a>}
                {props.socialData.youtube && <a href={props.socialData.youtube} target="_blank"><i className="fa fa-youtube-play"></i></a>}
            </div>
        ); 
};
export default SocialLinks;
