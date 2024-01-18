import React from 'react'
import styled from 'styled-components';


let message = `Explore the myriad facets of InvestHUB's journey – a tapestry woven with diverse narratives and experiences.\n While alterations have touched some corners, the spirit of innovation remains unwavering.\n Join us in navigating the dynamic landscape of finance, where injected passion and collaborative humor propel us forward..`;

const Trusted = () => {
 
  return (
    <Wrapper>
    <section class="section-white">
 
    <div class="container">
 
        <div class="row">
       


                    <div class="col-md-12 text-center">
                          <h2 class="section-title">The Team Behind InvestHUB</h2>
                          <p class="section-subtitle">{message}</p>                          
                    </div> 
             



            <div class="col-sm-6 col-md-3">
                  <div class="team-item"> 
                      <img src="/images/Brijesh.jpg" class="team-img" alt="pic" />                   
                      <h3>Brijesh Gadewar</h3>            
                      <div class="team-info"><p>Full Stack Developer</p></div>
                      <p>Brijesh Gadewar brings a wealth of expertise to our team as a Full Stack Java Developer, Data Analyst, and Salesforce Admin + Developer. With a keen eye for detail and a passion for innovative solutions, Brijesh plays a pivotal role in shaping the technological landscape of our projects.</p>                
                      <ul class="team-icon">                   
                          <li><a href="https://github.com/Brijesh232001" class="github"><i class="fa fa-github"></i></a></li>                          
                          <li><a href="https://wa.me/qr/333ATPXKSJIMC1" class="whatsapp"><i class="fa fa-whatsapp"></i></a></li>
                          <li><a href="https://www.linkedin.com/in/brijesh-gadewar-20602625b/" class="linkedin"><i class="fa fa-linkedin"></i></a></li>    
                          <li><a href="https://www.instagram.com/b_r_u_200123?igsh=dmhwa2RkYmRiMHRn" class="instagram"><i class="fa fa-instagram"></i></a></li>                      
                      </ul>                                     
                </div>
            </div> 





            <div class="col-sm-6 col-md-3">
                  <div class="team-item">                  
                      <img src="/images/Pratik.jpg" class="team-img" alt="pic" />                     
                      <h3>Pratik Gote</h3>                      
                      <div class="team-info"><p>DevOps Engineer</p></div>
                      <p>Pratik Gote is the driving force behind our seamless operations as a DevOps Engineer. His dedication to optimizing workflows and ensuring smooth deployment processes is the backbone of our technical infrastructure. Pratik's commitment to excellence keeps our projects running efficiently</p>                  
                      <ul class="team-icon">                      
                          <li><a href="https://github.com/praatikgote" class="github"><i class="fa fa-github"></i></a></li>                          
                          <li><a href="https://wa.me/qr/YMF44YDMG4ARK1 " class="whatsapp"><i class="fa fa-whatsapp"></i></a></li>
                          <li><a href="https://in.linkedin.com/in/pratik-gote-516b361b3" class="linkedin"><i class="fa fa-linkedin"></i></a></li>    
                          <li><a href="https://www.instagram.com/gote_pratik?utm_source=qr&igsh=NzFqbW1yMXVwcGtp" class="instagram"><i class="fa fa-instagram"></i></a></li>                          
                      </ul>                      
                  </div>
            </div> 





            <div class="col-sm-6 col-md-3">
                  <div class="team-item">                  
                      <img src="/images/V.jpg" class="team-img" alt="pic" />                     
                      <h3>Vedant Dhakane</h3>                      
                      <div class="team-info"><p>Android Developer</p></div>
                      <p>As our Android Developer, Vedant Dhakane crafts user-centric and cutting-edge mobile experiences. With a creative flair for app development and a commitment to staying ahead of the curve in Android technologies, Vedant plays a key role in bringing our ideas to life on the mobile platform.</p>                  
                      <ul class="team-icon">                      
                          <li><a href="#" class="github"><i class="fa fa-github"></i></a></li>                          
                          <li><a href="#" class="whatsapp"><i class="fa fa-whatsapp"></i></a></li> 
                          <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>    
                          <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>                          
                      </ul>                      
                  </div>
            </div> 





            <div class="col-sm-6 col-md-3">
                  <div class="team-item">                  
                      <img src="/images/Anurag.jpg" class="team-img" alt="pic" />                     
                      <h3>Anurag Nangare</h3>                      
                      <div class="team-info"><p>System Designer</p></div>
                      <p>Anurag Nangare is the visionary behind our system architecture, serving as a System Designer. His strategic approach and meticulous planning ensure the robustness and scalability of our projects. Anurag's innovative and engaging design solutions form the backbone of our systems that gives a perfect structure. </p>                  
                      <ul class="team-icon">                      
                          <li><a href="https://github.com/AnuragNangare" class="github"><i class="fa fa-github"></i></a></li>                          
                          <li><a href="https://wa.me/qr/F5UQNRBNZKWLG1" class="whatsapp"><i class="fa fa-whatsapp"></i></a></li>
                          <li><a href="https://www.linkedin.com/in/anurag-nangare-30999b24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="linkedin"><i class="fa fa-linkedin"></i></a></li>                                                    
                          <li><a href="https://www.instagram.com/anuragnangare?igsh=NXAycmpmamhnc2Mx " class="instagram"><i class="fa fa-instagram"></i></a></li>                          
                      </ul>                      
                  </div>
            </div> 





        </div> 
    
    </div> 

    </section>
    </Wrapper>
  
  )
}

const Wrapper=styled.section`
.section-white {
  background-color: ${({ theme }) => theme.colors.bg};
	padding: 70px 0;
}

.team-item{
  
	background: #fff;
	text-align:center;
	margin:20px 0;
	padding:50px 20px 40px 20px;
	border-radius: 8px 8px;
  
	-webkit-transition: all 0.25s ease-in-out;
	-moz-transition: all 0.25s ease-in-out;
	-ms-transition: all 0.25s ease-in-out;
	-o-transition: all 0.25s ease-in-out;
	transition: all 0.25s ease-in-out;
}

.team-item:hover{
	background: #3956de;
	color: white;
}

.team-item h3{
	margin:20px 0 1px 0!important;
	color:#454545;
	font-size:18px;
	font-weight: 700;
	text-transform:uppercase;
	transition: all .25s ease-in-out;
	-moz-transition: all .25s ease-in-out;
	-webkit-transition: all .25s ease-in-out;
}

.section-subtitle {
	white-space: pre-line;
 }

.team-item:hover h3{
	color:#ddd;
}

.team-info {
	display: block;
	margin-bottom:0;
}

.team-info p{
	color:#acacac;
	font-style:italic;
}

.team-info::after {
    background: #008aff;
    background: -webkit-linear-gradient(135deg, #6B02FF 0%, #985BEF 100%);
    background: -o-linear-gradient(bottom right, #6B02FF, #985BEF);
    background: -moz-linear-gradient(bottom right, #008aff, #1ad2fd);
    background: linear-gradient(135deg, #6B02FF 0%, #985BEF 100%);
    display: inline-block;
    vertical-align: middle;
    content: "";
    width: 50px;
    height: 3px; 
}

.team-img{
	max-width: 140px;
	padding: 6px 6px;
    background-color: #dedede;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
}

ul.team-icon {
	margin-top: 25px;
}

ul.team-icon li{
	display: inline-block;
	margin:0 3px;
	-webkit-transition: all 0.25s ease-in-out;
	-moz-transition: all 0.25s ease-in-out;
	-ms-transition: all 0.25s ease-in-out;
	-o-transition: all 0.25s ease-in-out;
	transition: all 0.25s ease-in-out;
}

ul.team-icon li a{
	margin: 0;
	display: inline-block;
	padding: 8px 8px;
	width: 34px;
	height: 34px;
	font-size: 18px;
	line-height: 18px;
	background-color: #fff;
	border-radius: 50%;
	color:#fff;
}

ul.team-icon li a.github{
	background-color: #000;
}

ul.team-icon li a.whatsapp{
	background-color: #25d366;
}

ul.team-icon li a.linkedin{
	background-color: #3b5998;
}

ul.team-icon li a.instagram{
	background-color: #ea4c89;
}

.team-icon li a:hover{
	color:#dedede;
	-webkit-transition: all 0.25s ease-in-out;
	-moz-transition: all 0.25s ease-in-out;
	-ms-transition: all 0.25s ease-in-out;
	-o-transition: all 0.25s ease-in-out;
	transition: all 0.25s ease-in-out;
}
`;
export default Trusted
