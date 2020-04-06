
import { Jumbotron, Row, Col, Container, ListGroup,Modal,Button} from 'react-bootstrap';
import Profiled from '../components/Profiledisplay';
import {useState,useEffect} from 'react';
import fetch from 'unfetch';

export default function profile(props) {

const [profile,setProfile] = useState({});

    async function fetchProfile(){
        const res = await fetch('/api/profile');
        res
        .json()
        .then(res=>setProfile(res))
        .catch(err=>console.log(err));
    }
  
    useEffect(()=>{
        fetchProfile();
    },[]);

        return(
            <>
            {profile ? <Profiled profile={profile}/>: <Profiled/>}
            </>

        );
}


